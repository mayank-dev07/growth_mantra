import Link from "next/link";
import React from "react";

type Props = {};

const Header = (props: Props) => {
  return (
    <>
      <div className="flex flex-col justify-center items-center fixed top-0 left-0 right-0 bg-white">
        <div className="w-full h-full bg-[#16213E] flex justify-center items-center text-white gap-5 py-1">
          <div>"LowMarketingBudget?We'veGotYou!"</div>
          <div className="px-4 py-2 rounded-full bg-[#E74C3C]">
            Schedule a call
          </div>
        </div>
        <div className="w-full h-full flex justify-center items-center gap-8 py-4">
          <Link href="/">Home</Link>
          <Link href="/">Services</Link>
          <Link href="/">Case Studies</Link>
          <Link href="/">Contact us</Link>
          <Link href="/">About us</Link>
        </div>
      </div>
    </>
  );
};

export default Header;
