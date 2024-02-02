'use client';
import Image from "next/image";
import React from "react";
import recomanded1 from "@/assets/recomanded-1.jpg";
import Carousol from "@/components/shared/Carousol";
import { useTranslation } from "react-i18next";


const Recomanded = () => {
 const {t} = useTranslation();
  return (
    <div>
      <h1 className="text-2xl font-bold text-white py-3 border-b-2 border-white mb-6 ">
      {t("video:Recommended")}
      </h1>

      <div>
        <div>
          <Carousol />
        </div>
      </div>
    </div>
  );
};

export default Recomanded;
