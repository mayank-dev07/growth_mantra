import { ArrowRight } from "lucide-react";
import Image from "next/image";
import React from "react";
import VerticalSwiper from "../VerticalSwiper";

type Props = {};

const Hero = (props: Props) => {
  return (
    <>
      <div className="min-h-screen w-full flex lg:flex-row flex-col pt-32">
        <div className="w-full lg:w-8/12">
          <Image src="/Frame.png" alt="frame" width={400} height={400} />
          <div className="px-0 lg:px-10 xl:px-16 flex flex-col gap-8">
            <div className="w-fit p-4 text-lg font-medium tracking-wider text-[#E74C3C] bg-[#FFEDEB] rounded-xl">
              👋 Welcome to The Growth Mantra
            </div>
            <div className="w-full flex flex-col gap-10 p-1 lg:px-0 ">
              <div className="text-4xl sm:text-7xl md:text-7xl xl:text-8xl 2xl:text-9xl font-medium flex flex-col gap-4">
                Your&nbsp;North&nbsp;Star
                <div className="flex items-center gap-2">
                  <div className="border-[#E74C3C] py-0 px-5 t  border-4 w-fit rounded-full text-[#E74C3C] font-medium shadow-2xl">
                    Growth
                  </div>
                  Catalyst
                </div>
              </div>
              <div className="text-[#425466] text-lg py-4">
                Your strategic partner for sustainable growth
              </div>
              <div className="group rounded-full w-fit px-6 py-4 flex text-xl text-white bg-[#E74C3C] hover:bg-white hover:text-[#E74C3C] border-[1px] shadow-xl tracking-wider items-center gap-4 cursor-pointer">
                Unlock your Growth now
                <div className="p-3 bg-white rounded-full text-black group-hover:bg-[#E74C3C] group-hover:text-white">
                  <ArrowRight />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" w-4/12">
          <VerticalSwiper />
        </div>
      </div>

      <div className="flex flex-col py-12 gap-8">
        <div className="w-full h-full flex flex-col justify-center items-center text-[#B2B7BE]">
          SOME OF OUR TRUSTED CLIENTS
        </div>
        <div className="w-full flex justify-center items-center gap-12 flex-wrap">
          <Image
            src="/sponser1.png"
            alt="sponser"
            width={130}
            height={130}
          ></Image>{" "}
          <Image
            src="/sponser2.png"
            alt="sponser"
            width={130}
            height={130}
          ></Image>{" "}
          <Image
            src="/sponser3.png"
            alt="sponser"
            width={130}
            height={130}
          ></Image>{" "}
          <Image
            src="/sponser4.png"
            alt="sponser"
            width={130}
            height={130}
          ></Image>{" "}
          <Image
            src="/sponser5.png"
            alt="sponser"
            width={130}
            height={130}
          ></Image>{" "}
          <Image
            src="/sponser6.png"
            alt="sponser"
            width={130}
            height={130}
          ></Image>{" "}
        </div>
      </div>
    </>
  );
};

export default Hero;
