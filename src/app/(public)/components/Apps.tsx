import Image from "next/image";
import React from "react";

function Apps() {
  return (
    <div className="bg-[url('/work.png')] bg-cover bg-center bg-[#043873] flex lg:items-start items-center lg:flex-row flex-col gap-x-[100px] gap-y-[100px] md:py-[140px] 2xl:px-[220px] lg:px-[32px] md:px-[20px] py-[100px] px-[16px]">
      <Image
        src="/Apps.png"
        alt="apps"
        width={1000}
        height={1000}
        className="xl:w-[582px] lg:h-[427px] lg:w-[528px] md:w-[485px] md:h-[392.33px] w-[286px] h-[231px]"
      />
      <div className="text-white flex flex-col gap-y-[60px] lg:items-start items-center lg:text-start text-center">
        <h1 className="font-bold xl:text-[72px] lg:text-[64px] md:text-[54px] text-[36px] ">
          Work with Your Favorite Apps Using whitepace
        </h1>
        <p className="text-[18px]">
          Whitepace teams up with your favorite software. Integrate with over
          1000+ apps with Zapier to have all the tools you need for your project
          success.
        </p>
        <button className="w-[227px] h-[60px] py-[16px] px-[24px] bg-[#4F9CF9] rounded-lg text-white flex justify-center items-center gap-x-2">
          Try Whitespace free
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
    </div>
  );
}

export default Apps;
