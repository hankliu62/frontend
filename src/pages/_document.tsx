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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;600;700;800;900&family=Exo+2:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
