"use client";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";
// import required modules
import { EffectCube, Pagination } from "swiper/modules";
import Image from "next/image";
//images
import travel1 from "@/assets/channelImage/t1.jpg";
import travel2 from "@/assets/channelImage/t2.webp";
import travel3 from "@/assets/channelImage/t3.jpg";

import { TbPoint } from "react-icons/tb";
import { FcLike } from "react-icons/fc";
import { useTranslation } from "react-i18next";

const Travel2 = () => {
  const { t } = useTranslation();
  return (
    <div className="px-5 container mx-auto mt-20">
      <h3 className="text-white text-xl font-bold">
        {t("channel:travelflash")}
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5  mt-10">
        {/* first part */}

        <div className=" bg-zinc-700 rounded-md mb-3 ">
          <div className="bg-gradient-to-r from-red-600 to-blue-500">
            <h2 className="mb-2 text-center text-white">Youtube Channel</h2>
          </div>
          <div className="bg-slate-800 grid grid-cols-3 items-center justify-around py-1 text-slate-300">
          <Image
                className="w-[60px] mx-auto h-[60px]  rounded-xl transition duration-300  transform hover:scale-105"
                src={travel1}
                alt="slice image"
              />
              <div>
              <h2 className="text-sm">Travel Man</h2>
              <h2 className="text-xs">Subscribers.200k</h2>
              </div>
              <div>
              <h2 className="inline-flex items-center justify-center text-xs"><FcLike />1.2k</h2>
              <h2 className="text-xs underline text-blue-500 hover:text-red-600">Watch</h2>
              </div>

          </div>
          <div className="mt-2 bg-slate-800 grid grid-cols-3 items-center justify-around py-1 text-slate-300">
          <Image
                className="w-[60px] mx-auto h-[60px]  rounded-xl transition duration-300  transform hover:scale-105"
                src={travel2}
                alt="slice image"
              />
              <div>
              <h2 className="text-sm">Travel Man</h2>
              <h2 className="text-xs">Subscribers.200k</h2>
              </div>
              <div>
              <h2 className="inline-flex items-center justify-center text-xs"><FcLike />1.2k</h2>
              <h2 className="text-xs underline text-blue-500 hover:text-red-600">Watch</h2>
              </div>

          </div>
          <div className="mt-2 bg-slate-800 grid grid-cols-3 items-center justify-around py-1 text-slate-300">
          <Image
                className="w-[60px] mx-auto h-[60px]  rounded-xl transition duration-300  transform hover:scale-105"
                src={travel3}
                alt="slice image"
              />
              <div>
              <h2 className="text-sm">Travel Man</h2>
              <h2 className="text-xs">Subscribers.200k</h2>
              </div>
              <div>
              <h2 className="inline-flex items-center justify-center text-xs"><FcLike />1.2k</h2>
              <h2 className="text-xs underline text-blue-500 hover:text-red-600">Watch</h2>
              </div>

          </div>
          <div className="mt-2 bg-slate-800 grid grid-cols-3 items-center justify-around py-1 text-slate-300">
          <Image
                className="w-[60px] mx-auto h-[60px]  rounded-xl transition duration-300  transform hover:scale-105"
                src={travel1}
                alt="slice image"
              />
              <div>
              <h2 className="text-sm">Travel Man</h2>
              <h2 className="text-xs">Subscribers.200k</h2>
              </div>
              <div>
              <h2 className="inline-flex items-center justify-center text-xs"><FcLike />1.2k</h2>
              <h2 className="text-xs underline text-blue-500 hover:text-red-600">Watch</h2>
              </div>

          </div>
        </div>
        {/*middle slider */}
        <div className="  lg:inline  ">
          <Swiper
            effect={"cube"}
            grabCursor={true}
            cubeEffect={{
              shadow: true,
              slideShadows: true,
              shadowOffset: 20,
              shadowScale: 0.94,
            }}
            pagination={true}
            modules={[EffectCube, Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <Image
                className="w-3/5 mx-auto h-[150px] rounded-lg mb-2 transition duration-300  transform hover:scale-105"
                src={travel1}
                alt="slice image"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                className="w-3/5 mx-auto h-[150px] rounded-lg mb-2 transition duration-300  transform hover:scale-105"
                src={travel2}
                alt="slice image"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                className="w-3/5 mx-auto h-[150px]  rounded-lg mb-2 transition duration-300  transform hover:scale-105"
                src={travel3}
                alt="slice image"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                className="w-3/5 mx-auto h-[150px]  rounded-lg mb-2 transition duration-300  transform hover:scale-105"
                src={travel1}
                alt="slice image"
              />
            </SwiperSlide>
          </Swiper>
          <div className="flex  justify-center items-center gap-3 mt-6">
          
            <p className="inline-flex items-center text-xs text-blue-400 ">
            
              <TbPoint className="text-white " />
              Travel{" "}
            </p>
            <h2 className=" text-sm text-slate-300 hover:text-sky-400">Travel Man</h2>
            <h2 className="text-xs text-slate-300 hover:text-sky-400">Subscribers.200k</h2>
            <h2 className="inline-flex items-center justify-center text-xs text-slate-300"><FcLike />1.2k</h2>
           
          </div>
          <div className="w-[150px] h-[100px] mx-auto">
          <button className=" flex mx-auto justify-center mt-4 text-xs rounded-lg px-3 py-2 bg-gradient-to-r from-red-600 to-blue-500  text-slate-300 hover:text-white ">Watch</button> </div>
        </div>
        {/* third part */}
        <div className=" bg-zinc-700 rounded-md mb-3 ">
          <div className="bg-gradient-to-r from-red-600 to-blue-500">
            <h2 className="mb-2 text-center text-white">Youtube Channel</h2>
          </div>
          <div className="bg-slate-800 pl-9 grid grid-cols-3 items-center justify-around py-1 text-slate-300 mx-auto">
          
              
              <div className="">
              <h2 className="inline-flex items-center justify-center text-xs"><FcLike />1.2k</h2>
              <h2 className="text-xs underline text-blue-500 hover:text-red-600">Watch</h2>
              </div>
              <div className="">
              <h2 className="text-sm">Travel Man</h2>
              <h2 className="text-xs">Subscribers.200k</h2>
              </div>
              <Image
                className="w-[60px] h-[60px]  rounded-xl transition duration-300  transform hover:scale-105"
                src={travel1}
                alt="slice image"
              />

          </div>
          <div className=" mt-2 bg-slate-800 pl-9 grid grid-cols-3 items-center justify-around py-1 text-slate-300 mx-auto">
          
              
          <div className="">
          <h2 className="inline-flex items-center justify-center text-xs"><FcLike />1.2k</h2>
          <h2 className="text-xs underline text-blue-500 hover:text-red-600">Watch</h2>
          </div>
          <div className="">
          <h2 className="text-sm">Travel Man</h2>
          <h2 className="text-xs">Subscribers.200k</h2>
          </div>
          <Image
            className="w-[60px] h-[60px]  rounded-xl transition duration-300  transform hover:scale-105"
            src={travel2}
            alt="slice image"
          />

      </div>
          <div className=" mt-2 bg-slate-800 pl-9 grid grid-cols-3 items-center justify-around py-1 text-slate-300 mx-auto">
          
              
          <div className="">
          <h2 className="inline-flex items-center justify-center text-xs"><FcLike />1.2k</h2>
          <h2 className="text-xs underline text-blue-500 hover:text-red-600">Watch</h2>
          </div>
          <div className="">
          <h2 className="text-sm">Travel Man</h2>
          <h2 className="text-xs">Subscribers.200k</h2>
          </div>
          <Image
            className="w-[60px] h-[60px]  rounded-xl transition duration-300  transform hover:scale-105"
            src={travel3}
            alt="slice image"
          />

      </div>
          <div className="mt-2 bg-slate-800 pl-9 grid grid-cols-3 items-center justify-around py-1 text-slate-300 mx-auto">
          
              
          <div className="">
          <h2 className="inline-flex items-center justify-center text-xs"><FcLike />1.2k</h2>
          <h2 className="text-xs underline text-blue-500 hover:text-red-600">Watch</h2>
          </div>
          <div className="">
          <h2 className="text-sm">Travel Man</h2>
          <h2 className="text-xs">Subscribers.200k</h2>
          </div>
          <Image
            className="w-[60px] h-[60px]  rounded-xl transition duration-300  transform hover:scale-105"
            src={travel1}
            alt="slice image"
          />

      </div>
        </div>
      </div>
    </div>
  );
};

export default Travel2;
