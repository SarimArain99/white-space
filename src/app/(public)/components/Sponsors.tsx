import Image from "next/image";
import React from "react";

function Sponsors() {
  return (
    <div className="md:py-[140px] 2xl:px-[220px] lg:px-[32px] md:px-[20px] py-[100px] px-[16px] flex flex-col gap-y-[100px]">
      <h1 className="font-bold xl:text-[72px] lg:text-[64px] md:text-[54px] text-[36px] text-center">
        Our sponsors
      </h1>
      <div className="flex justify-between lg:flex-row flex-col gap-y-[100px] items-center">
        <Image
          src="/apple.png"
          alt=""
          width={1000}
          height={1000}
          className="object-contain h-[68px] w-[55.47px]"
        />
        <Image
          src="/microsoft.png"
          alt=""
          width={1000}
          height={1000}
          className="object-contain md:h-[62px] md:w-[247px] h-[46px] w-[213px]"
        />
        <Image
          src="/slack.png"
          alt=""
          width={1000}
          height={1000}
          className="object-contain md:h-[71px] md:w-[280px]  h-[49px] w-[192px]"
        />
        <Image
          src="/google.png"
          alt=""
          width={1000}
          height={1000}
          className="object-contain vh-[69px] md:w-[211px] h-[46.16px] w-[139.5px]"
        />
      </div>
    </div>
  );
}

export default Sponsors;
