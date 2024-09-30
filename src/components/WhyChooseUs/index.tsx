import Image from "next/image";
import React from "react";

const WhyChooseUs = () => {
  return (
    <>
      <div className="w-full h-full flex flex-col lg:flex-row">
        <div className="w-full lg:w-1/2 py-2 lg:py-0 flex justify-center items-center">
          <p className="text-3xl lg:text-5xl font-bold text-[#E74C3C] leading-snug">
            WHY
            <br />
            CHOOSE US?
          </p>
        </div>
        <div className="w-full lg:w-1/2 bg-[#E74C3C] py-4 lg:py-16 flex justify-center items-center">
          <ul className="space-y-1 text-white px-4 lg:px-24">
            {[
              "Accelerate Growth with Precision-Driven Acquisition Engine",
              "Data-Powered Retention Growth",
              "Amplify Customer Lifetime Value",
              "Conversion-Focused Optimization",
              "Craft a Unique, Brand-Aligned Growth Strategy",
              "Optimize Messaging for Maximum Impact",
            ].map((text, index) => (
              <li key={index} className="flex items-center gap-2 text-sm lg:text-lg py-2">
                <div className="w-1/12 flex justify-center items-center">
                  <div className="w-fit h-full bg-white p-[0.5rem] border-[1px] rounded-md">
                    <Image
                      src="/Vector.png"
                      alt="mioe"
                      width={32} // Reduced the size of the image
                      height={32}
                      className="object-contain w-full"
                    />
                  </div>
                </div>
                <div className="w-11/12">{text}</div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default WhyChooseUs;
