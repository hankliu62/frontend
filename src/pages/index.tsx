/* eslint-disable jsx-a11y/no-redundant-roles */

import { Avatar, Card, Tooltip } from "antd";
import classNames from "classnames";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";

import { navigations } from "@/constants/navigations";

function useAnchor(navigations) {
  const [currentSection, setCurrentSection] = useState(
    navigations[0]?.id || navigations[0]?.title
  );

  const getHeadings = useCallback((navigations) => {
    return navigations
      .flatMap((node) => [
        node.id,
        ...node.children.map((child) => child.title),
      ])
      .map((id) => {
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
        <div className="bg-gray-800 pb-32">
          <header className="py-10">
            <div className="px-4 sm:px-6 lg:px-8">
              <h1 className="text-3xl font-bold tracking-tight text-white">
                Dashboard
              </h1>
            </div>
          </header>
        </div>

        <div className="max-w-8xl relative mx-auto flex justify-center sm:px-2 lg:px-8 xl:px-12">
          {/* 左侧导航条 */}
          <div className="hidden lg:relative lg:block lg:flex-none">
            <div className="absolute inset-y-0 right-0 w-[50vw] bg-slate-50 dark:hidden" />
            <div className="absolute top-16 bottom-0 right-0 hidden h-12 w-px bg-gradient-to-t from-slate-800 dark:block" />
            <div className="absolute top-28 bottom-0 right-0 hidden w-px bg-slate-800 dark:block" />
            <div className="sticky top-[4.5rem] -ml-0.5 overflow-y-auto overflow-x-hidden pt-8 pb-16 pl-0.5">
              <nav aria-labelledby="on-this-page-title" className="w-56">
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
          </div>

          {/* body */}
          <div className="min-w-0 max-w-2xl flex-auto px-8 py-8 lg:max-w-none lg:pr-0 lg:pl-8 xl:px-8">
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
                    <div className="grid grid-cols-4 gap-6">
                      {navigation.children.map((item) => (
                        <Card
                          key={item.title}
                          onClick={() => {
                            window.open(item.siteUrl, "_blank");
                          }}
                          hoverable
                        >
                          <Card.Meta
                            avatar={
                              <Avatar
                                src={item.logoUrl}
                                className="full object-contain shadow"
                              />
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
