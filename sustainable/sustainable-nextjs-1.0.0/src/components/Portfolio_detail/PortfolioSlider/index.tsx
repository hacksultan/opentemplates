"use client";
import { boxData } from "@/app/api/data";
import { getImgPath } from "@/utils/imagePath";
import Image from "next/image";
import Link from "next/link";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

const PortfolioSlider = () => {
  var settings = {
    dots: true,
    autoplay: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="md:py-20 py-10 dark:bg-darkmode">
      <h2 className="sm:text-[40px] sm:leading-[3rem] text-[28px] leading-[2.25rem] text-secondary dark:text-white font-bold text-center pb-10">
        Related Projects
      </h2>
      <Slider {...settings}>
        {boxData.map((item, index) => (
          <div key={index} className="px-3">
            <div className="relative rounded-14 overflow-hidden">
              <Image
                src={item.src}
                alt={item.alt}
                width={0}
                height={0}
                quality={100}
                layout="responsive"
                sizes="100vh"
                className="h-full!"
              />
              <div className="absolute sm:top-10 top-6 sm:left-10 left-6 group">
                <h5 className="sm:text-[26px] leading-[2.11rem] text-20 text-white pb-6 font-bold max-w-356">
                  {item.title}
                </h5>
                <Link
                  href={`/portfolio/${item.slug}`}
                  className="flex items-center gap-3 text-white sm:text-base text-sm font-normal group-hover:opacity-60"
                >
                  Learn More
                  <i
                    className="bg-no-repeat bg-contain w-4 h-3 inline-block transform transition-transform duration-300 ease-in-out group-hover:translate-x-1"
                    style={{
                      backgroundImage: `url(${getImgPath(
                        "/images/build-amazing/right-arrow.svg"
                      )})`,
                    }}
                  ></i>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default PortfolioSlider;
