"use client";
import { Drawer } from "antd";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";

const Header = () => {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  return (
    <>
      <div className="flex flex-col justify-center items-center fixed top-0 left-0 right-0 bg-white z-50">
        <div className="w-full h-[77px] md:h-full p-2 bg-[#16213E] flex justify-center items-center text-white gap-2 md:gap-5">
          <div>
            {`Ready to Be Our Next Success Story? Let’s unlock Growth together !!`}
          </div>
          <Link href="/ContactUs" passHref>
            <div className="px-4 py-1 rounded-full bg-white text-black text-sm md:text-lg">
              Schedule&nbsp;a&nbsp;call
            </div>
          </Link>
        </div>
        <div className="w-full h-full hidden md:flex justify-center items-center gap-2 md:gap-3 text-sm md:text-lg lg:gap-10 py-6 text-[#6F6F6F] relative">
          {/* Image moved to the left and ml-10 added */}
          {/* <div className="absolute left-0 ml-10">
            <Image src={"/logo.png"} alt="logo" width={70} height={70} />
          </div> */}
          {/* Links stay centered */}
          <div className="flex gap-2 md:gap-3 lg:gap-10">
            <Link href="/">Home</Link>
            <Link href="/">Services</Link>
            {/* <Link href="/">Case&nbsp;Studies</Link> */}
            <Link href="/">Contact&nbsp;us</Link>
            <Link href="/">About&nbsp;us</Link>
          </div>
        </div>
        <div className="flex md:hidden w-full justify-end h-[50px] items-center px-6">
          <Menu onClick={showDrawer} className="flex md:hidden " />
        </div>
        <Drawer
          title={
            <>
              <div className="w-full flex flex-row justify-between">
                <div>Growth Mantra</div>
                <X onClick={onClose} />
              </div>
            </>
          }
          width={"80%"}
          placement={"right"}
          closable={false}
          onClose={onClose}
          open={open}
        >
          <div className="flex flex-col gap-4 font-semibold">
            <Link href="/">Home</Link>
            <Link href="/">Services</Link>
            <Link href="/">Case&nbsp;Studies</Link>
            <Link href="/">Contact&nbsp;us</Link>
            <Link href="/">About&nbsp;us</Link>
          </div>
        </Drawer>
      </div>
    </>
  );
};

export default Header;
