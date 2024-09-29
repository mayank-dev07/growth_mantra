import Image from "next/image";
import React from "react";

const WhyChooseUs = () => {
  return (
    <>
      <div className="w-full h-full flex flex-col lg:flex-row">
        <div className="w-full lg:w-1/2 py-6 lg:py-0 flex justify-center items-center">
          <p className="text-4xl lg:text-6xl font-bold text-[#E74C3C] leading-snug">
            WHY
            <br />
            CHOOSE US?
          </p>
        </div>
        <div className="w-full lg:w-1/2 bg-[#E74C3C] py-6 lg:py-20 flex justify-center items-center">
          <ul className="space-y-1 text-white px-4 lg:px-28">
            <li className="flex items-center gap-2 text-md lg:text-xl py-3">
              <div className="w-1/12 flex justify-center items-center">
                <div className="w-fit h-full bg-white p-1 border-[1px] rounded-md">
                  <Image
                    src="/Vector.png"
                    alt="mioe"
                    width={40}
                    height={40}
                    className="object-contain w-full"
                  />
                </div>
              </div>
              <div className="w-11/12">
                Accelerate Growth with Precision-Driven Acquisition Engine
              </div>
            </li>
            <li className="flex items-center gap-2 text-md lg:text-xl py-3">
              <div className="w-1/12 flex justify-center items-center">
                <div className="w-fit h-full bg-white p-1 border-[1px] rounded-md">
                  <Image
                    src="/Vector.png"
                    alt="mioe"
                    width={40}
                    height={40}
                    className="object-contain w-full"
                  />
                </div>
              </div>
              <div className="w-11/12">Data-Powered Retention Growth</div>
            </li>
            <li className="flex items-center gap-2 text-md lg:text-xl py-3">
              <div className="w-1/12 flex justify-center items-center">
                <div className="w-fit h-full bg-white p-1 border-[1px] rounded-md">
                  <Image
                    src="/Vector.png"
                    alt="mioe"
                    width={40}
                    height={40}
                    className="object-contain w-full"
                  />
                </div>
              </div>
              <div className="w-11/12">Amplify Customer Lifetime Value</div>
            </li>
            <li className="flex items-center gap-2 text-md lg:text-xl py-3">
              <div className="w-1/12 flex justify-center items-center">
                <div className="w-fit h-full bg-white p-1 border-[1px] rounded-md">
                  <Image
                    src="/Vector.png"
                    alt="mioe"
                    width={40}
                    height={40}
                    className="object-contain w-full"
                  />
                </div>
              </div>
              <div className="w-11/12">Conversion-Focused Optimization</div>
            </li>
            <li className="flex items-center gap-2 text-md lg:text-xl py-3">
              <div className="w-1/12 flex justify-center items-center">
                <div className="w-fit h-full bg-white p-1 border-[1px] rounded-md">
                  <Image
                    src="/Vector.png"
                    alt="mioe"
                    width={40}
                    height={40}
                    className="object-contain w-full"
                  />
                </div>
              </div>
              <div className="w-11/12">
                Craft a Unique, Brand-Aligned Growth Strategy
              </div>
            </li>
            <li className="flex items-center gap-2 text-md lg:text-xl py-3">
              <div className="w-1/12 flex justify-center items-center">
                <div className="w-fit h-full bg-white p-1 border-[1px] rounded-md">
                  <Image
                    src="/Vector.png"
                    alt="mioe"
                    width={40}
                    height={40}
                    className="object-contain w-full"
                  />
                </div>
              </div>
              <div className="w-11/12">
                Optimize Messaging for Maximum Impact
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default WhyChooseUs;
