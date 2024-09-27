// components/WhyChooseUs.tsx

import React from "react";
import AutoCarousel from "./AutoCarousel";
const WhyChooseUs = () => {
  return (
    <div className="w-full h-full flex flex-col lg:flex-row items-center my-12"> {/* Added vertical margin */}
      <div className="w-full lg:w-1/2 py-8 lg:py-0 flex justify-center items-center">
        <p className="text-5xl lg:text-7xl font-bold text-[#000000] leading-snug text-center lg:text-left">
          WHY
          <br />
          CHOOSE US?
        </p>
      </div>
      <div className="w-full lg:w-1/2 py-8 lg:py-0 flex justify-center">
        <AutoCarousel />
      </div>
    </div>
  );
};

export default WhyChooseUs;
