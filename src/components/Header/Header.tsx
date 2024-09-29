"use client";
import { Drawer } from "antd";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import React, { useState, useEffect } from "react";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [showNotification, setShowNotification] = useState(true);

  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  // Track scroll position
  useEffect(() => {
    const handleScroll = () => {
      // Hide notification on scroll down, show when back to top
      if (window.scrollY > 50) {
        setShowNotification(false);
      } else {
        setShowNotification(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className="flex flex-col justify-center items-center fixed top-0 left-0 right-0 bg-white z-50">
        {/* Notification bar with smooth slide animation */}
        <div
          className={`w-full h-full p-2 bg-[#576D2C] flex justify-center items-center text-white gap-2 md:gap-5 transition-all duration-500 ease-in-out transform ${
            showNotification ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
          }`}
        >
          <div>Low Marketing Budget? We&apos;ve Got You!</div>
          <div className="px-4 py-1 rounded-full bg-[#FFFFFF] text-sm md:text-lg text-black">
            Schedule&nbsp;a&nbsp;call
          </div>
        </div>
        {/* Navigation bar */}
        <div className="w-full h-full hidden md:flex justify-center items-center gap-2 md:gap-3 text-sm md:text-lg lg:gap-10 py-4 text-[#6F6F6F]">
          <Link href="/">Home</Link>
          <Link href="/">Services</Link>
          <Link href="/">Case&nbsp;Studies</Link>
          <Link href="/">Contact&nbsp;us</Link>
          <Link href="/">About&nbsp;us</Link>
        </div>
        {/* Mobile menu icon */}
        <div className="flex md:hidden w-full justify-end h-[50px] items-center px-6">
          <Menu onClick={showDrawer} className="flex md:hidden " />
        </div>
        {/* Mobile drawer */}
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
