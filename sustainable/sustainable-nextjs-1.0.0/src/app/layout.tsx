import Footer from "@/components/Layout/Footer";
import Header from "@/components/Layout/Header";
import SessionProviderComp from "@/components/nextauth/SessionProvider";
import ScrollToTop from "@/components/ScrollToTop";
import Aoscompo from "@/utils/aos";
import { getImgPath } from "@/utils/imagePath";
import { ThemeProvider } from "next-themes";
import { DM_Sans } from "next/font/google";
import NextTopLoader from "nextjs-toploader";
import { AuthDialogProvider } from "./context/AuthDialogContext";
import "./globals.css";
const dmsans = DM_Sans({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const dropdownIcon = getImgPath("/images/contact/dropdown.svg");

  return (
    <html
      lang="en"
      suppressHydrationWarning
      style={
        { "--dropdown-icon": `url(${dropdownIcon})` } as React.CSSProperties
      }
    >
      <body className={dmsans.className}>
        <AuthDialogProvider>
          <SessionProviderComp session={null}>
            <ThemeProvider
              attribute="class"
              enableSystem={true}
              defaultTheme="system"
            >
              <Aoscompo>
                <Header />
                <NextTopLoader color="#f9c78f" />
                {children}
                <Footer />
              </Aoscompo>
              <ScrollToTop />
            </ThemeProvider>
          </SessionProviderComp>
        </AuthDialogProvider>
      </body>
    </html>
  );
}
