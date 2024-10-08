import CaseStudy from "@/components/CaseStudy";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import UiHero from "@/components/Hero/Ui";
import UiOffering from "@/components/Offering/UiOffering";

import Ui from "@/components/Pulse/Ui";
import Trending from "@/components/Trending";
import WhyChooseUs from "@/components/WhyChooseUs/WhyChooseUs2";

export default function Home() {
    return (
        <>
            <Header />

            <UiHero/>
            <UiOffering/>
            <Ui/>
            <WhyChooseUs />
            <CaseStudy />
            <Trending />
            <Footer />
        </>
    );
}
