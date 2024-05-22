import { ReactElement } from "react";

import OnlyHeaderLayout from "@/layouts/only-header";

/**
 * 关于我页面
 *
 * @returns
 */
function AboutPage() {
  return (
    <div className="flex h-[100vh] w-full">
      <iframe
        title="小工具集合"
        src="https://hankliu62.github.io/about?with-footer=1"
        width="100%"
        className="border-0"
      />
    </div>
  );
}

// 自定义Layout
AboutPage.getLayout = function getLayout(page: ReactElement) {
  return <OnlyHeaderLayout>{page}</OnlyHeaderLayout>;
};

export default AboutPage;
