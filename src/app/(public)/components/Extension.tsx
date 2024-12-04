import React from 'react'

function Extension() {
  return (
    <div className='py-20 px-4 md:py-[100px] md:px-8 lg:px-9 lg:py-[100px] 2xl:py-[140px] 2xl:px-[220px] bg-[#043873]'>
        <div className="flex items-center justify-between lg:flex-row flex-col gap-y-[100px] lg:text-start text-center text-white">
        <div className="flex flex-col justify-center gap-y-6 lg:items-start items-center">
          <h1 className="font-bold text-7xl lg:text-[64px] md:text-[54px] text-[36px] ">
          Use as Extension
          </h1>
          <p className="text-lg">
          Use the web clipper extension, available on Chrome and Firefox, to save web pages or take screenshots as notes.

          </p>
          <button className="w-[227px] h-[60px] py-[16px] px-[24px] bg-[#4F9CF9] rounded-lg text-white flex justify-center items-center gap-x-2">
            Lets Go
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
    </div>
  )
}

export default Extension