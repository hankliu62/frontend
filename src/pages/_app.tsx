import "@/styles/globals.css";
import "highlight.js/styles/googlecode.css";
import "diff2html/bundles/css/diff2html.min.css";
import "nprogress/nprogress.css";

import { StyleProvider } from "@ant-design/cssinjs";
import { Watermark } from "antd";
import type { NextPage } from "next";
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
          <Watermark
            content="HankLiu Toolbox"
            font={{ color: "rgba(0, 0, 0, 0.1)" }}
          >
            <Component {...pageProps} />
          </Watermark>
          <Toaster />
        </StyleProvider>
      )}
    </>
  );
}
