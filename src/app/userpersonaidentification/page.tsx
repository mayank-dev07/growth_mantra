import CaseStudy from "@/components/CaseStudy/CaseStudy";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import WhyChooseUs from "@/components/WhyChooseUs/WhyChooseUs";
import Trending from "@/components/Trending/Trending";
import UpiHero from "@/components/Hero/Upi";
import UpiOffering from "@/components/Offering/UpiOffering";
import Upi from "@/components/Pulse/Upi";

export default function Home() {
  return (
    <>
      <Header />
      <UpiHero/>
      <UpiOffering/>
      <Upi/>
      <WhyChooseUs />
      <CaseStudy />
      <Trending />
      <Footer />
    </>
  );
}
