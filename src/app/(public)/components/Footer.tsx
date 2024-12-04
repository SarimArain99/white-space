import Image from "next/image";
import React from "react";

function Footer() {
  return (
    <>
    <div className="bg-[#043873] 2xl:py-[140px] 2xl:px-[220px] md:py-[140px] lg:px-[32px] md:px-[20px] py-[80px] px-[16px] text-white flex lg:flex-row flex-col justify-between gap-[50px] ">
      <div className="flex flex-col gap-y-[15px]">
        <div className="flex items-center gap-x-2">
          <Image
            src="/logo.png"
            alt="logo"
            width={1000}
            height={1000}
            className="w-[37px] h-[29px]"
          />
          <h1 className="text-[28px] text-[#ffff]">whitepace</h1>
        </div>
        <p className="text-[18px] w-[240px]">
          whitepace was created for the new ways we live and work. We make a
          better workspace around the world
        </p>
      </div>
      <div className="flex flex-col gap-y-[15px]">
        <p className="font-bold text-[24px]">Product</p>
        <p className="font-normal text-[16px]">Overview</p>
        <p className="font-normal text-[16px]">Pricing</p>
        <p className="font-normal text-[16px]">Customer stories</p>
      </div>
      <div className="flex flex-col gap-y-[15px]">
        <p className="font-bold text-[24px]">Company</p>
        <p className="font-normal text-[16px]">About us</p>
        <p className="font-normal text-[16px]">Careers</p>
        <p className="font-normal text-[16px]">Media kit</p>
      </div>
      <div className="flex flex-col gap-y-[15px]">
        <p className="font-bold text-[24px]">Resources</p>
        <p className="font-normal text-[16px]">Blog</p>
        <p className="font-normal text-[16px]">Guides & tutorials</p>
        <p className="font-normal text-[16px]">Help center</p>
      </div>
      <div className="flex flex-col gap-y-[15px]">
        <h5 className="font-bold text-[28px]">Try It Today</h5>
        <p className="font-normal text-[16px] w-[240px]">
          Get started for free. Add your whole team as your needs grow.
        </p>
        <button className="w-[186px] h-[60px] py-[16px] px-[24px] bg-[#4F9CF9] rounded-lg text-white flex justify-center items-center gap-x-2">
          Start today
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
      </>
  );
}

export default Footer;
