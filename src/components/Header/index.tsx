import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center fixed top-0 left-0 right-0 bg-white z-50">
        <div className="w-full h-full p-2 bg-[#16213E] flex justify-center items-center text-white gap-2 md:gap-5">
          <div>Low Marketing Budget? We&apos;ve Got You!</div>
          <div className="px-4 py-1 rounded-full bg-[#E74C3C] text-sm md:text-lg">
            Schedule&nbsp;a&nbsp;call
          </div>
        </div>
        <div className="w-full h-full flex justify-center items-center gap-2 md:gap-3 text-sm md:text-lg lg:gap-10 py-4 text-[#6F6F6F]">
          <Link href="/">Home</Link>
          <Link href="/">Services</Link>
          <Link href="/">Case&nbsp;Studies</Link>
          <Link href="/">Contact&nbsp;us</Link>
          <Link href="/">About&nbsp;us</Link>
        </div>
      </div>
    </>
  );
};

export default Header;
