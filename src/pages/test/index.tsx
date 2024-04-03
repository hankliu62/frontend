import Image from "next/image";
import React from "react";

import { getRoutePrefix } from "@/utils/route";

export default function Test() {
  return (
    <div className="flex w-full">
      {/* <div className="container flex h-full w-full max-w-full flex-col">
        <div className="demo2 relative min-h-[400px] flex-1 bg-black">
          <div className="demo1 relative min-h-[500px] flex-1 bg-gradient-to-r from-black from-0% via-black via-50% to-white to-50%">
            <div
              style={{
                fontFamily: "hanchengwang",
                fontWeight: 100,
                marginLeft: "-61px",
                position: "absolute",
                letterSpacing: "100px",
              }}
              className="absolute left-[50%] top-[50%] -translate-x-1/2 -translate-y-1/2 select-none whitespace-nowrap text-[250px] text-white mix-blend-difference"
            >
              H.L
            </div>
          </div>
        </div>
      </div> */}
      {/* <div className="h-[600px] w-[600px] overflow-hidden rounded-[62px]">
        <Image
          className="overflow-hidden rounded-[62px]"
          src={`${getRoutePrefix()}/logo.png`}
          alt="卡鲁秋"
          width={600}
          height={600}
        />
      </div> */}
    </div>
  );
}
