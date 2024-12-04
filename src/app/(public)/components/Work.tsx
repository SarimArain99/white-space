import React from "react";

function Work() {
  return (
    <div className="bg-[#043873] 2xl:h-[574px] md:py-[140px] 2xl:px-[220px] lg:px-[32px] md:px-[20px] py-[100px] px-[16px] xl:text-center text-start text-white flex flex-col xl:items-center items-start gap-y-6">
      <h1 className="font-bold xl:text-[72px] lg:text-[64px] md:text-[54px] text-[36px]">
        Your work, everywhere you are
      </h1>
      <p className="text-[18px]">
        Access your notes from your computer, phone or tablet by synchronising
        with various services, including whitepace, Dropbox and OneDrive. The
        app is available on Windows, macOS, Linux, Android and iOS. A terminal
        app is also available!
      </p>
      <button className="w-[227px] h-[60px] py-[16px] px-[24px] bg-[#4F9CF9] rounded-lg text-white flex justify-center items-center gap-x-2">
        Try Taskey
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
  );
}

export default Work;
