import FaqQuestion from "@/components/Home/faq";
import HeroSub from "@/components/SharedComponent/HeroSub";
import React from "react";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "FAQ | Sustainable",
};

const page = () => {
  return (
    <>
      <HeroSub title="Faqs" description="" />
      <FaqQuestion />
    </>
  );
};

export default page;
