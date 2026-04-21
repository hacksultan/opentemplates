import { ColorConfiguration } from "./ColorConfiguraion";
import { LogoConfiguration } from "./LogoConfiguration";
import { TypographyConfiguration } from "./TypographyConfiguration";

export const Configuration = () => {
  return (
    <>
      <div className="pb-10 md:scroll-m-[130px] scroll-m-28" id="configuration">
        <h3 className=" text-black text-2xl font-semibold mt-4 dark:text-white">
          Project Configuration
        </h3>
        <ColorConfiguration />
        <TypographyConfiguration />
        <LogoConfiguration />
      </div>
    </>
  );
};
