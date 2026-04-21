"use client";
import { getImgPath } from "@/utils/imagePath";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FC } from "react";
import { sections } from "../../../app/api/data";

const footerTitles = {
  features: "Features",
  resources: "Resources",
  platform: "Platform",
};

const Footer: FC = () => {
  const pathname = usePathname();
  console.log(pathname); // For debugging

  const bgImagePath = getImgPath("/images/footer/ftr-bg.png");

  return (
    <footer
      className={`relative dark:bg-darkmode bg-cover bg-no-repeat w-full h-full ${
        pathname === "/" ? "pt-72 z-3" : "pt-32"
      }`}
      style={{ backgroundImage: `url(${bgImagePath})` }}
    >
      <div className="bg-secondary md:pb-20 pb-8">
        <div className="container">
          <div className="flex items-center justify-between pb-16 border-b border-dark_border border-solid">
            <Link href="/">
              <Image
                src={getImgPath("/images/footer/ftr-logo.svg")}
                alt="Company logo"
                width={160}
                height={50}
                style={{ width: "auto", height: "auto" }}
                quality={100}
              />
            </Link>
            <div>
              <ul className="flex items-center gap-5">
                <li>
                  <Link href="/" aria-label="Facebook">
                    <svg
                      width="26"
                      height="27"
                      fill="white"
                      viewBox="0 0 26 27"
                      className="group-hover:fill-LightApricot"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      {/* SVG Path */}
                    </svg>
                  </Link>
                </li>
                <li>
                  <Link href="/" aria-label="Twitter">
                    <svg
                      width="26"
                      height="27"
                      viewBox="0 0 26 27"
                      fill="#fff"
                      className="group-hover:fill-LightApricot"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      {/* SVG Path */}
                    </svg>
                  </Link>
                </li>
                <li>
                  <Link href="/" aria-label="LinkedIn">
                    <svg
                      width="26"
                      height="28"
                      viewBox="0 0 26 28"
                      fill="#fff"
                      className="group-hover:fill-LightApricot"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      {/* SVG Path */}
                    </svg>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="grid grid-cols-12 pt-10">
            {Object.entries(sections).map(([sectionKey, items], index) => {
              // Define column span based on index or sectionKey
              let colSpan = "col-span-3";

              return (
                <div key={sectionKey} className={`${colSpan}`}>
                  <p className="text-lg font-medium text-white pb-4">
                    {footerTitles[sectionKey as keyof typeof footerTitles]}
                  </p>
                  <ul>
                    {items.map((item) => (
                      <li
                        key={item.name}
                        className="text-base font-normal text-SlateBlue leading-8 hover:text-white"
                      >
                        <Link href={item.href}>{item.name}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
            <div className="col-span-3">
              <p className="text-lg font-medium text-white pb-4">
                Sign up for updates
              </p>
              <div className="relative flex">
                <input
                  type="email"
                  name="email"
                  placeholder="Email address*"
                  className="bg-transparent border border-dark_border border-solid py-3 pl-6 pr-14 rounded-lg focus:outline-0 text-SlateBlue w-full focus:border-primary"
                  aria-label="Email address"
                />
                <button
                  className="absolute bg-transparent right-0 p-4"
                  aria-label="Submit"
                >
                  <i
                    className="bg-contain w-5 h-5 inline-block"
                    style={{
                      backgroundImage: `url(${getImgPath(
                        "/images/footer/msg-enter.svg"
                      )})`,
                    }}
                  ></i>
                </button>
              </div>
              <p className="text-base font-normal text-SlateBlue max-w-310 pt-3">
                © Copyright 2025. All rights reserved by{" "}
                <Link
                  target="_blank"
                  rel="noopener noreferrer"
                  href={"https://getnextjstemplates.com/"}
                  className="hover:text-primary"
                >
                  GetNextJs Themes
                </Link>
                . Distributed by{" "}
                <Link
                  target="_blank"
                  rel="noopener noreferrer"
                  href={"https://themewagon.com/"}
                  className="hover:text-primary"
                >
                  ThemeWagon
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
