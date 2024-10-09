import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white rounded-lg py-8">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <div className="flex flex-wrap justify-center items-center mb-6 text-sm md:text-base lg:text-lg  text-gray-500 sm:mb-0 dark:text-gray-400 gap-4 md:gap-10 lg:gap-16">
            <Link href="/" className="text-[#E74C3C]">
              Consulting
            </Link>
            <Link href="/services" className="text-[#E74C3C]">
              Services
            </Link>
            <Link href="/aboutus" className="text-[#E74C3C]">
              About us
            </Link>
            <Link href="/contactus" className="text-[#E74C3C]">
              Contact Us
            </Link>
          </div>
          <div className="flex justify-center items-center gap-4 lg:gap-8">
            <Image src="/fb.png" alt="frame" width={30} height={30} />
            <Image src="/Twitter.png" alt="frame" width={30} height={30} />
            <Image src="/Vimeo.png" alt="frame" width={30} height={30} />
            <Image src="/Youtube.png" alt="frame" width={30} height={30} />
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8 w-full lg:w-10/12" />
        <div className="w-full flex flex-col lg:flex-row gap-6 justify-between items-center">
          <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2024 93 Communications. All rights reserved!
          </span>
          <Image src="/logo.png" alt="frame" width={200} height={200} />
          <ul className="flex items-center mb-6 text-sm  text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
              <a href="/toolsandtech" className="hover:underline me-2 md:me-6">
                Tools&nbsp;and&nbsp;Tech
              </a>
            </li>
            <li>
              <a href="/t&c" className="hover:underline me-2 md:me-6">
                Terms&nbsp;&&nbsp;conditions
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline me-2 md:me-6">
                Privacy&nbsp;Policy
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
