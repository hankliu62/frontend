import { Disclosure, Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import {
  AdjustmentsHorizontalIcon,
  Bars3Icon,
  BellIcon,
  CircleStackIcon,
  CodeBracketSquareIcon,
  DocumentTextIcon,
  IdentificationIcon,
  PlayCircleIcon,
  QrCodeIcon,
  VariableIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { Popover, Tooltip } from "antd";
import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { Fragment, useState } from "react";

const user = {
  name: "Tom Cook",
  email: "tom@example.com",
  imageUrl:
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
};
const navigation = [
  {
    name: "小链接",
    href: "/",
    type: "link",
  },
  {
    name: "小工具",
    href: "/toolboxes",
    type: "popover",
    children: [
      {
        name: "内容差异",
        description: "获得文本的差异，并以类似Github Diff效果的方式展示出来。",
        href: "/toolboxes/diff",
        icon: AdjustmentsHorizontalIcon,
      },
      {
        name: "HTML2Markdown",
        description: "工具主要实现从HTML转Markdown的方法",
        href: "/toolboxes/h2d",
        icon: VariableIcon,
      },
      {
        name: "代码编辑器",
        description:
          "基于 VS Code 的代码编辑器，运行在浏览器环境中。编辑器提供代码提示，智能建议等功能。供开发人员远程更方便的编写代码。",
        href: "/toolboxes/monaco-editor",
        icon: CodeBracketSquareIcon,
      },
      {
        name: "SQL编辑器",
        description:
          "基于 VS Code 的SQL编辑器，运行在浏览器环境中。编辑器提供SQL命令提示，智能建议等功能。供开发人员远程更方便的编写SQL。",
        href: "/toolboxes/sql-editor",
        icon: CircleStackIcon,
      },
      {
        name: "QRCode",
        description:
          "把二维码技术变成简单实用的产品，让每个人都可以快速复用成功案例经验，免费制作出能高效解决业务问题的二维码。",
        href: "/toolboxes/qrcode",
        icon: QrCodeIcon,
      },
      {
        name: "VideoPlayer",
        description:
          "支持m3u8格式的在线视频播放器网站提供了便捷的视频播放服务，用户可以在网站上上传或输入m3u8格式的视频链接进行播放，涵盖了丰富的视频分类和资源，满足用户各种需求。同时，该网站还提供了多种播放模式、清晰度选择和画面比例调整等功能，用户可以根据自己的喜好自主进行设置，让视频观看更加舒适，是一款值得推荐的在线视频播放器网站。",
        href: "/toolboxes/video-player",
        icon: PlayCircleIcon,
      },
      {
        name: "Markdown 编辑阅读器",
        description:
          "Markdown 编辑阅读器，为用户提供了在线编写Markdown文档的平台，用户只需打开网站，就可以在网页上直接编写 Markdown 文档，通过在线编辑器可以让用户快速方便地在线创作、编辑、预览 Markdown 文档，进一步提高编辑效率和文档质量。",
        href: "/toolboxes/markdown",
        icon: DocumentTextIcon,
      },
      {
        name: "身份证生成器",
        description:
          "身份证号码生成器是按身份证验证规则生成虚拟身份证号，非真实身份证，仅供测试使用，请勿用于非法用途。",
        href: "/toolboxes/id-no",
        icon: IdentificationIcon,
      },
    ],
  },
  { name: "小练习", href: "/questions", type: "link" },
  { name: "小作文", href: "/compositions", type: "link" },
  { name: "小绘画", href: "/paints", type: "link" },
];
const userNavigation = [
  { name: "Your Profile", href: "#" },
  { name: "Settings", href: "#" },
  { name: "Sign out", href: "#" },
];

export interface IHeaderProps {
  className?: string;
}

/**
 * 网页头部
 */
export default function Header({ className }: IHeaderProps) {
  const router = useRouter();

  const [openSubMenuPopover, setOpenSubMenuPopover] = useState<
    Partial<Record<(typeof navigation)[number]["href"], boolean>>
  >({});

  return (
    <Disclosure
      as="nav"
      className={classNames(
        "z-10 h-[65px] bg-gradient-to-r from-purple-800 to-indigo-700",
        {
          [className]: className,
        }
      )}
    >
      {({ open }) => (
        <>
          <div className="border-b border-gray-700 shadow-md shadow-slate-900/5 transition duration-500 dark:bg-transparent dark:shadow-none sm:px-6 lg:px-8">
            <div className="flex h-16 items-center justify-between px-4 sm:px-0">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <Link href="/">
                    <Image
                      className="h-8 w-8"
                      src="/logo.svg"
                      alt="卡鲁秋"
                      width={32}
                      height={32}
                    />
                  </Link>
                </div>
                <div className="hidden md:block">
                  <div className="ml-10 flex items-baseline space-x-4">
                    {navigation.map((item) => {
                      const link = (
                        <a
                          className={classNames(
                            (
                              item.href === "/"
                                ? router.asPath === item.href
                                : router.asPath.startsWith(item.href)
                            )
                              ? "bg-purple-900 text-white"
                              : "text-gray-300 hover:bg-purple-700 hover:text-white",
                            "rounded-md px-3 py-2 text-sm font-medium"
                          )}
                          aria-current={
                            (
                              item.href === "/"
                                ? router.asPath === item.href
                                : router.asPath.startsWith(item.href)
                            )
                              ? "page"
                              : undefined
                          }
                        >
                          {item.type === "popover" ? (
                            <span className="flex items-center">
                              <span>{item.name}</span>
                              <ChevronDownIcon
                                className="ml-1 h-5 w-5"
                                aria-hidden="true"
                              />
                            </span>
                          ) : (
                            item.name
                          )}
                        </a>
                      );
                      return item.type === "link" ? (
                        <Link legacyBehavior key={item.name} href={item.href}>
                          {link}
                        </Link>
                      ) : (
                        <Popover
                          open={openSubMenuPopover[item.href]}
                          onOpenChange={(open) => {
                            setOpenSubMenuPopover((prev) => ({
                              ...prev,
                              [item.href]: open,
                            }));
                          }}
                          trigger="click"
                          placement="bottomLeft"
                          arrow={false}
                          key={item.name}
                          content={
                            <div className="relative grid grid-cols-2 gap-4 bg-white px-2 py-3 sm:gap-6 sm:p-4 2xl:grid-cols-3">
                              {item.children.map((subItem) => {
                                const subLink = (
                                  <a
                                    key={subItem.name}
                                    href={subItem.href}
                                    className="-m-3 flex items-start rounded-lg p-3 hover:bg-gray-50"
                                    onClick={() => {
                                      setOpenSubMenuPopover((prev) => ({
                                        ...prev,
                                        [item.href]: false,
                                      }));
                                    }}
                                  >
                                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-md bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
                                      <subItem.icon
                                        className="h-5 w-5"
                                        aria-hidden="true"
                                      />
                                    </div>
                                    <div className="ml-2 max-w-[150px] truncate">
                                      <p className="truncate text-sm font-medium text-gray-900">
                                        {subItem.name}
                                      </p>
                                      <p className="mt-1 truncate text-xs text-gray-500">
                                        <Tooltip
                                          placement="topLeft"
                                          title={subItem.description}
                                        >
                                          <span>{subItem.description}</span>
                                        </Tooltip>
                                      </p>
                                    </div>
                                  </a>
                                );

                                // 判断是否为内部链接
                                return subItem.href.startsWith(item.href) ? (
                                  <Link
                                    legacyBehavior
                                    key={subItem.name}
                                    href={subItem.href}
                                  >
                                    {subLink}
                                  </Link>
                                ) : (
                                  <span key={subItem.name}>{subLink}</span>
                                );
                              })}
                            </div>
                          }
                        >
                          {link}
                        </Popover>
                      );
                    })}
                  </div>
                </div>
              </div>
              {/* PC端 - 右侧个人信息 */}
              <div className="hidden md:hidden">
                <div className="ml-4 flex items-center md:ml-6">
                  <button
                    type="button"
                    className="rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                  >
                    <span className="sr-only">View notifications</span>
                    <BellIcon className="h-6 w-6" aria-hidden="true" />
                  </button>

                  {/* Profile dropdown */}
                  <Menu as="div" className="relative ml-3">
                    <div>
                      <Menu.Button className="flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                        <span className="sr-only">Open user menu</span>
                        <img
                          className="h-8 w-8 rounded-full"
                          src={user.imageUrl}
                          alt=""
                        />
                      </Menu.Button>
                    </div>
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        {userNavigation.map((item) => (
                          <Menu.Item key={item.name}>
                            {({ active }) => (
                              <a
                                href={item.href}
                                className={classNames(
                                  active ? "bg-gray-100" : "",
                                  "block px-4 py-2 text-sm text-gray-700"
                                )}
                              >
                                {item.name}
                              </a>
                            )}
                          </Menu.Item>
                        ))}
                      </Menu.Items>
                    </Transition>
                  </Menu>
                </div>
              </div>
              <div className="-mr-2 flex md:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md bg-purple-800 p-2 text-purple-400 hover:bg-purple-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-purple-800">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="border-b border-purple-700 bg-white md:hidden">
            <div className="space-y-1 px-2 py-3 sm:px-3">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    (
                      item.href === "/"
                        ? router.asPath === item.href
                        : router.asPath.startsWith(item.href)
                    )
                      ? "bg-purple-900 text-white"
                      : "text-purple-400 hover:bg-purple-700 hover:text-white",
                    "block rounded-md px-3 py-2 text-base font-medium"
                  )}
                  aria-current={
                    (
                      item.href === "/"
                        ? router.asPath === item.href
                        : router.asPath.startsWith(item.href)
                    )
                      ? "page"
                      : undefined
                  }
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
            <div className="border-t border-purple-700 pt-4 pb-3">
              <div className="flex items-center px-5">
                <div className="flex-shrink-0">
                  <img
                    className="h-10 w-10 rounded-full"
                    src={user.imageUrl}
                    alt=""
                  />
                </div>
                <div className="ml-3">
                  <div className="text-base font-medium leading-none text-purple-500">
                    {user.name}
                  </div>
                  <div className="text-sm font-medium leading-none text-purple-400">
                    {user.email}
                  </div>
                </div>
                <button
                  type="button"
                  className="ml-auto flex-shrink-0 rounded-full bg-purple-800 p-1 text-purple-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-purple-800"
                >
                  <span className="sr-only">View notifications</span>
                  <BellIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              <div className="mt-3 space-y-1 px-2">
                {userNavigation.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    as="a"
                    href={item.href}
                    className="block rounded-md px-3 py-2 text-base font-medium text-purple-400 hover:bg-purple-700 hover:text-white"
                  >
                    {item.name}
                  </Disclosure.Button>
                ))}
              </div>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
