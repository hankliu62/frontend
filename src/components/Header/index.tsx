import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Transition,
} from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { Popover, Tooltip } from "antd";
import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { Fragment, useState } from "react";

import { getRoutePrefix } from "@/utils/route";

const user = {
  name: "Hank Liu",
  email: "hankliu62@163.com",
  imageUrl:
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
};
const navigation = [
  { name: "小链接", href: "/", type: "link" },
  { name: "小工具", href: "/toolkits", type: "link" },
  { name: "小习题", href: "/questions", type: "link" },
  { name: "小文章", href: "/articles", type: "link" },
  { name: "小绘画", href: "/paint", type: "link" },
  { name: "小动画", href: "/icss", type: "link" },
  { name: "小复习", href: "/interview", type: "link" },
  // { name: "小简历", href: "https://hankliu62.github.io/resume", type: "link" },
  { name: "小简历", href: "/resume", type: "link" },
  // { name: "小博客", href: "https://hankliu62.github.io", type: "link" },
  { name: "小博客", href: "/blog", type: "link" },
  { name: "小关于", href: "/about", type: "link" },
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
          <div className="border-b border-gray-700 shadow-md shadow-slate-900/5 transition duration-500 sm:px-6 lg:px-8 dark:bg-transparent dark:shadow-none">
            <div className="flex h-16 items-center justify-between px-4 sm:px-0">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <Link href="/">
                    <Image
                      className="h-8 w-8 rounded bg-white"
                      src={`${getRoutePrefix()}/logo.svg`}
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

                      // 弹出框
                      if (item.type === "popover") {
                        return (
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
                                {(item as any)?.children?.map((subItem) => {
                                  const subLink = (
                                    <a
                                      key={subItem.name}
                                      href={`${getRoutePrefix()}${
                                        subItem.href
                                      }`}
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
                      }

                      if (item.type === "link") {
                        // 判断是否为外部链接
                        return /^https?:\/\//.test(item.href) ? (
                          <a
                            key={item.name}
                            target="_blank"
                            href={item.href}
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
                            rel="noreferrer"
                          >
                            {item.name}
                          </a>
                        ) : (
                          <Link legacyBehavior key={item.name} href={item.href}>
                            {link}
                          </Link>
                        );
                      }
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
                      <MenuButton className="flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                        <span className="sr-only">Open user menu</span>
                        <img
                          className="h-8 w-8 rounded-full"
                          src={user.imageUrl}
                          alt=""
                        />
                      </MenuButton>
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
                      <MenuItems className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        {userNavigation.map((item) => (
                          <MenuItem key={item.name}>
                            {({ focus }) => (
                              <a
                                href={`${getRoutePrefix()}${item.href}`}
                                className={classNames(
                                  focus ? "bg-gray-100" : "",
                                  "block px-4 py-2 text-sm text-gray-700"
                                )}
                              >
                                {item.name}
                              </a>
                            )}
                          </MenuItem>
                        ))}
                      </MenuItems>
                    </Transition>
                  </Menu>
                </div>
              </div>
              <div className="-mr-2 flex md:hidden">
                {/* Mobile menu button */}
                <DisclosureButton className="inline-flex items-center justify-center rounded-md bg-purple-800 p-2 text-purple-400 hover:bg-purple-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-purple-800">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </DisclosureButton>
              </div>
            </div>
          </div>

          <DisclosurePanel className="border-b border-purple-700 bg-white md:hidden">
            <div className="space-y-1 px-2 py-3 sm:px-3">
              {navigation.map((item) => (
                <DisclosureButton
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
                </DisclosureButton>
              ))}
            </div>
            <div className="border-t border-purple-700 pb-3 pt-4">
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
                  <DisclosureButton
                    key={item.name}
                    as="a"
                    href={item.href}
                    className="block rounded-md px-3 py-2 text-base font-medium text-purple-400 hover:bg-purple-700 hover:text-white"
                  >
                    {item.name}
                  </DisclosureButton>
                ))}
              </div>
            </div>
          </DisclosurePanel>
        </>
      )}
    </Disclosure>
  );
}
