import Image from "next/image";
import React from "react";

function Trial() {
  return (
    <div className="bg-[#043873] 2xl:py-[140px] 2xl:px-[220px] md:py-[140px] lg:px-[32px] md:px-[20px] py-[80px] px-[16px] flex flex-col lg:items-center items-start text-white gap-y-10">
      <h1 className="2xl:text-[72px] lg:text-[64px] md:text-[54px] text-[36px] font-bold">
        Try Whitepace today
      </h1>
      <p className="text-[24px]">
        Get started for free. Add your whole team as your needs grow.
      </p>
      <button className="w-[227px] h-[60px] py-[16px] px-[24px] bg-[#4F9CF9] rounded-lg text-white flex justify-center items-center gap-x-2">
        Try Taskey free
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
      <p className="text-[24px]">On a big team? Contact sales</p>
      <div className="flex gap-x-10">
        <Image
          src="/appleLogo.png"
          alt=""
          width={1000}
          height={1000}
          className="h-[60px] w-[60px]"
        />
        <Image
          src="/window.png"
          alt=""
          width={1000}
          height={1000}
          className="h-[58px] w-[60px]"
        />
        <Image
          src="/android.png"
          alt=""
          width={1000}
          height={1000}
          className="h-[50px] w-[60px]"
        />
      </div>
    </div>
  );
}

export default Trial;
