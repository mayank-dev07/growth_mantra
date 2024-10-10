import CaseStudy from "@/components/CaseStudy/CaseStudy";
import Hero from "@/components/Hero/Hero";
import Offering from "@/components/Offering/Offering";
import Pulse from "@/components/Pulse/Pulse";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import WhyChooseUs from "@/components/WhyChooseUs/WhyChooseUs";
import Trending from "@/components/Trending/Trending";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Offering />
      <Pulse />
      <WhyChooseUs />
      <CaseStudy />
      <Trending />

      <Footer />
    </>
  );
}
