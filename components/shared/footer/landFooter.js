"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "@/public/VibeWabe.png";
import { useTranslation } from "react-i18next";
const LandPageFooter = () => {
  const {t} = useTranslation();
  return (
    <div className="bg-black text-[#fff]">
      <div className="container mx-auto px-8 py-4 md:py-12">
        <div className=" ">
          {/* logo part @ why or contact us  */}
          <div className="">
            <Link href="/">
              <Image className="w-28 md:w-40 mx-auto " src={logo} alt="logo" />
            </Link>
            <div className="flex justify-center gap-5 md:gap-40 text-center mt-4 mx-auto">
              <Link href="#">
                <h6 className="text-center hover:underline">{t("why")}</h6>
              </Link>
              <Link href="#">
                <h6 className="hover:underline text-center">{t("contact")}</h6>
              </Link>
            </div>
          </div>

          {/* Legal Part  */}
          <div className="flex justify-center flex-col md:flex-row md:gap-10 text-center mt-4 mx-auto">
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
        {/* copy right text  */}
        <h6 className="text-center mt-6 text-sm text-gray-300">
          {" "}
          © {new Date().getFullYear()} VibeWave Website . All right reserved by 
          <Link
            className="hover:underline"
            href="https://github.com/thecodelogy"
          >
            Team-Codelogy
          </Link>
        </h6>
      </div>
    </div>
  );
};

export default LandPageFooter;
