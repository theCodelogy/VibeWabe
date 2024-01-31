"use client";
import Image from "next/image";
import logo from "@/public/VibeWabe.png";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import LanguageChanger from "@/components/LanguageChanger/LanguageChanger";
const Footer = () => {
  const {t} = useTranslation();
  return (
    <div className="bg-black text-[#fff]">
      <div className="container mx-auto px-8 py-4 md:py-12">
        <div className=" flex flex-col md:flex-row justify-between mx-auto">
          {/* logo part @ why or contact us  */}
          <div className="">
            <Link href="/">
              <Image className="w-40 mx-auto lg:-mt-5" src={logo} alt="logo" />
            </Link>
            <div className="flex flex-row md:flex-col gap-3">
              <Link href="#">
                <h6 className="md:my-6 text-center hover:underline">
                  {t("we")}
                </h6>
              </Link>
              <Link href="#">
                <h6 className="hover:underline text-center">{t("contact")}</h6>
              </Link>
            </div>
          </div>
          {/* Browse & Legal part combination  */}
          <div className="flex justify-between md:gap-80 mt-6 md:mt-0">
            {/* Browse Part  */}
            <div className="">
              <h2 className="text-xs md:text-lg  font-bold uppercase">
                {t("Browse")}
              </h2>
              <Link href="#">
                <h6 className="my-6 hover:underline text-center">{t("Movies")}</h6>
              </Link>
              <Link href="#">
                <h6 className="hover:underline text-center">Musics</h6>
              </Link>
            </div>
            {/* Legal Part  */}
            <div className="">
              <h2 className="text-xs md:text-lg text-center md:text-left font-bold uppercase">
                {t("Legal")}
              </h2>
              <Link href="#">
                <h6 className=" hover:underline mt-6 mb-1 md:mb-3">{t("FAQ")}</h6>
              </Link>
              <Link href="#">
                <h6 className=" hover:underline mb-1 md:mb-3">{t("agreements")}</h6>
              </Link>
              <Link href="#">
                <h6 className=" hover:underline mb-1 md:mb-3">
                {t("terms")}
                </h6>
              </Link>
              <Link href="#">
                <h6 className=" hover:underline mb-3">{t("privacy")}</h6>
              </Link>
            </div>
          </div>
          {/* select language part */}
          <div className="text-xs md:text-lg  font-bold uppercase">
            <h2 className="">{t("Select Language")}</h2>
            {/* <select className="border p-2 rounded-lg mt-6 bg-black text-sm w-full">
              <option selected>English</option>
              <option>Bengali</option>
              <option>Arabic</option>
            </select> */}
            <LanguageChanger></LanguageChanger>
          </div>
          
        </div>
        {/* copy right text  */}
        <h6 className="text-center mt-6 text-sm text-gray-300">
          {" "}
          © {new Date().getFullYear()} VibeWave Website . All right reversed by
          <Link
            className="hover:underline"
            href="https://github.com/thecodelogy"
          >
            {" "}
            Team-Codelogy
          </Link>
        </h6>
      </div>
    </div>
  );
};

export default Footer;
