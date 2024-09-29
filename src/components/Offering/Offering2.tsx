import React from "react";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

const services = [
    {
        title: "Capture Accurate Retention Analysis",
        description: "Analyze data to predict churn and improve customer retention.",
        point1: "Unsure why customers churn?",
        point2: "RFM Model not yielding insights?",
        point3: "Retention strategies falling short?",
    },
    {
        title: "Optimize Digest and Customer Educational Content",
        description: "Timely, relevant communications driving product adoption and success.",
        point1: "User education not boosting retention?",
        point2: "Email timing and content suboptimal?",
        point3: "Customer communications lacking impact?",
    },
    {
        title: "Build Advanced Techniques for Pulling Users Back",
        description: "Innovative re-engagement strategies to revive dormant user accounts.",
        point1: "Dormant users not reactivating?",
        point2: "Re-engagement efforts ineffective?",
        point3: "Struggling with user segmentation?",
    },
];

const CheckmarkIcon = () => (
    <div className="w-[30px] h-[30px] flex justify-center items-center mr-3">
        <Image
            width={30}
            height={30}
            src="/Success.png" // Replace with the actual path to your PNG
            alt="Checkmark Icon"
            className="w-full h-full object-contain"
        />
    </div>
);

const Offering = () => {
    return (
        <>
            <section className="bg-[#E74C3C] p-6 lg:p-12 text-white w-full">
                <div className="text-start mb-10 flex flex-col gap-4 md:gap-8">
                    <h2 className="text-5xl lg:text-7xl font-bold mb-4">Our Offering</h2>
                    <p className="text-lg lg:text-xl w-fit tracking-wider flex flex-col gap-2 text-[#DFDFDF]">
                        <span>
                            Explore our comprehensive suite of services designed to fuel your
                        </span>
                        <span>growth at every stage of your business journey.</span>
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10 sm:px-10 lg:px-0">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="bg-white text-[#E74C3C] p-6 lg:p-8 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col"
                        >
                            <div className="flex-grow">
                                <h3 className="text-lg md:text-xl text-black font-bold">
                                    {service.title}
                                </h3>
                                <p className="text-base md:text-lg pt-3 text-[#8A8A8A]">
                                    {service.description}
                                </p>
                            </div>

                            <div className="flex flex-col gap-6 mt-6">
                                <div className="flex items-center">
                                    <CheckmarkIcon />
                                    <p className="text-lg text-black font-semibold">
                                        {service.point1}
                                    </p>
                                </div>
                                <div className="flex items-center">
                                    <CheckmarkIcon />
                                    <p className="text-lg text-black font-semibold">
                                        {service.point2}
                                    </p>
                                </div>
                                <div className="flex items-center">
                                    <CheckmarkIcon />
                                    <p className="text-lg text-black font-semibold">
                                        {service.point3}
                                    </p>
                                </div>
                            </div>

                            <div className="w-full flex justify-center mt-10">
                                <div className="group rounded-full w-fit px-4 py-3 flex text-sm md:text-base text-white bg-[#E74C3C] hover:bg-white hover:text-[#E74C3C] border-[1px] shadow-xl tracking-wider items-center gap-2 cursor-pointer transition-all duration-500 ease-in-out">
                                    Schedule a Call
                                    <div className="p-2 bg-white rounded-full text-black group-hover:bg-[#E74C3C] group-hover:text-white transition-all duration-300 ease-in-out">
                                        <ArrowRight />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <div className="py-10 px-4 w-full flex justify-center items-center">
                <div className="group rounded-full w-fit px-6 py-4 flex text-sm md:text-base lg:text-xl hover:text-white hover:bg-[#E74C3C] bg-white text-[#E74C3C] border-[1px] shadow-xl tracking-wider items-center gap-4 cursor-pointer transition-all duration-500 ease-in-out font-bold">
                    {`Stop losing customers - Unlock Retention Growth Now`}
                    <div className="p-3 group-hover:bg-white rounded-full text-white bg-[#E74C3C] group-hover:text-[#E74C3C]">
                        <ArrowRight />
                    </div>
                </div>
            </div>
            <hr className="border-t-2 w-full" />
        </>
    );
};

export default Offering;
