import CaseStudy from "@/components/CaseStudy";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Acquisition from "@/components/Hero/Acquisition";
import Offering from "@/components/Offering/RetentionOffering";
import Retain from "@/components/Pulse/Retain";
import Trending from "@/components/Trending";
import WhyChooseUs from "@/components/WhyChooseUs/WhyChooseUs2";

export default function Home() {
  return (
    <>
      <Header />
      <Acquisition />
      <Offering />
      <Retain />
      <WhyChooseUs />
      <CaseStudy />
      <Trending />
      <Footer />
    </>
  );
}
