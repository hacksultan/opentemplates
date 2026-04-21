"use client";
import { boxData } from "@/app/api/data";
import PortfolioSlider from "@/components/Portfolio_detail/PortfolioSlider";
import HeroSub from "@/components/SharedComponent/HeroSub";
import { getImgPath } from "@/utils/imagePath";
import Image from "next/image";

interface PortfolioContentProps {
  slug: string;
}

export default function PortfolioContent({ slug }: PortfolioContentProps) {
  const item = boxData.find((item) => item.slug === slug);

  return (
    <>
      <HeroSub title="Portfolio Details" description="" />
      <div className="dark:bg-darkmode -mt-52 pt-72">
        <div className="container">
          <div className="md:pb-20 pb-10">
            <h2 className="sm:text-5xl text-3xl font-bold text-secondary dark:text-white pb-5">
              {item?.title}
            </h2>
            <p className="font-normal text-SlateBlue dark:text-darktext text-xl max-w-634">
              We are a dedicated team of passionate product managers, full stack
              developers, UX/UI designers, QA engineers and marketing.
            </p>
          </div>
          <div className="md:pb-20 pb-10">
            <img
              src={item?.src}
              alt="Contact"
              width={1100}
              height={0}
              style={{ width: "100%", height: "auto" }}
              className="w-full sm:h-583 h-80 rounded-lg"
            />
          </div>
          <div className="flex items-start w-full justify-between flex-wrap sm:flex-nowrap lg:gap-0 gap-8">
            <div className="lg:w-2/2 w-full">
              <div className="md:pb-14 pb-6">
                <p className="md:text-[26px] leading-[2.11rem] text-base font-normal text-secondary dark:text-white">
                  We are a dedicated team of passionate product
                  managers,developers, UX/UI designers, QA engineers experts
                  helping businesses from new startups
                </p>
              </div>
              <div className="flex items-start justify-between sm:flex-row flex-col md:gap-13 gap-5">
                <p className="sm:text-lg text-base font-normal text-SlateBlue dark:text-darktext max-w-310">
                  Popularised in the 1960s with the release of Letraset sheets
                  containing Lorem Ipsum passages, and more recently with
                  desktop publishing software like Aldus PageMaker.
                </p>
                <p className="sm:text-lg text-base font-normal text-SlateBlue dark:text-darktext max-w-311">
                  Lorem Ipsum as their default model text, and a search for
                  lorem ipsum will uncover many web sites still in their
                  infancy. Various versions have evolved over.
                </p>
              </div>
            </div>
            <div className="flex flex-col items-start bg-white dark:bg-darklight shadow-portfolio_box dark:shadow-none pt-10 lg:pl-12 pl-9 lg:w-1/2 w-full rounded-lg">
              <span className="pb-6 text-primary text-xl font-bold">
                Our services
              </span>
              <span className="pb-6 text-[22px] leading-[2rem] font-normal text-secondary dark:text-white">
                Brand Strategy
              </span>
              <span className="pb-6 text-[22px] leading-[2rem] font-normal text-secondary dark:text-white">
                Communications
              </span>
              <span className="pb-6 text-[22px] leading-[2rem] font-normal text-secondary dark:text-white">
                Visual Identity
              </span>
              <span className="pb-6 text-[22px] leading-[2rem] font-normal text-secondary dark:text-white">
                Brand Support
              </span>
              <span className="pb-6 text-[22px] leading-[2rem] font-normal text-secondary dark:text-white">
                Web Design
              </span>
            </div>
          </div>
          <div className="md:pt-24 pt-10">
            <div className="flex md:flex-nowrap flex-wrap items-center gap-10">
              <Image
                src={getImgPath("/images/portfolio-details/font-1.jpg")}
                alt="Portfolio"
                width={0}
                height={0}
                quality={100}
                sizes="100vh"
                layout="responsive"
                className="rounded-lg"
              />
              <Image
                src={getImgPath("/images/portfolio-details/font-2.jpg")}
                alt="Portfolio"
                width={0}
                height={0}
                quality={100}
                sizes="100vh"
                layout="responsive"
                className="rounded-lg"
              />
            </div>
            <div className="flex md:flex-nowrap flex-wrap lg:gap-13 gap-5 justify-center items-center md:py-16 py-6">
              <div className="bg-primary w-20 h-20 rounded-full"></div>
              <div className="bg-[#EEE8A9] w-20 h-20 rounded-full"></div>
              <div className="bg-[#CAD7FD] w-20 h-20 rounded-full"></div>
              <div className="bg-[#A0F0E3] w-20 h-20 rounded-full"></div>
              <div className="bg-[#A0F0E3] w-20 h-20 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="dark:bg-darkmode grid lg:grid-cols-2 grid-cols-1 md:gap-20 gap-4 items-center border-t border-solid border-AliceBlue dark:border-dark_border lg:px-0 px-7">
        <div>
          <Image
            src={getImgPath("/images/portfolio-details/work-process.png")}
            alt="Portfolio"
            width={0}
            height={0}
            quality={100}
            sizes="100vh"
            layout="responsive"
            className="rounded-lg"
          />
        </div>
        <div className="xl:pb-0 pb-5">
          <h2 className="font-bold sm:text-[40px] sm:leading-[3rem] text-[28px] leading-[2.25rem] text-secondary dark:text-white pb-3">
            Working Process
          </h2>
          <p className="text-lg font-normal text-SlateBlue dark:text-darktext max-w-550 md:pb-16 pb-6">
            We are a dedicated team of passionate product managers, full stack
            developers, UX/UI designers, QA engineers and marketing experts
            helping businesses of every size — from new startups
          </p>
          <div className="grid md:grid-cols-2 grid-cols-1 gap-y-8">
            <div className="flex items-center gap-5">
              <div className="bg-LavenderBlue dark:bg-darklight w-8 h-8 flex items-center justify-center rounded-full">
                <span className="text-primary text-14 font-bold">1</span>
              </div>
              <div>
                <p className="font-medium text-lg text-SlateBlue dark:text-darktext max-w-56">
                  Vestibulum non sapien mattis commodo.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-5">
              <div className="bg-LavenderBlue dark:bg-darklight w-8 h-8 flex items-center justify-center rounded-full">
                <span className="text-primary text-14 font-bold">2</span>
              </div>
              <div>
                <p className="font-medium text-lg text-SlateBlue dark:text-darktext max-w-56">
                  Donec luctus tincidunt ornare.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-5">
              <div className="bg-LavenderBlue dark:bg-darklight w-8 h-8 flex items-center justify-center rounded-full">
                <span className="text-primary text-14 font-bold">3</span>
              </div>
              <div>
                <p className="font-medium text-lg text-SlateBlue dark:text-darktext max-w-56">
                  Quisque pretium erat acdui posuere.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-5">
              <div className="bg-LavenderBlue dark:bg-darklight w-8 h-8 flex items-center justify-center rounded-full">
                <span className="text-primary text-14 font-bold">4</span>
              </div>
              <div>
                <p className="font-medium text-lg text-SlateBlue dark:text-darktext max-w-56">
                  Fusce eleifend vitae eleifend ullamcor.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-primary md:py-24 py-8">
        <div className="container">
          <div className="flex flex-wrap justify-between items-center">
            <div>
              <div className="inline-flex flex-wrap items-center md:gap-24 gap-4">
                <h2 className="sm:text-[40px] sm:leading-[3rem] text-[28px] leading-[2.25rem] font-bold text-white max-w-52">
                  Client Testimonial
                </h2>
                <Image
                  src={getImgPath("/images/portfolio-details/quote.png")}
                  alt="Portfolio"
                  width={0}
                  height={0}
                  quality={100}
                  sizes="100vh"
                  layout="responsive"
                  className="w-32! h-32!"
                />
              </div>
              <p className="text-2xl font-normal text-LightSoftBlue md:pt-10 pt-0 max-w-672 pb-9">
                Letraset sheets containing Lorem Ipsum passages and more
                recently with desktop publishing Various versions have evolved
                over the years, sometimes
              </p>
              <div>
                <span className="text-2xl font-bold text-white">
                  Stephanie Sue
                </span>
                <p className="text-20 font-medium text-LightSoftBlue">
                  Designation
                </p>
              </div>
            </div>
            <div>
              <Image
                src={getImgPath(
                  "/images/portfolio-details/1a4f4281fd2cd22b7d1785419c5813de.png"
                )}
                alt="Portfolio"
                width={0}
                height={0}
                quality={100}
                sizes="100vh"
                layout="responsive"
                className="rounded-full sm:w-80! w-40! sm:h-80! h-40! object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      <PortfolioSlider />
    </>
  );
}
