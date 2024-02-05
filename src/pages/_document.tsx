import { Head, Html, Main, NextScript } from "next/document";

import { getRoutePrefix } from "@/utils/route";

export default function Document() {
  return (
    <Html>
      <Head>
        <link
          rel="stylesheet"
          href={`${getRoutePrefix()}/styles/animate.css/@4.1.1/animate.css`}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
