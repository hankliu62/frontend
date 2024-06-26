import dynamic from "next/dynamic";
import { ReactNode } from "react";

const Header = dynamic(() => import("@/components/Header"), {
  ssr: false,
});

interface LayoutProps {
  children: ReactNode;
}

export default function OnlyHeaderLayout({ children }: LayoutProps) {
  return (
    <>
      <div
        className="flex h-full min-h-[100vh] w-full flex-col"
        style={{ flexDirection: "column", minHeight: "100vh" }}
      >
        {/* header */}
        <Header />

        {/* Main content */}
        <main className="flex flex-1 grow-[1] flex-col" style={{ flex: 1 }}>
          {children}
        </main>
      </div>
    </>
  );
}
