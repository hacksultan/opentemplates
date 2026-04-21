import Preferred from '@/components/Home/preferred-plan'
import HeroSub from '@/components/SharedComponent/HeroSub'
import React from 'react'
import { Metadata } from "next";
export const metadata: Metadata = {
    title: "Pricing | Sustainable",
};

const page = () => {
  return (
    <>
        <HeroSub
            title="Pricing"
            description=""
        />
        <Preferred/>
    </>
  )
}

export default page