import Image from "next/image";
import React from "react";

function WorkManagement() {
  return (
    <div className="py-20 px-4 md:py-[100px] md:px-5 lg:px-8 lg:py-[140px] 2xl:pt-[140px] 2xl:pb-[32px] 2xl:px-[220px] gap-y-[100px] space-y-[100px]">
      <div className="flex items-center justify-between lg:flex-row flex-col gap-y-[100px] lg:text-start text-center">
        <div className="flex flex-col justify-center gap-y-6 lg:items-start items-center">
          <h1 className="font-bold text-7xl lg:text-[64px] md:text-[54px] text-[36px]">
            Project Management
          </h1>
          <p className="text-lg">
            Images, videos, PDFs and audio files are supported. Create math
            expressions and diagrams directly from the app. Take photos with the
            mobile app and save them to a note.
          </p>
          <button className="w-[227px] h-[60px] py-[16px] px-[24px] bg-[#4F9CF9] rounded-lg text-white flex justify-center items-center gap-x-2">
            Get Started
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
        <div className="bg-[#C4DEFD] w-[286px] h-[177px] md:w-[561px] md:h-[349px] lg:w-[719px] lg:h-[448px] 2xl:w-[748px] 2xl:h-[547px]"></div>
      </div>


      <div className="flex items-center justify-between lg:flex-row flex-col-reverse gap-y-[100px] lg:text-start text-center gap-x-10">
        <Image src="/Work Together Image.png" alt="" width={1000} height={1000} className="w-[286px] h-[177px] md:w-[561px] md:h-[349px] lg:w-[719px] lg:h-[448px] 2xl:w-[748px] 2xl:h-[547px]"/>
        <div className="flex flex-col justify-center gap-y-6 lg:items-start items-center">
          <h1 className="font-bold text-7xl lg:text-[64px] md:text-[54px] text-[36px]">
            Work Togeather
          </h1>
          <p className="text-lg">
            With whitepace, share your notes with your colleagues and
            collaborate on them. You can also publish a note to the internet and
            share the URL with others.
          </p>
          <button className="w-[227px] h-[60px] py-[16px] px-[24px] bg-[#4F9CF9] rounded-lg text-white flex justify-center items-center gap-x-2">
            Try it now
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
    </div>
  );
}

export default WorkManagement;
