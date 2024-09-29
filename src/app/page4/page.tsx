import CaseStudy from "@/components/CaseStudy";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

import Hero from "@/components/Hero/Hero2";



import Offering from "@/components/Offering/Offering2";
import Pulse from "@/components/Pulse/Pulse2";
import Trending from "@/components/Trending";
import WhyChooseUs from "@/components/WhyChooseUs/WhyChooseUs2";

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
