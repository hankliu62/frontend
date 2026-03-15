import { Cascader } from "antd";
import { useMemo } from "react";

import { locations } from "./location";

interface TreeData {
  label: string;
  value: string;
  children?: TreeData[];
}

interface LocationCascaderProps {
  placeholder?: string;
  className?: string;
  value?: any;
  onChange?: (value: any, selectOptions?: any) => void;
  disabled?: boolean;
  size?: "small" | "middle" | "large";
}

export default function LocationCascader(props: LocationCascaderProps) {
  const {
    placeholder = "省市 / 城市 / 县区",
    className,
    value,
    onChange,
    disabled,
    size,
  } = props;

  const options = useMemo(() => {
    return convertLocationListToTree(locations);
  }, []);

  return (
    <Cascader
      className={`location-select-cascader ${className || ""}`}
      options={options}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      disabled={disabled}
      size={size}
      changeOnSelect
    />
  );
}

function convertLocationListToTree(
  list: { id: string; name: string; superId: string }[]
) {
  const result: TreeData[] = [];
  const temp: Record<string, TreeData> = {};
  for (const item of list) {
    const treeNode: TreeData = {
      label: item.name,
      value: item.id,
    };

    temp[item.id] = treeNode;
  }

  for (const item of list) {
    if (item.superId === "0") {
      result.push(temp[item.id]);
    } else if (item.superId) {
      const parent = temp[item.superId];
      if (!parent.children) parent.children = [];
      parent.children.push(temp[item.id]);
    }
  }
  return result;
}
