import { ReactElement } from "react";

import NoHeaderLayout from "@/layouts/no-header";

function ResumePage() {
  return (
    <div className="flex h-[100vh] w-full">
      <iframe
        title="小简历"
        src="https://hankliu62.github.io/resume/"
        width="100%"
        className="border-0"
      />
    </div>
  );
}

// 自定义Layout
ResumePage.getLayout = function getLayout(page: ReactElement) {
  return <NoHeaderLayout>{page}</NoHeaderLayout>;
};

export default ResumePage;
