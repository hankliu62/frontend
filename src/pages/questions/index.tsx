import { ReactElement } from "react";

import OnlyHeaderLayout from "@/layouts/only-header";

/**
 * 小习题页面
 * @returns
 */
function QuestionsPage() {
  return (
    <div className="flex h-[100vh] w-full">
      <iframe
        title="小习题"
        src="https://hankliu62.github.io/questions?with-footer=1"
        width="100%"
        className="border-0"
      />
    </div>
  );
}

// 自定义Layout
QuestionsPage.getLayout = function getLayout(page: ReactElement) {
  return <OnlyHeaderLayout>{page}</OnlyHeaderLayout>;
};

export default QuestionsPage;
