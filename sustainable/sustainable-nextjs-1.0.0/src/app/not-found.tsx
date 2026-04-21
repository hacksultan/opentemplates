import HeroSub from "@/components/SharedComponent/HeroSub";
import NotFound from "../../NotFound";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "404 Page | Sustainable ",
};

const ErrorPage = () => {
  const breadcrumbLinks = [
    { href: "/", text: "Home" },
    { href: "/contact", text: "404" },
  ];
  return (
    <>
      <HeroSub
        title="404"
        description="We Can't Seem to Find The Page You're Looking For."
        
      />
      <NotFound />
    </>
  );
};

export default ErrorPage;
