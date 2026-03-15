import { Affix, Avatar, Collapse, Skeleton, Tooltip } from "antd";
import classNames from "classnames";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import LazyLoad from "react-lazyload";

import { navigations } from "@/constants/navigations";

function useAnchor(navigations: any[]) {
  const [currentSection, setCurrentSection] = useState(
    navigations[0]?.id || navigations[0]?.title
  );

  const getHeadings = useCallback((navigations: any[]) => {
    return navigations.map(({ id }) => {
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
      window.removeEventListener("scroll", onScroll);
    };
  }, [getHeadings, navigations]);

  return currentSection;
}

export default function Dashboard() {
  const currentSection = useAnchor(navigations);
  const [expanded, setExpanded] = useState<boolean>(true);

  function isActive(section: any) {
    if (section.id === currentSection) {
      return true;
    }
    if (!section.children) {
      return false;
    }
    return section.children.findIndex((element: any) => isActive(element)) > -1;
  }

  return (
    <div
      className="min-h-full"
      style={{
        background:
          "linear-gradient(135deg, #0a0a0f 0%, #1a1a2e 50%, #0a0a0f 100%)",
        fontFamily: "'Exo 2', sans-serif",
      }}
    >
      {/* Hero Section */}
      <header className="relative overflow-hidden">
        {/* 背景装饰 */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -left-1/2 -top-1/2 h-full w-full rounded-full bg-gradient-to-br from-cyan-500/20 via-purple-500/10 to-pink-500/20 blur-3xl" />
          <div className="absolute -bottom-1/2 -right-1/2 h-full w-full rounded-full bg-gradient-to-tl from-blue-500/20 via-indigo-500/10 to-cyan-500/20 blur-3xl" />
        </div>

        <div className="relative px-6 py-20 sm:py-28 lg:px-8 lg:py-36">
          {/* Logo */}
          <div className="mb-8 flex justify-center">
            <div
              className="relative h-24 w-24"
              style={{ animation: "float 3s ease-in-out infinite" }}
            >
              <div
                className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-400 to-purple-500"
                style={{ animation: "pulse-glow 2s ease-in-out infinite" }}
              />
              <div className="relative flex h-full w-full items-center justify-center rounded-2xl border border-cyan-500/30 bg-gray-900/80 backdrop-blur-sm">
                <span
                  className="text-4xl font-bold text-cyan-400"
                  style={{ fontFamily: "'Orbitron', sans-serif" }}
                >
                  H
                </span>
              </div>
            </div>
          </div>

          <h1 className="text-center text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
            <span
              className="block text-white"
              style={{
                fontFamily: "'Orbitron', sans-serif",
                textShadow:
                  "0 0 5px #00f0ff, 0 0 10px #00f0ff, 0 0 20px #00f0ff, 0 0 40px #00f0ff",
              }}
            >
              前端技术导航
            </span>
            <span
              className="mt-2 block text-2xl font-bold sm:text-3xl lg:text-4xl"
              style={{
                fontFamily: "'Orbitron', sans-serif",
                background: "linear-gradient(90deg, #22d3ee, #a855f7, #ec4899)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Frontend Tech
            </span>
          </h1>

          <p className="mx-auto mt-8 max-w-2xl text-center text-lg text-gray-400 sm:text-xl">
            <span className="inline-flex items-center gap-2">
              <span
                className="h-2 w-2 rounded-full bg-cyan-400"
                style={{ animation: "pulse-dot 1.5s ease-in-out infinite" }}
              />
              探索前沿技术资源
            </span>
            <span className="mx-4 text-gray-600">|</span>
            <span className="inline-flex items-center gap-2">
              <span
                className="h-2 w-2 rounded-full bg-purple-400"
                style={{
                  animation: "pulse-dot 1.5s ease-in-out infinite",
                  animationDelay: "0.5s",
                }}
              />
              打造高效开发工具集
            </span>
          </p>

          {/* 装饰线条 */}
          <div className="mt-12 flex justify-center gap-4">
            <div className="h-1 w-20 bg-gradient-to-r from-transparent to-cyan-500" />
            <div className="h-1 w-20 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500" />
            <div className="h-1 w-20 bg-gradient-to-r from-pink-500 to-transparent" />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-8xl relative mx-auto px-4 pb-16 sm:px-2 lg:px-8 xl:px-12">
        {/* 左侧导航 */}
        <div className="hidden lg:relative lg:block lg:flex-none">
          <div className="sticky top-8">
            <div className="rounded-xl border border-gray-800 bg-gray-900/50 p-4 backdrop-blur-sm">
              <Collapse
                className="question-menus-collapse"
                defaultActiveKey={["menu"]}
                onChange={(key) => {
                  setExpanded(key.includes("labels"));
                }}
                expandIconPosition="end"
                items={[
                  {
                    key: "menu",
                    label: (
                      <span
                        className="text-base text-cyan-400"
                        style={{ fontFamily: "'Orbitron', sans-serif" }}
                      >
                        分类导航
                      </span>
                    ),
                    children: (
                      <ul className="list-none space-y-2">
                        {navigations.map((navigation) => (
                          <li
                            key={navigation.label}
                            id={navigation.label}
                            className={classNames(
                              "border-l-2 px-3 py-2 transition-all duration-300",
                              {
                                "border-cyan-500 bg-cyan-500/10 text-cyan-400":
                                  isActive(navigation),
                                "border-transparent text-gray-400 hover:border-purple-500/50 hover:text-purple-400":
                                  !isActive(navigation),
                              }
                            )}
                          >
                            <Link href={`#${navigation.id}`} className="block">
                              {navigation.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    ),
                    extra: (
                      <span className="text-sm text-gray-500">
                        {expanded ? "收起" : "展开"}
                      </span>
                    ),
                  },
                ]}
              />
            </div>
          </div>
        </div>

        {/* Content Area */}
        <div className="min-w-0 flex-auto lg:pl-8">
          <ul>
            {navigations?.map((navigation) => (
              <li
                className="mb-12"
                id={`${navigation.id}`}
                key={navigation.label}
              >
                {/* Section Header */}
                <div className="relative mb-6">
                  <div className="absolute -left-4 top-1/2 h-8 w-1 -translate-y-1/2 rounded-full bg-gradient-to-b from-cyan-500 to-purple-500" />
                  <h2
                    className="pl-4 text-2xl font-bold sm:text-3xl"
                    style={{
                      fontFamily: "'Orbitron', sans-serif",
                      background:
                        "linear-gradient(90deg, #22d3ee, #a855f7, #ec4899)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    {navigation.label}
                  </h2>
                </div>

                {!!navigation.children?.length && (
                  <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-6 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
                    {navigation.children.map((item) => (
                      <div
                        key={item.title}
                        className="cursor-pointer rounded-xl p-4 transition-all duration-300"
                        style={{
                          background: "rgba(255, 255, 255, 0.03)",
                          backdropFilter: "blur(10px)",
                          border: "1px solid rgba(0, 240, 255, 0.2)",
                        }}
                        onClick={() => {
                          window.open(item.siteUrl, "_blank");
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.transform =
                            "translateY(-4px) scale(1.02)";
                          e.currentTarget.style.borderColor = "#00f0ff";
                          e.currentTarget.style.boxShadow =
                            "0 0 20px rgba(0, 240, 255, 0.3), 0 10px 40px rgba(0, 0, 0, 0.5)";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.transform = "";
                          e.currentTarget.style.borderColor =
                            "rgba(0, 240, 255, 0.2)";
                          e.currentTarget.style.boxShadow = "";
                        }}
                      >
                        <div className="flex items-start gap-3">
                          <LazyLoad
                            overflow={false}
                            once={false}
                            height={36}
                            offset={50}
                            placeholder={
                              <Skeleton.Avatar
                                size={36}
                                shape="circle"
                                active
                              />
                            }
                          >
                            <Avatar
                              src={item.logoUrl}
                              size={36}
                              className="flex-shrink-0"
                              style={{
                                border: "2px solid rgba(0, 240, 255, 0.3)",
                              }}
                            />
                          </LazyLoad>
                          <div className="min-w-0 flex-1">
                            <Tooltip title={item.title} placement="topLeft">
                              <h3 className="truncate text-sm font-semibold text-white sm:text-base">
                                {item.title}
                              </h3>
                            </Tooltip>
                            <Tooltip title={item.desc} placement="topLeft">
                              <p className="mt-1 line-clamp-2 text-xs text-gray-400 sm:text-sm">
                                {item.desc}
                              </p>
                            </Tooltip>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Footer */}
      <footer className="relative border-t border-gray-800/50 py-8">
        <div className="max-w-8xl mx-auto px-4 text-center">
          <p
            className="text-sm text-gray-500"
            style={{ fontFamily: "'Orbitron', sans-serif" }}
          >
            <span className="text-cyan-400">&lt;</span> Built with Next.js &
            React <span className="text-purple-400">/&gt;</span>
          </p>
          <p className="mt-2 text-xs text-gray-600">
            © 2024 HankLiu. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
