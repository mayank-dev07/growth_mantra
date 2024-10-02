import CaseStudy from "@/components/CaseStudy";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Funnel from "@/components/Hero/Funnel";
import Offering from "@/components/Offering/RetentionOffering";
import Retain from "@/components/Pulse/Retain";
import Trending from "@/components/Trending";
import WhyChooseUs from "@/components/WhyChooseUs/WhyChooseUs2";

export default function Home() {
  return (
    <>
      <Header />
      <Funnel />
      <Offering />
      <Retain />
      <WhyChooseUs />
      <CaseStudy />
      <Trending />
      <Footer />
    </>
  );
}
