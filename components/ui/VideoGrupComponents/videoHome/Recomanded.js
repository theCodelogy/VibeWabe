import Image from "next/image";
import React from "react";
import recomanded1 from "@/assets/recomanded-1.jpg";
import Carousol from "@/components/shared/Carousol";

const Recomanded = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold text-white py-3 border-b-2 border-white mb-6 ">
        Recommended Movies
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
