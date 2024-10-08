"use client";
import { Drawer } from "antd";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { usePathname } from "next/navigation"; // for active links

const Header = () => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const showDrawer = () => setOpen(true);
  const onClose = () => setOpen(false);

  const isActive = (path: string) => pathname === path;

  return (
    <>
      <div className="flex flex-col justify-center items-center fixed top-0 left-0 right-0 bg-white z-50">
        {/* Top Banner */}
        <div className="w-full h-full p-2 bg-[#16213E] flex justify-center items-center text-white gap-2 md:gap-5">
          <div>
            {
              "`Ready to Be Our Next Success Story? Let’s unlock Growth together !! `"
            }
          </div>
          <Link href="/contactus2" passHref>
            <div className="px-4 py-1 rounded-full bg-white text-black text-sm md:text-lg">
              Schedule&nbsp;a&nbsp;call
            </div>
          </Link>
        </div>
        {/* Navigation Links */}
        <div className="w-full h-full hidden md:flex justify-center items-center gap-2 md:gap-3 text-sm md:text-lg lg:gap-10 py-4">
          <div className="absolute left-0 ml-10">
            <Image src={"/logo.png"} alt="logo" width={50} height={50} />
          </div>
          <Link href="/consulting">
            <span
              className={`${
                isActive("/consulting") ? "text-[#16213E]" : "text-[#6F6F6F]"
              }`}
            >
              Consulting
            </span>
          </Link>
          <Link href="/">
            <span
              className={`${
                isActive("/") ? "text-[#16213E]" : "text-[#6F6F6F]"
              }`}
            >
              Services
            </span>
          </Link>
          <Link href="/casestudies">
            <span
              className={`${
                isActive("/casestudies") ? "text-[#16213E]" : "text-[#6F6F6F]"
              }`}
            >
              Case&nbsp;Studies
            </span>
          </Link>
          <Link href="/contactus2">
            <span
              className={`${
                isActive("/contactus2") ? "text-[#16213E]" : "text-[#6F6F6F]"
              }`}
            >
              Contact&nbsp;us
            </span>
          </Link>
          <Link href="/aboutus2">
            <span
              className={`${
                isActive("/aboutus") ? "text-[#16213E]" : "text-[#6F6F6F]"
              }`}
            >
              About&nbsp;us
            </span>
          </Link>
        </div>
        {/* Mobile Menu Icon */}
        <div className="flex md:hidden w-full justify-end h-[50px] items-center px-6">
          <Menu onClick={showDrawer} className="flex md:hidden " />
        </div>
        {/* Mobile Drawer */}
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
            <Link href="/">
              <span
                className={`${
                  isActive("/") ? "text-[#16213E]" : "text-[#6F6F6F]"
                }`}
              >
                Acquisition
              </span>
            </Link>
            <Link href="/services">
              <span
                className={`${
                  isActive("/services") ? "text-[#16213E]" : "text-[#6F6F6F]"
                }`}
              >
                Services
              </span>
            </Link>
            <Link href="/casestudies">
              <span
                className={`${
                  isActive("/casestudies") ? "text-[#16213E]" : "text-[#6F6F6F]"
                }`}
              >
                Case&nbsp;Studies
              </span>
            </Link>
            <Link href="/contactus2">
              <span
                className={`${
                  isActive("/contactus2") ? "text-[#16213E]" : "text-[#6F6F6F]"
                }`}
              >
                Contact&nbsp;us
              </span>
            </Link>
            <Link href="/aboutus2">
              <span
                className={`${
                  isActive("/aboutus2") ? "text-[#16213E]" : "text-[#6F6F6F]"
                }`}
              >
                About&nbsp;us
              </span>
            </Link>
          </div>
        </Drawer>
      </div>
    </>
  );
};

export default Header;
