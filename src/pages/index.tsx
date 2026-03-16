import { Avatar, Skeleton, Tabs, Tooltip } from "antd";
import { useEffect, useRef, useState } from "react";
import LazyLoad from "react-lazyload";

import { navigations } from "@/constants/navigations";

// 自定义 Tab 样式
const tabStyles = `
  /* Tab 容器样式 */
  .category-tabs .ant-tabs-nav {
    margin: 0 !important;
  }
  
  .category-tabs .ant-tabs-nav::before {
    border-bottom: none !important;
  }
  
  .category-tabs .ant-tabs-nav-wrap {
    padding: 8px 0;
  }
  
  /* Tab 项基础样式 */
  .category-tabs .ant-tabs-tab {
    margin: 0 4px !important;
    padding: 8px 16px !important;
    background: rgba(255, 255, 255, 0.03) !important;
    border: 1px solid rgba(255, 255, 255, 0.08) !important;
    border-radius: 8px !important;
    transition: all 0.2s ease !important;
  }
  
  .category-tabs .ant-tabs-tab:hover {
    background: rgba(0, 240, 255, 0.08) !important;
    border-color: rgba(0, 240, 255, 0.3) !important;
  }
  
  .category-tabs .ant-tabs-tab:hover .ant-tabs-tab-btn {
    color: #00f0ff !important;
  }
  
  /* Tab 激活状态 */
  .category-tabs .ant-tabs-tab-active {
    background: rgba(0, 240, 255, 0.12) !important;
    border-color: #00f0ff !important;
    box-shadow: 0 0 12px rgba(0, 240, 255, 0.25), inset 0 0 8px rgba(0, 240, 255, 0.08) !important;
  }
  
  .category-tabs .ant-tabs-tab-active .ant-tabs-tab-btn {
    color: #00f0ff !important;
    font-weight: 600 !important;
    text-shadow: 0 0 8px rgba(0, 240, 255, 0.5) !important;
  }
  
  /* Tab 文字颜色 */
  .category-tabs .ant-tabs-tab .ant-tabs-tab-btn {
    color: #9ca3af !important;
    transition: all 0.2s ease !important;
  }
  
  /* 指示线样式 */
  .category-tabs .ant-tabs-ink-bar {
    display: none !important;
  }
`;

/**
 * 滚动到指定分类
 */
const scrollToCategory = (categoryId: string) => {
  const element = document.getElementById(`category-${categoryId}`);
  if (element) {
    // 获取 sticky header 的高度
    const headerHeight = 56; // 约等于 sticky header 的高度
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerHeight;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  }
};

export default function Dashboard() {
  const [activeCategory, setActiveCategory] = useState<string>(
    navigations[0]?.id?.toString() || "2"
  );

  // 用于跟踪是否正在通过点击 tab 触发滚动，避免滚动事件触发 tab 切换
  const isClickingTab = useRef(false);

  // 监听滚动事件，自动切换到当前可见的分类
  useEffect(() => {
    const handleScroll = () => {
      // 如果正在点击 tab，不处理滚动
      if (isClickingTab.current) return;

      const headerHeight = 100; // 顶部导航区域的大致高度

      // 查找当前可见区域的分类
      for (const nav of navigations) {
        const element = document.getElementById(`category-${nav.id}`);
        if (element) {
          const rect = element.getBoundingClientRect();
          // 当分类标题进入可视区域时
          if (rect.top <= headerHeight && rect.bottom > headerHeight) {
            if (activeCategory !== nav.id.toString()) {
              setActiveCategory(nav.id.toString());
            }
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeCategory]);

  // 处理 tab 切换
  const handleTabChange = (key: string) => {
    isClickingTab.current = true;
    setActiveCategory(key);
    scrollToCategory(key);
    // 300ms 后重置点击状态
    setTimeout(() => {
      isClickingTab.current = false;
    }, 300);
  };

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: tabStyles }} />
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

          <div className="relative px-6 py-16 sm:py-20 lg:px-8 lg:py-28">
            {/* Logo */}
            <div className="mb-6 flex justify-center">
              <div
                className="relative h-20 w-20"
                style={{ animation: "float 3s ease-in-out infinite" }}
              >
                <div
                  className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-400 to-purple-500"
                  style={{ animation: "pulse-glow 2s ease-in-out infinite" }}
                />
                <div className="relative flex h-full w-full items-center justify-center rounded-2xl border border-cyan-500/30 bg-gray-900/80 backdrop-blur-sm">
                  <span
                    className="text-3xl font-bold text-cyan-400"
                    style={{ fontFamily: "'Orbitron', sans-serif" }}
                  >
                    H
                  </span>
                </div>
              </div>
            </div>

            <h1 className="text-center text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
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
                className="mt-2 block text-xl font-bold sm:text-2xl lg:text-3xl"
                style={{
                  fontFamily: "'Orbitron', sans-serif",
                  background:
                    "linear-gradient(90deg, #22d3ee, #a855f7, #ec4899)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Frontend Tech
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-center text-base text-gray-400 sm:text-lg">
              <span className="inline-flex items-center gap-2">
                <span
                  className="h-2 w-2 rounded-full bg-cyan-400"
                  style={{ animation: "pulse-dot 1.5s ease-in-out infinite" }}
                />
                探索前沿技术资源
              </span>
              <span className="mx-3 text-gray-600">|</span>
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
            <div className="mt-10 flex justify-center gap-3">
              <div className="h-0.5 w-12 bg-gradient-to-r from-transparent to-cyan-500" />
              <div className="h-0.5 w-16 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500" />
              <div className="h-0.5 w-12 bg-gradient-to-r from-pink-500 to-transparent" />
            </div>
          </div>
        </header>

        {/* 顶部分类导航 Tabs */}
        <div className="sticky top-0 z-50">
          {/* 背景 - 使用固定不透明背景确保不透明 */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(135deg, #0a0a0f 0%, #1a1a2e 50%, #0a0a0f 100%)",
            }}
          />
          {/* 顶部边框发光 */}
          <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-cyan-500/0 via-cyan-500 to-purple-500/0" />
          {/* 底部边框发光 */}
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-cyan-500/0 via-cyan-500/50 to-purple-500/0" />
          {/* Tab 内容 */}
          <div className="max-w-8xl relative mx-auto overflow-x-auto px-4 py-2">
            <Tabs
              activeKey={activeCategory}
              onChange={handleTabChange}
              items={navigations.map((nav) => ({
                key: nav.id.toString(),
                label: (
                  <span className="whitespace-nowrap px-3 py-2 text-sm font-medium transition-all duration-200">
                    {nav.label}
                  </span>
                ),
              }))}
              className="category-tabs"
            />
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-8xl relative mx-auto px-4 pb-16 sm:px-2 lg:px-8 xl:px-12">
          {/* Content Area */}
          <div className="min-w-0 flex-auto">
            {/* 显示所有分类的内容 */}
            {navigations.map((navigation) => (
              <div
                key={navigation.id}
                id={`category-${navigation.id}`}
                className="animate-fade-in"
              >
                {/* Section Header */}
                <div className="relative mb-6 mt-4">
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
                  <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
                    {navigation.children.map((item) => (
                      <div
                        key={item.title}
                        className="group cursor-pointer rounded-xl p-3 transition-all duration-300"
                        style={{
                          background: "rgba(255, 255, 255, 0.03)",
                          backdropFilter: "blur(10px)",
                          border: "1px solid rgba(0, 240, 255, 0.15)",
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
                            "rgba(0, 240, 255, 0.15)";
                          e.currentTarget.style.boxShadow = "";
                        }}
                      >
                        <div className="flex items-start gap-3">
                          <div
                            className="flex-shrink-0 rounded-lg p-1.5"
                            style={{
                              background:
                                "linear-gradient(135deg, rgba(0, 240, 255, 0.2), rgba(168, 85, 247, 0.2))",
                              border: "1px solid rgba(0, 240, 255, 0.3)",
                            }}
                          >
                            <LazyLoad
                              overflow={false}
                              once={false}
                              height={32}
                              offset={50}
                              placeholder={
                                <Skeleton.Avatar
                                  size={32}
                                  shape="circle"
                                  active
                                />
                              }
                            >
                              <Avatar
                                src={item.logoUrl}
                                size={32}
                                shape="square"
                                className="flex-shrink-0"
                                style={{
                                  borderRadius: "6px",
                                }}
                              />
                            </LazyLoad>
                          </div>
                          <div className="min-w-0 flex-1">
                            <Tooltip title={item.title} placement="topLeft">
                              <h3 className="truncate text-sm font-semibold text-white sm:text-base">
                                {item.title}
                              </h3>
                            </Tooltip>
                            <Tooltip title={item.desc} placement="topLeft">
                              <p className="mt-0.5 line-clamp-2 text-xs text-gray-400">
                                {item.desc}
                              </p>
                            </Tooltip>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        {/* <footer className="relative border-t border-gray-800/50 py-8">
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
      </footer> */}
      </div>
    </>
  );
}
