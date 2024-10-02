import CaseStudy from "@/components/CaseStudy";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Acquisition from "@/components/Hero/Acquisition";
import AcquisitionOffering from "@/components/Offering/AcquisitionOffering";
import Retain from "@/components/Pulse/Retain";
import Trending from "@/components/Trending";
import WhyChooseUs from "@/components/WhyChooseUs/WhyChooseUs2";

export default function Home() {
  return (
    <>
      <Header />
      <Acquisition />
      <AcquisitionOffering />
      <Retain />
      <WhyChooseUs />
      <CaseStudy />
      <Trending />
      <Footer />
    </>
  );
}
