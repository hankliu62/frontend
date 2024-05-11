import { ReactElement } from "react";

import NoHeaderLayout from "@/layouts/no-header";

function PaintPage() {
  return (
    <div className="flex h-[100vh] w-full">
      <iframe
        title="小绘画"
        src="https://hankliu62.github.io/whiteboard/"
        width="100%"
        className="border-0"
      />
    </div>
  );
}

// 自定义Layout
PaintPage.getLayout = function getLayout(page: ReactElement) {
  return <NoHeaderLayout>{page}</NoHeaderLayout>;
};

export default PaintPage;
