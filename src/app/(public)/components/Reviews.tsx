import Image from "next/image";
import React from "react";

function Reviews() {
  return (
    <div className="2xl:py-[140px] 2xl:px-[220px] md:py-[140px] lg:px-[32px] md:px-[20px] py-[80px] px-[16px]">
      <h1 className="2xl:text-[72px] lg:text-[64px] md:text-[54px] text-[36px] font-bold text-center">
        What Our Clients Says
      </h1>
      <div className="flex gap-x-[32px] lg:flex-row flex-col gap-y-[32px] items-center">
        <div className="flex flex-col gap-y-8 py-[60px] px-[40px] shadow-lg shadow-gray-300 rounded-xl        2xl:w-[471px] xl:h-[498px] xl:w-[473px] h-[560px] md:w-[341px] w-[288px]">
          <div className="border-b-2 border-black flex flex-col gap-y-[32px]">
            <Image
              src="/Quote.png"
              alt="Quote"
              width={10000}
              height={10000}
              className="md:h-[61px] md:w-[86px] w-[56px] h-[40px]"
            />
            <p className="text-[18px] mb-5">
              Whitepate is designed as a collaboration tool for businesses that
              is a full project management solution.
            </p>
          </div>
          <div className="flex lg:flex-row flex-col lg:items-center items-start gap-x-[42px] ">
            <Image
              src="/3rd.png"
              alt="3rd"
              width={1000}
              height={1000}
              className="h-[95px] w-[95px]"
            />
            <div>
              <p className="font-semibold text-[24px]">Oberon Shaw, MCH</p>
              <p>Head of Talent Acquisition, North America</p>
            </div>
          </div>
        </div>
        <div className="bg-[#4F9CF9] text-white flex flex-col gap-y-8 py-[60px] px-[40px] shadow-lg shadow-gray-300 rounded-xl 2xl:w-[471px] xl:h-[498px] xl:w-[473px] h-[560px] md:w-[341px] w-[288px]">
          <div className="border-b-2 border-white flex flex-col gap-y-[32px]">
            <Image
              src="/Group.png"
              alt="Group"
              width={10000}
              height={10000}
              className="md:h-[61px] md:w-[86px] w-[56px] h-[40px]"
            />
            <p className="text-[18px] mb-5">
              Whitepate is designed as a collaboration tool for businesses that
              is a full project management solution.
            </p>
          </div>
          <div className="flex lg:flex-row flex-col lg:items-center items-start gap-x-[42px] ">
            <Image
              src="/2nd.png"
              alt="2rd"
              width={1000}
              height={1000}
              className="h-[95px] w-[95px]"
            />
            <div>
              <p className="font-semibold text-[24px]">Oberon Shaw, MCH</p>
              <p>Head of Talent Acquisition, North America</p>
            </div>
          </div>
        </div>
        <div className="bg-[#4F9CF9] text-white flex flex-col gap-y-8 py-[60px] px-[40px] shadow-lg shadow-gray-300 rounded-xl 2xl:w-[471px] xl:h-[498px] xl:w-[473px] h-[560px] md:w-[341px] w-[288px]">
          <div className="border-b-2 border-white flex flex-col gap-y-[32px]">
            <Image
              src="/Group.png"
              alt="Group"
              width={10000}
              height={10000}
              className="md:h-[61px] md:w-[86px] w-[56px] h-[40px]"
            />
            <p className="text-[18px] mb-5">
              Whitepate is designed as a collaboration tool for businesses that
              is a full project management solution.
            </p>
          </div>
          <div className="flex lg:flex-row flex-col lg:items-center items-start gap-x-[42px] ">
            <Image
              src="/1st.png"
              alt="1st"
              width={1000}
              height={1000}
              className="h-[95px] w-[95px]"
            />
            <div>
              <p className="font-semibold text-[24px]">Oberon Shaw, MCH</p>
              <p>Head of Talent Acquisition, North America</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reviews;
