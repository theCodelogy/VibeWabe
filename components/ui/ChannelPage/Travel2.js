"use client";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";
// import required modules
import { EffectCube, Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";
//images
import documentary1 from "@/assets/channelImage/discovery.jpg";
import documentary2 from "@/assets/channelImage/ngc.webp";


import { TbPoint } from "react-icons/tb";
import { FcLike } from "react-icons/fc";
import { useTranslation } from "react-i18next";
import Link from "next/link";

const Travel2 = () => {
  const { t } = useTranslation();
  return (
    <div className="px-5 container mx-auto mt-20">
      <h3 className="text-white text-xl font-bold">
        Documentary
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5  mt-10">
        {/* first part */}

        <div className=" bg-zinc-700 rounded-md mb-3 ">
          <div className="bg-gradient-to-r from-red-600 to-zinc-600">
            <h2 className="mb-2 text-center text-white">Channel</h2>
          </div>
          <div className="bg-slate-800 grid grid-cols-3 gap-1 items-center justify-around py-1 text-slate-300">
          <Image
                className="w-[60px] mx-auto h-[60px]  rounded-xl transition duration-300  transform hover:scale-105"
                src={documentary1}
                alt="slice image"
              />
              <div>
              <h2 className="text-sm">Discovery Channel</h2>
              <h2 className="text-xs">Subscribers.200k</h2>
              </div>
              <div>
              <h2 className="inline-flex items-center justify-center text-xs"><FcLike />1.2k</h2>
              <Link href={`channel/documentary/id`}>
              <h2 className="text-xs underline text-blue-500 hover:text-red-600">Watch</h2>
              </Link>
              </div>

          </div>
          <div className="mt-2 bg-slate-800 grid grid-cols-3 gap-1 items-center justify-around py-1 text-slate-300">
          <Image
                className="w-[60px] mx-auto h-[60px]  rounded-xl transition duration-300  transform hover:scale-105"
                src={documentary2}
                alt="slice image"
              />
              <div>
              <h2 className="text-sm">National Geography</h2>
              <h2 className="text-xs">Subscribers.200k</h2>
              </div>
              <div>
              <h2 className="inline-flex items-center justify-center text-xs"><FcLike />1.2k</h2>
              <Link href={`channel/documentary/id`}>
              <h2 className="text-xs underline text-blue-500 hover:text-red-600">Watch</h2>
              </Link>
              </div>

          </div>
          <div className="mt-2 bg-slate-800 grid grid-cols-3 gap-1 items-center justify-around py-1 text-slate-300">
          <Image
                className="w-[60px] mx-auto h-[60px]  rounded-xl transition duration-300  transform hover:scale-105"
                src={documentary1}
                alt="slice image"
              />
              <div>
              <h2 className="text-sm">Discovery Channel</h2>
              <h2 className="text-xs">Subscribers.200k</h2>
              </div>
              <div>
              <h2 className="inline-flex items-center justify-center text-xs"><FcLike />1.2k</h2>
              <Link href={`channel/documentary/id`}>
              <h2 className="text-xs underline text-blue-500 hover:text-red-600">Watch</h2>
              </Link>
              </div>

          </div>
          <div className="mt-2 bg-slate-800 grid grid-cols-3 gap-1 items-center justify-around py-1 text-slate-300">
          <Image
                className="w-[60px] mx-auto h-[60px]  rounded-xl transition duration-300  transform hover:scale-105"
                src={documentary2}
                alt="slice image"
              />
              <div>
              <h2 className="text-sm">National Geography</h2>
              <h2 className="text-xs">Subscribers.200k</h2>
              </div>
              <div>
              <h2 className="inline-flex items-center justify-center text-xs"><FcLike />1.2k</h2>
              <Link href={`channel/documentary/id`}>
              <h2 className="text-xs underline text-blue-500 hover:text-red-600">Watch</h2>
              </Link>
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
              shadowOffset: 10,
              shadowScale: 0.94,
            }}
            pagination={true}
            modules={[EffectCube, Pagination, Autoplay]}
            autoplay={true}
            loop={true}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="w-3/5 mx-auto h-[150px] rounded-xl mb-2 transition duration-300  transform hover:scale-105">
              <iframe 
            width="100%" 
            height="100%" 
            src="https://www.youtube.com/embed/3J9NjHTS60w?si=WulnRsFKqxF9tT7K" title="YouTube video player" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            allowfullscreen></iframe>
              </div>
            
            </SwiperSlide>
            <SwiperSlide>
            <div className="w-3/5 mx-auto h-[150px] rounded-xl mb-2 transition duration-300  transform hover:scale-105">
              <iframe 
            width="100%" 
            height="100%" 
            src="https://www.youtube.com/embed/3J9NjHTS60w?si=WulnRsFKqxF9tT7K" title="YouTube video player" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            allowfullscreen></iframe>
              </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className="w-3/5 mx-auto h-[150px] rounded-xl mb-2 transition duration-300  transform hover:scale-105">
              <iframe 
            width="100%" 
            height="100%" 
            src="https://www.youtube.com/embed/3J9NjHTS60w?si=WulnRsFKqxF9tT7K" title="YouTube video player" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            allowfullscreen></iframe>
              </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className="w-3/5 mx-auto h-[150px] rounded-xl mb-2 transition duration-300  transform hover:scale-105">
              <iframe 
            width="100%" 
            height="100%" 
            src="https://www.youtube.com/embed/3J9NjHTS60w?si=WulnRsFKqxF9tT7K" title="YouTube video player" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            allowfullscreen></iframe>
              </div>
            </SwiperSlide>
          </Swiper>
          <div className="flex  justify-center items-center gap-3 mt-6">
          
            <p className="inline-flex items-center text-xs text-blue-400 ">
            
              <TbPoint className="text-white " />
              Award Winning{" "}
            </p>
            
            <h2 className="text-xs text-slate-300 hover:text-sky-400">Subscribers.200k</h2>
            <h2 className="inline-flex items-center justify-center text-xs text-slate-300"><FcLike />1.2k</h2>
           
          </div>
          <div className="w-5/6 mt-2 text-center mx-auto">
          <h2 className=" text-sm text-slate-300 hover:text-sky-400">Congos Extravagant Millionaires: The Crazy Lives of Africas Ultra-Rich | Documentary</h2>
          </div>
          <Link href={`channel/documentary/id`}>
          <div className="w-[150px] h-[100px] mx-auto">
          <button className=" flex mx-auto justify-center mt-4 text-xs rounded-lg px-3 py-2 bg-gradient-to-r from-red-600 to-zinc-600  text-slate-300 hover:text-white ">Watch</button> </div></Link>
        </div>
        {/* third part */}
        <div className=" bg-zinc-700 rounded-md mb-3 ">
          <div className="bg-gradient-to-r from-red-600 to-zinc-600">
            <h2 className="mb-2 text-center text-white">Channel</h2>
          </div>
          <div className="bg-slate-800 pl-9 grid grid-cols-3 gap-1 items-center justify-around py-1 text-slate-300 mx-auto ">
          
              
              <div className="">
              <h2 className="inline-flex items-center justify-center text-xs"><FcLike />1.2k</h2>
              <Link href={`channel/documentary/id`}>
              <h2 className="text-xs underline text-blue-500 hover:text-red-600">Watch</h2>
              </Link>
              </div>
              <div className="">
              <h2 className="text-sm">Discovery Channel</h2>
              <h2 className="text-xs">Subscribers.200k</h2>
              </div>
              <Image
                className="w-[60px] h-[60px]  rounded-xl transition duration-300  transform hover:scale-105"
                src={documentary1}
                alt="slice image"
              />

          </div>
          <div className=" mt-2 bg-slate-800 pl-9 grid grid-cols-3 gap-1 items-center justify-around py-1 text-slate-300 mx-auto">
          
              
          <div className="">
          <h2 className="inline-flex items-center justify-center text-xs"><FcLike />1.2k</h2>
          <Link href={`channel/documentary/id`}>
              <h2 className="text-xs underline text-blue-500 hover:text-red-600">Watch</h2>
              </Link>
          </div>
          <div className="">
          <h2 className="text-sm">National Geography</h2>
          <h2 className="text-xs">Subscribers.200k</h2>
          </div>
          <Image
            className="w-[60px] h-[60px]  rounded-xl transition duration-300  transform hover:scale-105"
            src={documentary2}
            alt="slice image"
          />

      </div>
          <div className=" mt-2 bg-slate-800 pl-9 grid grid-cols-3 gap-1 items-center justify-around py-1 text-slate-300 mx-auto">
          
              
          <div className="">
          <h2 className="inline-flex items-center justify-center text-xs"><FcLike />1.2k</h2>
          <Link href={`channel/documentary/id`}>
              <h2 className="text-xs underline text-blue-500 hover:text-red-600">Watch</h2>
              </Link>
          </div>
          <div className="">
          <h2 className="text-sm">Discovery Channel</h2>
          <h2 className="text-xs">Subscribers.200k</h2>
          </div>
          <Image
            className="w-[60px] h-[60px]  rounded-xl transition duration-300  transform hover:scale-105"
            src={documentary1}
            alt="slice image"
          />

      </div>
          <div className="mt-2 bg-slate-800 pl-9 grid grid-cols-3 gap-1 items-center justify-around py-1 text-slate-300 mx-auto">
          
              
          <div className="">
          <h2 className="inline-flex items-center justify-center text-xs"><FcLike />1.2k</h2>
          <Link href={`channel/documentary/id`}>
              <h2 className="text-xs underline text-blue-500 hover:text-red-600">Watch</h2>
              </Link>
          </div>
          <div className="">
          <h2 className="text-sm">National Geography</h2>
          <h2 className="text-xs">Subscribers.200k</h2>
          </div>
          <Image
            className="w-[60px] h-[60px]  rounded-xl transition duration-300  transform hover:scale-105"
            src={documentary2}
            alt="slice image"
          />

      </div>
        </div>
      </div>
    </div>
  );
};

export default Travel2;
