import CaseStudy from "@/components/CaseStudy";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import CrmHero from "@/components/Hero/Crm";
import CrmOffering from "@/components/Offering/CrmOffering";

import Crm from "@/components/Pulse/Crm";

import Trending from "@/components/Trending";
import WhyChooseUs from "@/components/WhyChooseUs/WhyChooseUs2";

export default function Home() {
    return (
        <>
            <Header />

            <CrmHero/>
            <CrmOffering/>
            <Crm/>
            <WhyChooseUs />
            <CaseStudy />
            <Trending />
            <Footer />
        </>
    );
}
