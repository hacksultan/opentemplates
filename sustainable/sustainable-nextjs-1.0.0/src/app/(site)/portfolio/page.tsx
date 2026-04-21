import CardBox from "@/components/Home/porfolio/cardbox";
import HeroSub from "@/components/SharedComponent/HeroSub";
import React from "react";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Portfolio | Sustainable",
};

const page = () => {
  return (
    <>
      <HeroSub title="Portfolio" description="" />
      <div className="-my-52 py-52 bg-AliceBlue">
        <CardBox />
      </div>
    </>
  );
};

export default page;
