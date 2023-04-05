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

import { StyleProvider } from "@ant-design/cssinjs";
import { ConfigProvider as AntdConfigProvider, Watermark } from "antd";
import zhCN from "antd/locale/zh_CN";
import { NextPage } from "next";
import type { AppProps } from "next/app";
import Head from "next/head";
import Router from "next/router";
import NProgress from "nprogress";
import { ReactElement, ReactNode, useEffect } from "react";
import { Toaster } from "react-hot-toast";

import DefaultLayout from "@/layouts/index";

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  useEffect(() => {
    const handleRouteStart = () => NProgress.start();
    const handleRouteDone = () => NProgress.done();

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
        <title>卡鲁秋 - 前端小工具集合</title>
        <link rel="icon" href="/favicon.ico" />
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
          </AntdConfigProvider>
          <Toaster />
        </StyleProvider>
      )}
    </>
  );
}
