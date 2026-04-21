"use client";
import { getImgPath } from "@/utils/imagePath";
import Link from "next/link";

const ContactInfo = () => {
  return (
    <>
      <section className="dark:bg-darkmode py-20">
        <div className="container">
          <div className="flex md:flex-row flex-col items-stretch justify-start sm:gap-28 gap-8">
            <div className="flex sm:flex-row flex-col items-start sm:gap-8 gap-4">
              <div className="bg-primary/20 dark:bg-darklight w-14 h-14 flex items-center justify-center rounded-full">
                <i
                  className="bg-no-repeat bg-contain w-8 h-8 inline-block"
                  style={{
                    backgroundImage: `url(${getImgPath(
                      "/images/contact/email.svg"
                    )})`,
                  }}
                ></i>
              </div>
              <div>
                <span className="text-secondary dark:text-white text-xl font-bold">
                  Email Us
                </span>
                <p className="text-SlateBlue font-normal text-xl max-w-334 pt-3 pb-7 dark:text-darktext">
                  Please feel free to drop us a line. We will respond as soon as
                  possible.
                </p>
                <div>
                  <Link
                    href="#"
                    className="text-primary text-lg font-medium flex items-center gap-3 group hover:text-secondary dark:hover:text-white"
                  >
                    Leave a message
                    <i
                      className="bg-no-repeat bg-contain inline-block w-6 h-4"
                      style={{
                        backgroundImage: `url(${getImgPath(
                          "/images/contact/arrow.svg"
                        )})`,
                      }}
                      onMouseEnter={(e) => {
                        const isDark =
                          document.documentElement.classList.contains("dark");
                        const hoverImage = isDark
                          ? getImgPath("/images/contact/arrow-hover-white.svg")
                          : getImgPath("/images/contact/arrow-hover.svg");
                        e.currentTarget.style.backgroundImage = `url(${hoverImage})`;
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundImage = `url(${getImgPath(
                          "/images/contact/arrow.svg"
                        )})`;
                      }}
                    ></i>
                  </Link>
                </div>
              </div>
            </div>
            <div className="flex sm:flex-row flex-col items-start sm:gap-8 gap-4">
              <div className="bg-primary/20 dark:bg-darklight w-14 h-14 flex items-center justify-center rounded-full">
                <i
                  className="bg-no-repeat bg-contain w-8 h-8 inline-block"
                  style={{
                    backgroundImage: `url(${getImgPath(
                      "/images/contact/Career.svg"
                    )})`,
                  }}
                ></i>
              </div>
              <div className="flex flex-col h-full justify-between">
                <div className="">
                  <span className="text-secondary dark:text-white text-xl font-bold">
                    Careers
                  </span>
                  <p className="text-SlateBlue font-normal text-xl max-w-334 pt-3 pb-7 dark:text-darktext">
                    Sit ac ipsum leo lorem magna nunc mattis maecenas non
                    vestibulum
                  </p>
                </div>
                <div>
                  <Link
                    href="#"
                    className="text-primary text-lg font-medium flex items-center gap-3 group hover:text-secondary dark:hover:text-white"
                  >
                    Send an application
                    <i
                      className="bg-no-repeat bg-contain inline-block w-6 h-4"
                      style={{
                        backgroundImage: `url(${getImgPath(
                          "/images/contact/arrow.svg"
                        )})`,
                      }}
                      onMouseEnter={(e) => {
                        const isDark =
                          document.documentElement.classList.contains("dark");
                        const hoverImage = isDark
                          ? getImgPath("/images/contact/arrow-hover-white.svg")
                          : getImgPath("/images/contact/arrow-hover.svg");
                        e.currentTarget.style.backgroundImage = `url(${hoverImage})`;
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundImage = `url(${getImgPath(
                          "/images/contact/arrow.svg"
                        )})`;
                      }}
                    ></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="md:pt-32 pt-11 md:pb-28 pb-8">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d938779.7831767448!2d71.05098621661072!3d23.20271516446136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e82dd003ff749%3A0x359e803f537cea25!2sGANESH%20GLORY%2C%20Gota%2C%20Ahmedabad%2C%20Gujarat%20382481!5e0!3m2!1sen!2sin!4v1715676641521!5m2!1sen!2sin"
              width="1114"
              height="477"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-lg w-full"
            ></iframe>
          </div>
        </div>
        <div className="border-b border-solid border-BorderLine dark:border-dark_border"></div>
      </section>
    </>
  );
};

export default ContactInfo;
