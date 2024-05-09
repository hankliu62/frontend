import { ReactElement } from "react";

import OnlyHeaderLayout from "@/layouts/only-header";

function ToolKitsPage() {
  return (
    <div className="flex h-[100vh] w-full">
      <iframe
        title="小工具集合"
        src="https://hankliu62.github.io/toolkits?with-header=1"
        width="100%"
        className="border-0"
      />
    </div>
  );
}

// 自定义Layout
ToolKitsPage.getLayout = function getLayout(page: ReactElement) {
  return <OnlyHeaderLayout>{page}</OnlyHeaderLayout>;
};

export default ToolKitsPage