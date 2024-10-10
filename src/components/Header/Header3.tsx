"use client";
import { Dropdown, Menu, Drawer } from "antd";
import { Menu as MenuIcon, X } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [consultingOpen, setConsultingOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const pathname = usePathname(); // To track active path

  const showDrawer = () => setOpen(true);
  const onClose = () => {
    setOpen(false);
    setConsultingOpen(false);
    setServicesOpen(false);
  };

  // Function to check if the current path is active
  const isActive = (path: string): boolean => pathname === path;

  // Dropdown menu for Consulting and Services
  const consultingMenu = (
    <Menu>
      <Menu.Item>
        <Link href="/">Home</Link>
      </Menu.Item>
      <Menu.Item>
        <Link href="/strategyPlanning">Strategy and Planning</Link>
      </Menu.Item>
      <Menu.Item>
        <Link href="/userpersonaidentification">
          User persona Identification
        </Link>
      </Menu.Item>
      <Menu.Item>
        <Link href="/marketStrategy">Go-to-Market-Strategy</Link>
      </Menu.Item>
      <Menu.Item>
        <Link href="/brandSolution">Brand Solution</Link>
      </Menu.Item>
      <Menu.Item>
        <Link href="/growthMarketing">Growth Marketing</Link>
      </Menu.Item>
      <Menu.Item>
        <Link href="/productGrowth">Product Growth</Link>
      </Menu.Item>
    </Menu>
  );

  const servicesMenu = (
    <Menu>
      <Menu.Item>
        <Link href="/services">Home</Link>
      </Menu.Item>
      <Menu.Item>
        <Link href="/acquisition">Acquisition Mastery</Link>
      </Menu.Item>
      <Menu.Item>
        <Link href="/retention">Retention Revolution</Link>
      </Menu.Item>
      <Menu.Item>
        <Link href="/funnel">Funnel Optimization</Link>
      </Menu.Item>
      <Menu.Item>
        <Link href="/conversionrateoptimization">
          Conversion Rate Optimization (CRO)
        </Link>
      </Menu.Item>
      <Menu.Item>
        <Link href="/emailmarketingengine">Email Marketing Engine</Link>
      </Menu.Item>
      <Menu.Item>
        <Link href="/searchengineoptimization">SEO Domination</Link>
      </Menu.Item>
      <Menu.Item>
        <Link href="/crm">CRM Growth Engine</Link>
      </Menu.Item>
      <Menu.Item>
        <Link href="/salesgrowth">Sales Growth</Link>
      </Menu.Item>
    </Menu>
  );

  return (
    <>
      <div className="flex flex-col justify-center items-center fixed top-0 left-0 right-0 bg-white z-50">
        <div className="w-full h-[77px] md:h-full p-2 bg-[#16213e] flex justify-center items-center text-white gap-2 md:gap-5 text-sm">
          <div>
            {`Ready to Be Our Next Success Story? Let’s unlock Growth together !!`}
          </div>
          <Link href="/contactus">
            <div className="px-4 py-1 rounded-full bg-white text-black text-sm md:text-lg">
              Schedule&nbsp;a&nbsp;call
            </div>
          </Link>
        </div>

        <div className="w-full h-full hidden md:flex justify-center items-center gap-2 md:gap-3 text-sm md:text-lg lg:gap-10 py-4">
          <Dropdown
            overlay={consultingMenu}
            placement="bottomCenter"
            trigger={["click"]}
          >
            <div className="cursor-pointer text-[#6F6F6F] hover:text-[#16213E]">
              Consulting
            </div>
          </Dropdown>
          <Dropdown
            overlay={servicesMenu}
            placement="bottomCenter"
            trigger={["click"]}
          >
            <div className="cursor-pointer text-[#6F6F6F] hover:text-[#16213E]">
              Services
            </div>
          </Dropdown>
          <Link href="/contactus">
            <span
              className={`${
                isActive("/contactus") ? "text-[#16213E]" : "text-[#6F6F6F]"
              }`}
            >
              Contact&nbsp;us
            </span>
          </Link>
          <Link href="/aboutus">
            <span
              className={`${
                isActive("/aboutus") ? "text-[#16213E]" : "text-[#6F6F6F]"
              }`}
            >
              About&nbsp;us
            </span>
          </Link>
          <Link href="/toolsandtech">
            <span
              className={`${
                isActive("/toolsandtexh") ? "text-[#16213E]" : "text-[#6F6F6F]"
              }`}
            >
              Tools&nbsp;&&nbsp;Tech
            </span>
          </Link>
        </div>

        <div className="flex justify-between items-center w-full ">
          <Link
            href="/"
            className="flex justify-start items-start sticky  md:absolute  md:top-[54px]"
          >
            <Image
              src="/assets/logo/main_logo.png"
              alt="frame"
              width={200}
              height={200}
              className={`z-50 transition-all duration-500 ease-in-out mix-blend-normal 
                `}
            />
          </Link>

          <div className="flex md:hidden w-full justify-end h-[50px] items-center px-6">
            <MenuIcon onClick={showDrawer} className="flex md:hidden " />
          </div>
        </div>

        {/* Mobile drawer */}
        <Drawer
          title={
            <div className="w-full flex flex-row justify-between">
              <div>Growth Mantra</div>
              <X onClick={onClose} className="cursor-pointer" />
            </div>
          }
          width={"80%"}
          placement={"right"}
          closable={false}
          onClose={onClose}
          open={open}
        >
          <div className="flex flex-col gap-4 font-semibold p-4">
            {/* State variables for dropdown visibility */}
            <div className="flex flex-col">
              <div
                className="cursor-pointer text-[#6F6F6F] hover:text-[#16213E] "
                onClick={() => setConsultingOpen((prev) => !prev)} // Toggle visibility
              >
                Consulting
              </div>
              {consultingOpen && (
                <div className="pl-4 flex flex-col gap-1">
                  <Link
                    href="/"
                    className="text-[#6F6F6F] hover:text-[#16213E]"
                  >
                    Home
                  </Link>
                  <Link
                    href="/strategyPlanning"
                    className="text-[#6F6F6F] hover:text-[#16213E]"
                  >
                    Strategy and Planning
                  </Link>
                  <Link
                    href="/userpersonaidentification"
                    className="text-[#6F6F6F] hover:text-[#16213E]"
                  >
                    User Persona Identification
                  </Link>
                  <Link
                    href="/marketStrategy"
                    className="text-[#6F6F6F] hover:text-[#16213E]"
                  >
                    Go-to-Market Strategy
                  </Link>
                  <Link
                    href="/brandSolution"
                    className="text-[#6F6F6F] hover:text-[#16213E]"
                  >
                    Brand Solution
                  </Link>
                  <Link
                    href="/growthMarketing"
                    className="text-[#6F6F6F] hover:text-[#16213E]"
                  >
                    Growth Marketing
                  </Link>
                  <Link
                    href="/productGrowth"
                    className="text-[#6F6F6F] hover:text-[#16213E]"
                  >
                    Product Growth
                  </Link>
                </div>
              )}
            </div>
            <div className="flex flex-col">
              <div
                className="cursor-pointer text-[#6F6F6F] hover:text-[#16213E] "
                onClick={() => setServicesOpen((prev) => !prev)} // Toggle visibility
              >
                Services
              </div>
              {servicesOpen && (
                <div className="pl-4 flex flex-col gap-1">
                  <Link
                    href="/"
                    className="text-[#6F6F6F] hover:text-[#16213E]"
                  >
                    Home
                  </Link>
                  <Link
                    href="/acquisition"
                    className="text-[#6F6F6F] hover:text-[#16213E]"
                  >
                    Acquisition Mastery
                  </Link>
                  <Link
                    href="/retention"
                    className="text-[#6F6F6F] hover:text-[#16213E]"
                  >
                    Retention Revolution
                  </Link>
                  <Link
                    href="/funnel"
                    className="text-[#6F6F6F] hover:text-[#16213E]"
                  >
                    Funnel Optimization
                  </Link>
                  <Link
                    href="/conversionrateoptimization"
                    className="text-[#6F6F6F] hover:text-[#16213E]"
                  >
                    Conversion Rate Optimization (CRO)
                  </Link>
                  <Link
                    href="/emailmarketingengine"
                    className="text-[#6F6F6F] hover:text-[#16213E]"
                  >
                    Email Marketing Engine
                  </Link>
                  <Link
                    href="/searchengineoptimization"
                    className="text-[#6F6F6F] hover:text-[#16213E]"
                  >
                    SEO Domination
                  </Link>
                  <Link
                    href="/crm"
                    className="text-[#6F6F6F] hover:text-[#16213E]"
                  >
                    CRM Growth Engine
                  </Link>
                  <Link
                    href="/salesgrowth"
                    className="text-[#6F6F6F] hover:text-[#16213E]"
                  >
                    Sales Growth
                  </Link>
                </div>
              )}
            </div>
            <Link href="/contactus">
              <span
                className={`${
                  isActive("/contactus") ? "text-[#16213E]" : "text-[#6F6F6F]"
                }`}
              >
                Contact&nbsp;us
              </span>
            </Link>
            <Link href="/aboutus">
              <span
                className={`${
                  isActive("/aboutus") ? "text-[#16213E]" : "text-[#6F6F6F]"
                }`}
              >
                About&nbsp;us
              </span>
            </Link>{" "}
            <Link href="/toolsandtech">
              <span
                className={`${
                  isActive("/toolsandtexh")
                    ? "text-[#16213E]"
                    : "text-[#6F6F6F]"
                }`}
              >
                Tools&nbsp;&&nbsp;Tech
              </span>
            </Link>
          </div>
        </Drawer>
      </div>
    </>
  );
};

export default Header;
