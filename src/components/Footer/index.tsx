import Image from "next/image";
import React from "react";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className="bg-white rounded-lg py-24">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center lg:justify-between">
          <ul className="flex flex-wrap justify-center items-center mb-6 text-base lg:text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                Licensing
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
          <div className="flex justify-center items-center gap-8">
            <Image src="/fb.png" alt="frame" width={30} height={30} />
            <Image src="/Twitter.png" alt="frame" width={30} height={30} />
            <Image src="/Vimeo.png" alt="frame" width={30} height={30} />
            <Image src="/Youtube.png" alt="frame" width={30} height={30} />
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8 w-full lg:w-10/12" />
        <div className="w-full flex flex-col lg:flex-row gap-8 justify-between items-center">
          <span className="block text-lg lg:text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2022 ABC. All rights reserved.
          </span>
          <Image src="/Frame.png" alt="frame" width={200} height={200} />
          <ul className="flex flex-wrap items-center mb-6 text-lg lg:text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
