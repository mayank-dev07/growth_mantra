import CaseStudy from "@/components/CaseStudy";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Offering from "@/components/Offering";
import Pulse from "@/components/Pulse";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Offering />
      <Pulse />
      <WhyChooseUs />
      <CaseStudy />
    </>
  );
}
