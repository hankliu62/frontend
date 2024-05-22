import { ReactElement } from "react";

import OnlyHeaderLayout from "@/layouts/only-header";

/**
 * 面试宝典
 * @returns
 */
function InterviewPage() {
  return (
    <div className="flex h-[100vh] w-full">
      <iframe
        title="小复习"
        src="https://hankliu62.github.io/interview"
        width="100%"
        height="100%"
        className="h-[100vh] border-0"
      />
    </div>
  );
}

// 自定义Layout
InterviewPage.getLayout = function getLayout(page: ReactElement) {
  return <OnlyHeaderLayout>{page}</OnlyHeaderLayout>;
};

export default InterviewPage;
