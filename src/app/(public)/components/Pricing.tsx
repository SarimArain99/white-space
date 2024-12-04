import React from "react";

function Pricing() {
  return (
    <div className="2xl:py-[140px] 2xl:px-[220px] md:py-[140px] lg:px-[32px] md:px-[20px] py-[80px] px-[16px] space-y-[60px]">
      <div className="text-center">
        <h1 className="2xl:text-[72px] lg:text-[64px] md:text-[54px] text-[36px] font-bold">
          Choose Your Plan
        </h1>
        <p className="">
          Whether you want to get organized, keep your personal life on track,
          or boost workplace productivity, Evernote has the right plan for you.
        </p>
      </div>
      <div className="flex flex-col lg:flex-row items-center gap-y-10 lg:gap-x-8">
        <div className="w-full max-w-[472px] h-auto lg:h-[700px] space-y-5 py-10 px-6 rounded-xl">
          <span>
            <p className="text-[24px]">Free</p>
            <h4 className="font-bold text-[36px]">$0</h4>
            <p className="font-medium text-[18px]">
              Capture ideas and find them quickly
            </p>
          </span>
          <div className="flex flex-col gap-y-7 text-[16px]">
            <span className="flex items-center gap-x-5">
              <img src="/Tick.png" alt="" />
              Sync unlimited devices
            </span>
            <span className="flex items-center gap-x-5">
              <img src="/Tick.png" alt="" />
              10 GB monthly uploads
            </span>
            <span className="flex items-center gap-x-5">
              <img src="/Tick.png" alt="" />
              200 MB max. note size
            </span>
            <span className="flex items-center gap-x-5">
              <img src="/Tick.png" alt="" />
              Customize Home dashboard and access extra widgets
            </span>
            <span className="flex items-center gap-x-5">
              <img src="/Tick.png" alt="" />
              Connect primary Google Calendar account
            </span>
            <span className="flex items-center gap-x-5">
              <img src="/Tick.png" alt="" />
              Add due dates, reminders, and notifications to your tasks
            </span>
            <button className="py-4 px-10 border border-yellow-200 w-full max-w-[166px] h-[51px]">
              Get Started
            </button>
          </div>
        </div>

        <div className="border bg-[#043873] text-white w-full max-w-[472px] h-auto lg:h-[761px] space-y-5 py-10 px-6 rounded-xl">
          <span>
            <p className="text-[24px]">Free</p>
            <h4 className="font-bold text-[36px]">$0</h4>
            <p className="font-medium text-[18px]">
              Capture ideas and find them quickly
            </p>
          </span>
          <div className="flex flex-col gap-y-7 text-[16px]">
            <span className="flex items-center gap-x-5">
              <img src="/Tick2.png" alt="" />
              Sync unlimited devices
            </span>
            <span className="flex items-center gap-x-5">
              <img src="/Tick2.png" alt="" />
              10 GB monthly uploads
            </span>
            <span className="flex items-center gap-x-5">
              <img src="/Tick2.png" alt="" />
              200 MB max. note size
            </span>
            <span className="flex items-center gap-x-5">
              <img src="/Tick2.png" alt="" />
              Customize Home dashboard and access extra widgets
            </span>
            <span className="flex items-center gap-x-5">
              <img src="/Tick2.png" alt="" />
              Connect primary Google Calendar account
            </span>
            <span className="flex items-center gap-x-5">
              <img src="/Tick2.png" alt="" />
              Add due dates, reminders, and notifications to your tasks
            </span>
            <button className="py-4 px-10 bg-[#4F9CF9] w-full max-w-[166px] h-[51px] rounded-lg">
              Get Started
            </button>
          </div>
        </div>

        <div className="border border-yellow-300 w-full max-w-[472px] h-auto lg:h-[700px] space-y-5 py-10 px-6 rounded-xl">
          <span>
            <p className="text-[24px]">Free</p>
            <h4 className="font-bold text-[36px]">$0</h4>
            <p className="font-medium text-[18px]">
              Capture ideas and find them quickly
            </p>
          </span>
          <div className="flex flex-col gap-y-7 text-[16px]">
            <span className="flex items-center gap-x-5">
              <img src="/Tick.png" alt="" />
              Sync unlimited devices
            </span>
            <span className="flex items-center gap-x-5">
              <img src="/Tick.png" alt="" />
              10 GB monthly uploads
            </span>
            <span className="flex items-center gap-x-5">
              <img src="/Tick.png" alt="" />
              200 MB max. note size
            </span>
            <span className="flex items-center gap-x-5">
              <img src="/Tick.png" alt="" />
              Customize Home dashboard and access extra widgets
            </span>
            <span className="flex items-center gap-x-5">
              <img src="/Tick.png" alt="" />
              Connect primary Google Calendar account
            </span>
            <span className="flex items-center gap-x-5">
              <img src="/Tick.png" alt="" />
              Add due dates, reminders, and notifications to your tasks
            </span>
            <button className="py-4 px-10 border border-yellow-200 w-full max-w-[166px] h-[51px]">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
