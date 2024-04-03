/* eslint-disable jsx-a11y/no-redundant-roles */

import { Affix, Avatar, Card, Collapse, Skeleton, Tooltip } from "antd";
import classNames from "classnames";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import LazyLoad from "react-lazyload";

import { navigations } from "@/constants/navigations";
import { getRoutePrefix } from "@/utils/route";

function useAnchor(navigations) {
  const [currentSection, setCurrentSection] = useState(
    navigations[0]?.id || navigations[0]?.title
  );

  const getHeadings = useCallback((navigations) => {
    // .flatMap((node) => [
    //   node.id,
    //   ...node.children.map((child) => child.title),
    // ])
    return navigations.map(({ id }) => {
      // eslint-disable-next-line unicorn/prefer-query-selector
      const el = document.getElementById(id);
      if (!el) return;

      const style = window.getComputedStyle(el);
      const scrollMt = Number.parseFloat(style.scrollMarginTop);

      const top = window.scrollY + el.getBoundingClientRect().top - scrollMt;
      return { id, top };
    });
  }, []);

  useEffect(() => {
    if (navigations.length === 0) return;
    const headings = getHeadings(navigations);
    if (headings.filter(Boolean).length === 0) return;
    function onScroll() {
      const top = window.scrollY;
      let current = headings[0].id;
      for (const heading of headings) {
        if (top >= heading.top) {
          current = heading.id;
        } else {
          break;
        }
      }
      setCurrentSection(current);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => {
      window.removeEventListener("scroll", onScroll, { passive: true } as any);
    };
  }, [getHeadings, navigations]);

  return currentSection;
}

export default function Dashboard() {
  const currentSection = useAnchor(navigations);

  // 是否展开
  const [expanded, setExpanded] = useState<boolean>(true);

  function isActive(section) {
    if (section.id === currentSection) {
      return true;
    }
    if (!section.children) {
      return false;
    }
    return section.children.findIndex((element) => isActive(element)) > -1;
  }

  return (
    <>
      {/*
        This example requires updating your template:

        ```
        <html class="h-full bg-gray-100">
        <body class="h-full">
        ```
      */}
      <div className="min-h-full">
        <header className="relative">
          <div className="absolute inset-0">
            <img
              className="h-full w-full object-cover"
              src={`${getRoutePrefix()}/dashboard/images/bg.jpg`}
              alt="People working on laptops"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-purple-800 to-indigo-700 mix-blend-multiply" />
          </div>
          <div className="relative px-6 py-16 sm:py-24 lg:px-8 lg:py-32">
            <h1 className="animate__animated animate__bounceInDown text-center text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              <span className="block font-[hanchengwang] text-white">
                前端技术网站分享
              </span>
              <span className="block font-[hanchengwang] text-indigo-200"></span>
            </h1>
            <p className="animate__animated animate__bounceInLeft mx-auto mt-6 max-w-2xl break-all text-center text-xl text-indigo-200 sm:max-w-3xl">
              <span>
                快速便捷地找到自己需要的技术网站，以免浪费时间。网站持续更新中
              </span>
              <span className="inline-block w-[32px] text-left after:animate-[continue_3s_ease-in-out_infinite]"></span>
            </p>
          </div>
        </header>

        <div className="max-w-8xl relative mx-auto flex justify-center sm:px-2 lg:px-8 xl:px-12">
          {/* 左侧导航条 */}
          <div className="hidden lg:relative lg:block lg:flex-none">
            <div className="absolute inset-y-0 right-0 w-[50vw] bg-slate-50 dark:hidden" />
            <div className="absolute bottom-0 right-0 top-16 hidden h-12 w-px bg-gradient-to-t from-slate-800 dark:block" />
            <div className="absolute bottom-0 right-0 top-28 hidden w-px bg-slate-800 dark:block" />
            {/*<div className="sticky top-[0] -ml-0.5 overflow-y-auto overflow-x-hidden pb-16 pl-0.5 pt-8">
              <nav aria-labelledby="menu" className="w-56">
                {navigations.length > 0 && (
                  <>
                    <h2
                      id="on-this-page-title"
                      className="font-display text-lg font-medium text-slate-900 dark:text-white"
                    >
                      技术分类
                    </h2>
                    <ol role="list" className="mt-4 space-y-3 text-base">
                      {navigations.map((section) => (
                        <li key={section.label}>
                          <h3>
                            <Link
                              href={`#${section.id}`}
                              className={classNames(
                                isActive(section)
                                  ? "text-sky-500"
                                  : "font-normal text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-300"
                              )}
                            >
                              {section.label}
                            </Link>
                          </h3>
                          {section.children.length > 0 && (
                            <ol
                              role="list"
                              className="mt-2 hidden space-y-3 pl-5 text-slate-500 dark:text-slate-400"
                            >
                              {section.children.map((subSection) => (
                                <li
                                  key={subSection.title}
                                  id={`${subSection.title}`}
                                >
                                  <Link
                                    href={`#${subSection.title}`}
                                    className={
                                      isActive(subSection)
                                        ? "text-sky-500"
                                        : "hover:text-slate-600 dark:hover:text-slate-300"
                                    }
                                  >
                                    {subSection.title}
                                  </Link>
                                </li>
                              ))}
                            </ol>
                          )}
                        </li>
                      ))}
                    </ol>
                  </>
                )}
              </nav>
            </div>
            */}
            <div className="relative top-[0] z-10 overflow-y-auto overflow-x-hidden pb-16 pl-0.5 pt-8 lg:-ml-4 lg:pr-4 xl:-ml-6 xl:pr-6">
              <Affix offsetTop={24}>
                <Collapse
                  className="question-menus-collapse w-56"
                  defaultActiveKey={["menu"]}
                  onChange={(key) => {
                    setExpanded(key.includes("labels"));
                  }}
                  expandIconPosition="end"
                  items={[
                    {
                      key: "menu",
                      label: <span className="text-base">技术分类</span>,
                      children: (
                        <ul className="list-none space-y-2 overflow-y-auto text-slate-500 dark:text-slate-400">
                          {navigations.map((navigation) => (
                            <li
                              key={navigation.label}
                              id={navigation.label}
                              className={classNames(
                                "border-0 !border-l-2 border-solid border-transparent px-[16px] text-base",
                                {
                                  "!border-sky-500": isActive(navigation),
                                }
                              )}
                            >
                              <Link
                                href={`#${navigation.id}`}
                                className={classNames(
                                  "w-full overflow-hidden !text-[#515767]",
                                  isActive(navigation)
                                    ? "!text-sky-500"
                                    : "!hover:text-slate-600 !dark:hover:text-slate-300"
                                )}
                              >
                                <div className="truncate">
                                  {navigation.label}
                                </div>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      ),
                      extra: (
                        <div className="-mr-2">
                          {expanded ? "收起" : "展开"}
                        </div>
                      ),
                    },
                  ]}
                />
              </Affix>
            </div>
          </div>

          {/* body */}
          <div className="min-w-0 flex-auto px-8 py-8 lg:max-w-none lg:pl-8 lg:pr-0 xl:px-8">
            <ul>
              {navigations?.map((navigation) => (
                <li
                  className="mb-10"
                  id={`${navigation.id}`}
                  key={navigation.label}
                >
                  <div className="mb-4 text-lg font-medium">
                    {navigation.label}
                  </div>
                  {!!navigation.children?.length && (
                    <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 3xl:grid-cols-5">
                      {navigation.children.map((item) => (
                        <Card
                          className="link-card"
                          key={item.title}
                          onClick={() => {
                            window.open(item.siteUrl, "_blank");
                          }}
                          hoverable
                        >
                          <Card.Meta
                            avatar={
                              <LazyLoad
                                overflow={false}
                                once={false}
                                height={30}
                                offset={50}
                                placeholder={
                                  <Skeleton.Avatar
                                    size={30}
                                    shape="circle"
                                    active
                                  />
                                }
                              >
                                <Avatar
                                  src={item.logoUrl}
                                  className="full object-contain shadow"
                                />
                              </LazyLoad>
                            }
                            title={
                              <div className="truncate">
                                <Tooltip title={item.title} placement="topLeft">
                                  <span>{item.title}</span>
                                </Tooltip>
                              </div>
                            }
                            description={
                              <div className="line-clamp-2">
                                <Tooltip title={item.desc} placement="topLeft">
                                  <span>{item.desc}</span>
                                </Tooltip>
                              </div>
                            }
                          />
                        </Card>
                      ))}
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
