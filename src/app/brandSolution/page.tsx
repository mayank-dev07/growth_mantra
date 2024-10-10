import CaseStudy from "@/components/CaseStudy/CaseStudy";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import WhyChooseUs from "@/components/WhyChooseUs/WhyChooseUs";
import Trending from "@/components/Trending/Trending";
import BrandSolutionHero from "@/components/Hero/BrandSolution";
import BrandSolutionOffering from "@/components/Offering/BrandSolutionOffering";
import BrandSolution from "@/components/Pulse/BrandSolution";

export default function Home() {
  return (
    <>
      <Header />
      <BrandSolutionHero/>
      <BrandSolutionOffering/>
      <BrandSolution/>
      <WhyChooseUs />
      <CaseStudy />
      <Trending />
      <Footer />
    </>
  );
}
