import React from "react";

function HeroSec() {
  return (
    <div className=" bg-[#043873] bg-[url('/work.png')] bg-cover bg-center md:pt-[140px] md:pb-[100px] md:px-[20px] xl:py-[100px] xl:px-[32px] 2xl:py-[140px] 2xl:px-[220px]">
      <div className=" flex lg:flex-row flex-col items-center justify-center gap-y-4 lg:text-start text-center gap-x-10 ">
        <div className="flex flex-col lg:items-start items-center gap-y-[60px] ">
          <span className="flex flex-col justify-center gap-y-[3px]">
            <h2 className="md:text-[64px] sm:text-[54px] text-[36px] text-white font-bold pt-20">
              Get More Done with Whitespace
            </h2>
            <p className="text-xl text-white">
              Project management software that enables your teams to collaborate, plan, analyze, and manage everyday tasks
            </p>
          </span>
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
        <div className="w-[286px] h-[191px] sm:w-[551px] sm:h-[367px] md:w-[526px] md:h-[350px] xl:w-[685px] xl:h-[456px] 2xl:w-[820px] 2xl:h-[550px] bg-[#C4DEFD] mb-2"></div>
      </div>
    </div>
  );
}

export default HeroSec;
