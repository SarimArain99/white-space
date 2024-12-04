import Image from "next/image";
import React from "react";

function YourData() {
  return (
    <div className="flex items-center lg:flex-row flex-col-reverse md:py-[140px] 2xl:px-[220px] lg:px-[32px] md:px-[20px] py-[100px] px-[16px] gap-y-[100px]">
      <div className="flex flex-col gap-[60px] lg:items-start items-center lg:text-start text-center">
        <h1 className="font-bold xl:text-[72px] lg:text-[64px] md:text-[54px] text-[36px]">
          100% your data
        </h1>
        <p className="text-[18px]">
          The app is open source and your notes are saved to an open format, so
          you&apos;ll always have access to them. Uses End-To-End Encryption (E2EE)
          to secure your notes and ensure no-one but yourself can access them.
        </p>
        <button className="w-[227px] h-[60px] py-[16px] px-[24px] bg-[#4F9CF9] rounded-lg text-white flex justify-center items-center gap-x-2">
          Read more
          <svg
            className="h-5 w-5 text-white"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" />
            <line x1="5" y1="12" x2="19" y2="12" />
            <line x1="13" y1="18" x2="19" y2="12" />
            <line x1="13" y1="6" x2="19" y2="12" />
          </svg>
        </button>
      </div>
      <Image src="/Element.png" alt="Element" width={1000} height={1000} className="xl:w-[681px] xl:h-[381px] lg:w-[562px] lg:h-[314px] md:w-[513px] md:h-[287px] w-[290px] h-[162px]" />
    </div>
  );
}

export default YourData;
