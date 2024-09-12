import { SquareCheck } from "lucide-react";
import Image from "next/image";
import React from "react";

type Props = {};

const WhyChooseUs = (props: Props) => {
  return (
    <>
      <div className="w-full min-h-[calc(100vh-100px)] flex flex-col lg:flex-row">
        <div className="w-full lg:w-1/2 flex justify-center items-center">
          <p className="text-6xl lg:text-9xl font-medium text-[#E74C3C] leading-snug">
            WHY
            <br />
            CHOOSE US?
          </p>
        </div>
        <div className="w-full lg:w-1/2 bg-[#E74C3C] flex justify-center items-center ">
          <ul className="space-y-2  text-white px-4 lg:px-32">
            <li className="flex items-center gap-3 text-3xl py-4">
              <div className="w-1/12 flex justify-center items-center">
                <div className="w-fit h-full bg-white p-2 border-[1px] rounded-md">
                  <Image
                    src="/Vector.png"
                    alt="mioe"
                    width={50}
                    height={50}
                    className="object-contain w-full"
                  />
                </div>
              </div>
              <div className="w-11/12">
                Accelerate Growth with Precision-Driven Acquisition Engine
              </div>
            </li>
            <li className="flex items-center gap-3 text-3xl py-4">
              <div className="w-1/12 flex justify-center items-center">
                <div className="w-fit h-full bg-white p-2 border-[1px] rounded-md">
                  <Image
                    src="/Vector.png"
                    alt="mioe"
                    width={50}
                    height={50}
                    className="object-contain w-full"
                  />
                </div>
              </div>
              <div className="w-11/12">Data-Powered Retention Growth</div>
            </li>
            <li className="flex items-center gap-3 text-3xl py-4">
              <div className="w-1/12 flex justify-center items-center">
                <div className="w-fit h-full bg-white p-2 border-[1px] rounded-md">
                  <Image
                    src="/Vector.png"
                    alt="mioe"
                    width={50}
                    height={50}
                    className="object-contain w-full"
                  />
                </div>
              </div>
              <div className="w-11/12">Amplify Customer Lifetime Value</div>
            </li>
            <li className="flex items-center gap-3 text-3xl py-4">
              <div className="w-1/12 flex justify-center items-center">
                <div className="w-fit h-full bg-white p-2 border-[1px] rounded-md">
                  <Image
                    src="/Vector.png"
                    alt="mioe"
                    width={50}
                    height={50}
                    className="object-contain w-full"
                  />
                </div>
              </div>
              <div className="w-11/12">Conversion-Focused Optimization</div>
            </li>
            <li className="flex items-center gap-3 text-3xl py-4">
              <div className="w-1/12 flex justify-center items-center">
                <div className="w-fit h-full bg-white p-2 border-[1px] rounded-md">
                  <Image
                    src="/Vector.png"
                    alt="mioe"
                    width={50}
                    height={50}
                    className="object-contain w-full"
                  />
                </div>
              </div>
              <div className="w-11/12">
                Craft a Unique, Brand-Aligned Growth Strategy
              </div>
            </li>
            <li className="flex items-center gap-3 text-3xl py-4">
              <div className="w-1/12 flex justify-center items-center">
                <div className="w-fit h-full bg-white p-2 border-[1px] rounded-md">
                  <Image
                    src="/Vector.png"
                    alt="mioe"
                    width={50}
                    height={50}
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
