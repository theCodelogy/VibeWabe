"use client";
import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";
import imageOne from "@/assets/Series-Image/wp7640384.webp";
import imageTwo from "@/assets/Series-Image/635895019246814711-panda2.webp";
import imageThree from "@/assets/Series-Image/avatar-3_xgXR5ks.webp";

const SeriesBanner = () => {
  return (
    <div>
      <div className="relative">
        <Carousel
          showThumbs={false}
          autoPlay={true}
          interval={5000} // set the interval in milliseconds (5 seconds)
          infiniteLoop={true}
          showStatus={false}
        >
          {/* slide One */}
          <div className="h-[600px] relative">
            <Image
              className="bg-cover w-full h-full"
              src={imageOne}
              alt=""
            />
            <div className="absolute inset-0 flex flex-col items-start justify-end bg-gradient-to-tl from-black via-transparent to-black p-8 opacity-100 transition-opacity duration-300">
              
            </div>
          </div>
          {/* end slide One */}

          {/* slide Two */}
          <div className="h-[600px] relative">
            <Image
              className="bg-cover w-full h-full"
              src={imageTwo}
              alt=""
            />
            <div className="absolute inset-0 flex flex-col items-start justify-end bg-gradient-to-tl from-black via-transparent to-black p-8 opacity-100 transition-opacity duration-300">
            
            </div>
          </div>
          {/* end slide Two */}

          {/* slide Three */}
          <div className="h-[600px] relative">
            <Image
              className="bg-cover w-full h-full"
              src={imageThree}
              alt=""
            />
            <div className="absolute inset-0 flex flex-col items-start justify-end bg-gradient-to-tl from-black via-transparent to-black p-8 opacity-100 transition-opacity duration-300">
            
            </div>
          </div>
          {/* end slide Three */}
        </Carousel>
      </div>
    </div>
  );
};

export default SeriesBanner;
