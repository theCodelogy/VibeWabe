"use client";
import { FaPauseCircle } from "react-icons/fa";
import { FaCirclePlay } from "react-icons/fa6";
import Image from "next/image";
import { useState } from "react";
import music1 from "../../assets/music/music1.webp";
import music2 from "../../assets/music/music2.webp";
import music3 from "../../assets/music/music3.webp";
import music4 from "../../assets/music/music4.webp";
import music5 from "../../assets/music/music5.webp";
import music6 from "../../assets/music/music5.webp";

const images = [music1, music2, music3, music4, music5,music6];

const FirstMusicTypes = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [clickOnPlay, setClickOnPlay] = useState(false);

  return (
    <div className="text-center my-10 max-w-screen-xl mx-auto md:px-16 lg:px-24 py-5 ml-6  md:ml-4 lg:ml-20">
      <h2 className="md:text-4xl text-xl font-semibold text-gray-100">
        Real music real impact.
      </h2>
      <p className="text-gray-300 font-semibold md:text-[15px] my-5 text-xs max-w-[60ch] mx-auto">
        We work with leading music creators from around the world to bring you
        exclusive, authentic new tracks on a daily basis.
      </p>
      <div className="grid md:grid-cols-3 grid-cols-2 items-center gap-5 justify-center">
        {images.map((imgSrc, index) => (
          <div
            key={index}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            className="md:h-[200px] h-[150px] w-[150px] md:w-[200px] relative rounded-lg transition-all duration-150 overflow-hidden"
          >
            {hoveredIndex === index && (
              <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30 rounded-lg" />
            )}
            {hoveredIndex === index &&
              (clickOnPlay ? (
                <FaPauseCircle
                  onClick={() => setClickOnPlay(!clickOnPlay)}
                  className="text-5xl text-gray-100 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer"
                />
              ) : (
                <FaCirclePlay
                  onClick={() => setClickOnPlay(!clickOnPlay)}
                  className="text-5xl text-gray-100 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer"
                />
              ))}
            <Image
              src={imgSrc}
              alt={`banner-${index}`}
              className="object-cover object-center w-full h-full rounded-lg"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FirstMusicTypes;
