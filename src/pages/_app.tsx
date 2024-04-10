import "@/styles/globals.css";
// monaco-editor
import "highlight.js/styles/googlecode.css";
import "diff2html/bundles/css/diff2html.min.css";
// video.js
import "video.js/dist/video-js.min.css";
import "nprogress/nprogress.css";
// markdown-editor
import "@uiw/react-md-editor/markdown-editor.css";
import "@uiw/react-markdown-preview/markdown.css";
import "dayjs/locale/zh-cn";
// 页面滚动元素动画
import "aos/dist/aos.css";

import { StyleProvider } from "@ant-design/cssinjs";
import {
  ConfigProvider as AntdConfigProvider,
  FloatButton,
  Watermark,
} from "antd";
import zhCN from "antd/locale/zh_CN";
import dayjs from "dayjs";
import { NextPage } from "next";
import type { AppProps } from "next/app";
import Head from "next/head";
import Router from "next/router";
import NProgress from "nprogress";
import { ReactElement, ReactNode, useEffect } from "react";
import { Toaster } from "react-hot-toast";

import DefaultLayout from "@/layouts/index";
import { getRoutePrefix } from "@/utils/route";

dayjs.locale("zh_CN");

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

/**
 * 网站入口APP类
 * @param param0
 * @returns
 */
export default function App({ Component, pageProps }: AppPropsWithLayout) {
  useEffect(() => {
    const handleRouteStart = () => NProgress.start();
    const handleRouteDone = () => NProgress.done();

    // add route change event handler
    Router.events.on("routeChangeStart", handleRouteStart);
    Router.events.on("routeChangeComplete", handleRouteDone);
    Router.events.on("routeChangeError", handleRouteDone);

    return () => {
      // Make sure to remove the event handler on unmount!
      Router.events.off("routeChangeStart", handleRouteStart);
      Router.events.off("routeChangeComplete", handleRouteDone);
      Router.events.off("routeChangeError", handleRouteDone);
    };
  }, []);

  // Use the layout defined at the page level, if available
  const getLayout =
    Component.getLayout ?? ((page) => <DefaultLayout>{page}</DefaultLayout>);

  return (
    <>
      <Head>
        <title>卡鲁秋 - 前端小工具</title>
        <link rel="icon" href={`${getRoutePrefix()}/favicon.ico`} />
        <meta
          name="description"
          content="卡鲁秋的前端工具网站，提供了一系列实用的前端开发工具和功能，技术网站汇总，旨在帮助开发者更加高效地进行前端开发。"
        />
        <meta
          name="keywords"
          content="前端工具,前端开发,前端开发工具,前端开发工具集合,toolbox,frontend,卡鲁秋,Hank,HankLiu"
        />
        <meta name="author" content="Hank.Liu" />
      </Head>

      {getLayout(
        <StyleProvider hashPriority="high">
          <AntdConfigProvider locale={zhCN}>
            <Watermark
              content="HankLiu Toolbox"
              font={{ color: "rgba(0, 0, 0, 0.1)" }}
              className="flex h-full flex-1 flex-col"
            >
              <Component {...pageProps} />
            </Watermark>
            <FloatButton.BackTop />
          </AntdConfigProvider>
          <Toaster />
        </StyleProvider>
      )}
    </>
  );
}
