"use client";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
// import required modules
import { EffectCoverflow, Pagination } from "swiper/modules";
import Image from "next/image";
//images
import shows1 from "@/assets/channelImage/s1.jpg";
import shows2 from "@/assets/channelImage/s2.webp";
import shows3 from "@/assets/channelImage/s3.webp";
import { FaCirclePlay } from "react-icons/fa6";
import { useTranslation } from 'react-i18next';

const Shows = () => {
  const {t} = useTranslation();
  return (
    <div className="px-5 container mx-auto mt-20">
      <h2 className="text-white text-xl font-bold"> {t("channel:latestshows")}</h2>
      <div className="mt-10">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={5}
          spaceBetween={30}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 3,
            slideShadows: true,
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="group relative lg:h-60 md:h-60 h-40 lg:w-40 md:w-60 mt-5 hover:opacity-100 transition-opacity duration-300">
              <Image
                className="w-full h-full mb-2 transition duration-300 rounded-lg"
                src={shows1}
                alt="slice image"
              />
              <div className="absolute text-xl text-white -top-0 left-0 flex justify-center items-center h-60 w-40 bg-black bg-opacity-55 opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-lg ">
                <h2>TV Shows</h2>
                <FaCirclePlay className="cursor-pointer ml-1"></FaCirclePlay>
               
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className="group relative lg:h-60 md:h-60 h-40 lg:w-40 md:w-60  mt-5">
              <Image
                className="w-full h-full mb-2 transition duration-300 rounded-lg"
                src={shows2}
                alt="slice image"
              />
              <div className="absolute text-xl text-white -top-0 left-0  flex justify-center items-center h-full w-full bg-black bg-opacity-55 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
                <h2>TV Shows</h2>
                <FaCirclePlay className="cursor-pointer ml-1"></FaCirclePlay>
               
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className="group relative lg:h-60 md:h-60 h-40 lg:w-40 md:w-60 mt-5 hover:opacity-100 transition-opacity duration-300">
              <Image
                className="w-full h-full mb-2 transition duration-300 rounded-lg"
                src={shows3}
                alt="slice image"
              />
              <div className="absolute text-xl text-white -top-0 left-0 flex justify-center items-center h-60 w-40 bg-black bg-opacity-55 opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-lg ">
                <h2>TV Shows</h2>
                <FaCirclePlay className="cursor-pointer ml-1"></FaCirclePlay>
               
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className="group relative lg:h-60 md:h-60 h-40 lg:w-40 md:w-60  mt-5">
              <Image
                className="w-full h-full mb-2 transition duration-300 rounded-lg"
                src={shows2}
                alt="slice image"
              />
              <div className="absolute text-xl text-white -top-0 left-0  flex justify-center items-center h-full w-full bg-black bg-opacity-55 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
                <h2>TV Shows</h2>
                <FaCirclePlay className="cursor-pointer ml-1"></FaCirclePlay>
               
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="group relative lg:h-60 md:h-60 h-40 lg:w-40 md:w-60 mt-5 hover:opacity-100 transition-opacity duration-300">
              <Image
                className="w-full h-full mb-2 transition duration-300 rounded-lg"
                src={shows1}
                alt="slice image"
              />
              <div className="absolute text-xl text-white -top-0 left-0 flex justify-center items-center h-60 w-40 bg-black bg-opacity-55 opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-lg ">
                <h2>TV Shows</h2>
                <FaCirclePlay className="cursor-pointer ml-1"></FaCirclePlay>
               
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className="group relative lg:h-60 md:h-60 h-40 lg:w-40 md:w-60  mt-5">
              <Image
                className="w-full h-full mb-2 transition duration-300 rounded-lg"
                src={shows2}
                alt="slice image"
              />
              <div className="absolute text-xl text-white -top-0 left-0  flex justify-center items-center h-full w-full bg-black bg-opacity-55 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
                <h2>TV Shows</h2>
                <FaCirclePlay className="cursor-pointer ml-1"></FaCirclePlay>
               
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Shows;
