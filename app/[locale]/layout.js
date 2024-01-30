import { Inter } from "next/font/google";
import "../globals.css";
import AuthProvider from "@/utils/AuthProvider";
import { Toaster } from "react-hot-toast";
import GotoTop from "@/components/GotoTop/GotoTop"
import initTranslations from "../i18n";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Home",
  description: "Generated by create next app",
};

export default async function RootLayout({ children}) {
  
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
        <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
      </head>
      <body className={inter.className}>
        <AuthProvider>
          {children}
          <Toaster
            position="top-right"
            reverseOrder={false}
          />
          <GotoTop/>
        </AuthProvider>
      </body>
    </html>
  );
}