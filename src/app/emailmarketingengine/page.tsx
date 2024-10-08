import CaseStudy from "@/components/CaseStudy";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import EmeHero from "@/components/Hero/Eme";
import EmeOffering from "@/components/Offering/EmeOffering";
import Eme from "@/components/Pulse/Eme";


import Trending from "@/components/Trending";
import WhyChooseUs from "@/components/WhyChooseUs/WhyChooseUs2";

export default function Home() {
    return (
        <>
            <Header />

            <EmeHero />
            <EmeOffering />
            <Eme/>
            <WhyChooseUs />
            <CaseStudy />
            <Trending />
            <Footer />
        </>
    );
}
