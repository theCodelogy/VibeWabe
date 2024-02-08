"use client";

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-flip";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { EffectFlip, Pagination, Navigation } from "swiper/modules";

import Image from "next/image";

//images
import banner from "@/assets/channelImage/s2.webp";
import pic1 from "@/assets/channelImage/s1.jpg";
import pic2 from "@/assets/channelImage/sports1.jpg";
import pic3 from "@/assets/channelImage/musicpic.jpg";
import pic4 from "@/assets/channelImage/t2.webp";

const ChannelBanner = () => {
  return (
   <div className="relative px-5 container mx-auto">
  {/* Banner Image */}
  <Image
    className="object-cover object-center w-full h-[500px] blur-sm  inset-0 bg-white opacity-70"
    src={banner}
    alt=""
  />

  {/* Text on top left */}
  <div className="absolute top-0 left-0 p-8 text-white mt-10 lg:mt-0 w-full mx-auto ">
    <h2 className="text-3xl md:text-5xl mb-4 font-bold text-center lg:text-left">Welcome to</h2>
    <h2 className="text-4xl md:text-6xl bg-gradient-to-r from-red-700 to-slate-300 text-transparent bg-clip-text font-bold whitespace-nowrap text-center lg:text-left">
      VibeWave Channel
    </h2>
  </div>

  {/* Swiper at the bottom right */}
  <div className="absolute bottom-0 right-0 p-8 w-full lg:w-4/12">
    <Swiper
      effect={"flip"}
      grabCursor={true}
      pagination={true}
      navigation={true}
      modules={[EffectFlip, Pagination, Navigation]}
      className="mySwiper   "
    >
      <SwiperSlide>
        <div className="relative">
          <Image className="w-full h-[200px]" src={pic1} alt="" />
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
            <h2 className="text-white text-2xl font-bold">Tv Shows</h2>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="relative">
          <Image className="w-full h-[200px]" src={pic2} alt="" />
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
            <h2 className="text-white text-2xl font-bold">Sports</h2>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="relative">
          <Image className="w-full h-[200px]" src={pic3} alt="" />
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
            <h2 className="text-white text-2xl font-bold">Radio Station</h2>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="relative">
          <Image className="w-full h-[200px]" src={pic4} alt="" />
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
            <h2 className="text-white text-2xl font-bold">Travel</h2>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="relative">
          <Image className="w-full h-[200px]" src={pic1} alt="" />
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
            <h2 className="text-white text-2xl font-bold">News</h2>
          </div>
        </div>
      </SwiperSlide>
     
    </Swiper>
  </div>
</div>

  

  );
};

export default ChannelBanner;
