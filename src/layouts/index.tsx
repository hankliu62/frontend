import dynamic from "next/dynamic";
import { ReactNode } from "react";

const Footer = dynamic(() => import("@/components/Footer"), {
  ssr: false,
});

const Header = dynamic(() => import("@/components/Header"), {
  ssr: false,
});

interface LayoutProps {
  children: ReactNode;
}

export default function DefaultLayout({ children }: LayoutProps) {
  return (
    <>
      <div
        className="flex h-full w-full flex-col"
        style={{ flexDirection: "column" }}
      >
        {/* header */}
        <Header />

        {/* Main content */}
        <main className="flex-1 grow-[1]" style={{ flex: 1 }}>
          {children}
        </main>

        {/* footer */}
        <Footer />
      </div>
    </>
  );
}
