import ContactUs from "@/components/ContactUs";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Growth Mantra",
  description:
    "Get in touch with Growth Mantra for business consulting, strategy, and marketing services.",
};

export default function Contactus() {
  return (
    <>
      <ContactUs />
    </>
  );
}
