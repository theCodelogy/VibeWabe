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

const images = [music1, music2, music3, music4, music5];

const FirstMusicTypes = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [clickOnPlay, setClickOnPlay] = useState(false);

  return (
    <div className="text-center">
      <h2 className="text-5xl font-semibold text-gray-100">
        Real music, real impact.
      </h2>
      <p className="text-gray-300 font-semibold text-xl max-w-[60ch] mx-auto">
        We work with leading music creators from around the world to bring you
        exclusive, authentic new tracks on a daily basis.
      </p>
      <div className="flex gap-5 justify-center">
        {images.map((imgSrc, index) => (
          <div
            key={index}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            className="h-[200px] w-[200px] relative rounded-lg transition-all duration-150 overflow-hidden"
          >
            {hoveredIndex === index && (
              <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30 rounded-lg" />
            )}
            {hoveredIndex === index && (
              clickOnPlay ? (
                <FaPauseCircle
                  onClick={() => setClickOnPlay(!clickOnPlay)}
                  className="text-5xl text-gray-100 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer"
                />
              ) : (
                <FaCirclePlay
                  onClick={() => setClickOnPlay(!clickOnPlay)}
                  className="text-5xl text-gray-100 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer"
                />
              )
            )}
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
