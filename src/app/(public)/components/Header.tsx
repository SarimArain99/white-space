import Image from "next/image";
import React from "react";

function Header() {
  return (
    <header className="bg-[#043873] fixed z-10 w-full  h-[92px] flex justify-between items-center py-4 2xl:px-[220px] md:px-8 gap-x-12 p-8">
      <div className="flex justify-between items-center gap-x-2">
        <Image
          src="/logo.png"
          alt="logo"
          width={1000}
          height={1000}
          className="w-[37px] h-[29px]"
        />
        <h1 className="text-[34px] w-[144px] text-[#ffff]">whitespace</h1>
      </div>
      <div className="flex gap-[32px]">
        <div className="xl:flex hidden justify-center items-center gap-[16px]">
          <select name="Products" className="bg-transparent text-white">
            <option value="Products">Products</option>
          </select>
          <select name="Products" className="bg-transparent text-white">
            <option value="Solutions">Solutions</option>
          </select>
          <select name="Products" className="bg-transparent text-white">
            <option value="Resources">Resources</option>
          </select>
          <select name="Products" className="bg-transparent text-white">
            <option value="Pricing">Pricing</option>
          </select>
        </div>
        <div className="flex justify-center items-center gap-x-3">
          <div className="md:flex hidden justify-center items-center gap-x-3">
            <button className="w-[126px] h-[60px] py-[16px] px-[40px] bg-[#FFE492] rounded-lg">
              Login
            </button>
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
        <div className="xl:hidden flex">
          <button className="relative group">
            <div className="relative flex overflow-hidden items-center justify-center rounded-full w-[50px] h-[50px] transform transition-all  duration-200">
              <div className="flex flex-col justify-between w-[20px] h-[20px] transform transition-all duration-300 origin-center overflow-hidden group-focus:translate-x-1.5">
                <div className="bg-white h-[2px] w-7 transform transition-all duration-300 origin-left group-focus:rotate-[42deg] group-focus:w-2/3 delay-150"></div>
                <div className="bg-white h-[2px] w-7 rounded transform transition-all duration-300 group-focus:translate-x-10"></div>
                <div className="bg-white h-[2px] w-7 transform transition-all duration-300 origin-left group-focus:-rotate-[42deg] group-focus:w-2/3 delay-150"></div>
              </div>
            </div>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
