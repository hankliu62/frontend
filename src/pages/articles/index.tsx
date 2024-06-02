import { ReactElement } from "react";

import OnlyHeaderLayout from "@/layouts/only-header";

/**
 * 小文章页面
 * @returns
 */
function ArticlesPage() {
  return (
    <div className="flex h-[100vh] w-full">
      <iframe
        title="小文章"
        src="https://hankliu62.github.io/articles?with-footer=1"
        width="100%"
        className="border-0"
      />
    </div>
  );
}

// 自定义Layout
ArticlesPage.getLayout = function getLayout(page: ReactElement) {
  return <OnlyHeaderLayout>{page}</OnlyHeaderLayout>;
};

export default ArticlesPage;
