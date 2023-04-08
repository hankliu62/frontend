import dayjs from "dayjs";

import { locationIDNoMap } from "@/components/Location/location";
import { ESex } from "@/enums/common";

// 身份证加权因子
export const IDNoWeightingFactor = [
  7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2, 1,
];
// 身份证验证位值.10代表X
export const IDNoVerifyBitValue = [1, 0, 10, 9, 8, 7, 6, 5, 4, 3, 2];

export interface IParseIDNoInfo {
  isTrue: boolean; // 身份证号是否有效。默认为 false
  year: null | number; // 出生年。默认为null
  month: null | number; // 出生月。默认为null
  day: null | number; // 出生日。默认为null
  birthday: null | string; // 生日。默认为null
  isMale: boolean; // 是否为男性。默认false
  isFemale: boolean; // 是否为女性。默认false
  province: null | string; // 省。默认为null
  city: null | string; // 市。默认为null
  county: null | string; // 县。默认为null
}

/**
 * 根据身份证号码解析信息
 *
 * @param IDNo
 * @returns
 */
export function parseIDNoInfo(IDNo: string) {
  const info: IParseIDNoInfo = {
    isTrue: false, // 身份证号是否有效。默认为 false
    year: null, // 出生年。默认为null
    month: null, // 出生月。默认为null
    day: null, // 出生日。默认为null
    birthday: null, // 生日。默认为null
    isMale: false, // 是否为男性。默认false
    isFemale: false, // 是否为女性。默认false
    province: null, // 省
    city: null, // 市
    county: null, // 县
  };

  /**
   * 根据身份证号码获取地址信息
   * @returns
   */
  function getAddressInfo(): Pick<
    IParseIDNoInfo,
    "province" | "city" | "county"
  > {
    const info: Pick<IParseIDNoInfo, "province" | "city" | "county"> = {
      province: null, // 省
      city: null, // 市
      county: null, // 县
    };

    // 地址
    const address = IDNo.slice(0, 6);
    const location = locationIDNoMap[address];
    if (location) {
      if (location.superId === "0") {
        info.province = location.name;
      } else {
        const parentLocation = locationIDNoMap[location.superId];
        if (parentLocation) {
          if (parentLocation.superId === "0") {
            info.province = parentLocation.name;
            info.city = location.name;
          } else {
            const rootLocation = locationIDNoMap[parentLocation.superId];
            if (rootLocation?.superId === "0") {
              info.province = rootLocation.name;
              info.city = parentLocation.name;
              info.county = location.name;
            }
          }
        }
      }
    }

    return info;
  }

  if (!IDNo || (IDNo.length !== 15 && IDNo.length !== 18)) {
    info.isTrue = false;
    return info;
  }

  if (IDNo.length === 15) {
    const year = IDNo.slice(6, 8);
    const month = IDNo.slice(8, 10);
    const day = IDNo.slice(10, 12);
    const p = IDNo.slice(14, 15); // 性别位
    const birthday = new Date(
      Number.parseInt(year, 10),
      Number.parseInt(month, 10) - 1,
      Number.parseInt(day, 10)
    );
    // 对于老身份证中的年龄则不需考虑千年虫问题而使用getYear()方法
    if (
      birthday.getFullYear() !== Number.parseInt(year) ||
      birthday.getMonth() !== Number.parseInt(month) - 1 ||
      birthday.getDate() !== Number.parseInt(day)
    ) {
      info.isTrue = false;
    } else {
      info.isTrue = true;
      info.year = birthday.getFullYear();
      info.month = birthday.getMonth() + 1;
      info.day = birthday.getDate();
      info.birthday = dayjs(birthday).format("YYYY-MM-DD");

      if (Number.parseInt(p, 10) % 2 === 0) {
        info.isFemale = true;
        info.isMale = false;
      } else {
        info.isFemale = false;
        info.isMale = true;
      }

      // 获取身份证地址信息
      const address = getAddressInfo();
      info.province = address.province;
      info.city = address.city;
      info.county = address.county;
    }

    return info;
  }

  if (IDNo.length === 18) {
    const year = IDNo.slice(6, 10);
    const month = IDNo.slice(10, 12);
    const day = IDNo.slice(12, 14);
    const p = IDNo.slice(14, 17);
    const birthday = new Date(
      Number.parseInt(year, 10),
      Number.parseInt(month, 10) - 1,
      Number.parseInt(day, 10)
    );
    // 这里用getFullYear()获取年份，避免千年虫问题
    if (
      birthday.getFullYear() !== Number.parseInt(year, 10) ||
      birthday.getMonth() !== Number.parseInt(month, 10) - 1 ||
      birthday.getDate() !== Number.parseInt(day, 10)
    ) {
      info.isTrue = false;
      return info;
    }

    const Wi = IDNoWeightingFactor; // 加权因子
    const Y = IDNoVerifyBitValue; // 身份证验证位值.10代表X

    // 验证校验位
    let sum = 0; // 声明加权求和变量
    // eslint-disable-next-line unicorn/prefer-spread
    const _IDNo: any[] = IDNo.split("");

    if ((_IDNo[17] as string).toLowerCase() === "x") {
      _IDNo[17] = "10"; // 将最后位为x的验证码替换为10方便后续操作
    }
    for (let i = 0; i < 17; i++) {
      sum += Wi[i] * _IDNo[i]; // 加权求和
    }
    const i = sum % 11; // 得到验证码所位置

    if (Number(_IDNo[17]) !== Y[i]) {
      info.isTrue = false;
      return info;
    }

    info.isTrue = true;
    info.year = birthday.getFullYear();
    info.month = birthday.getMonth() + 1;
    info.day = birthday.getDate();
    info.birthday = dayjs(birthday).format("YYYY-MM-DD");

    if (Number.parseInt(p, 10) % 2 === 0) {
      info.isFemale = true;
      info.isMale = false;
    } else {
      info.isFemale = false;
      info.isMale = true;
    }

    // 获取身份证地址信息
    const address = getAddressInfo();
    info.province = address.province;
    info.city = address.city;
    info.county = address.county;

    return info;
  }

  return info;
}

/**
 * 随机生成身份证号码
 *
 * @param addressNo 地区身份证前缀
 * @param birthday 生日
 * @param sex 性别
 */
export function generateIDNo(
  addressNo: string,
  birthday: Date,
  sex: ESex
): string {
  const day = dayjs(birthday).format("YYYYMMDD"); // 生日

  let s = "";
  while (!s) {
    const randomStr =
      Math.floor(Math.random() * 10).toString() +
      Math.floor(Math.random() * 10).toString() +
      Math.floor(Math.random() * 10).toString();

    if (sex === ESex.Female && Number.parseInt(randomStr, 10) % 2 === 0) {
      s = randomStr;
    } else if (sex === ESex.Male && Number.parseInt(randomStr, 10) % 2 !== 0) {
      s = randomStr;
    }
  }

  // eslint-disable-next-line unicorn/prefer-spread
  const idNoCodes = (addressNo + day + s).split("");
  let total = 0;
  for (let index = 0, len = idNoCodes.length; index < len; index++) {
    total =
      total + Number.parseInt(idNoCodes[index]) * IDNoWeightingFactor[index];
  }
  const lastCode = IDNoVerifyBitValue[total % 11];

  return addressNo + day + s + (lastCode === 10 ? "X" : lastCode);
}
