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
import { MdAllInbox } from "react-icons/md";

const Travel2 = ({allDocumentary}) => {
  const { t } = useTranslation();
  return (
    <div className="px-5 container mx-auto mt-20">
      <h3 className="text-white text-xl font-bold">
      {t("channel:documentary")}
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5  mt-10">
        {/* first part */}

        <div className=" bg-zinc-700 rounded-md mb-3 ">
          <div className="bg-gradient-to-r from-red-600 to-zinc-600">
            <h2 className="mb-2 text-center text-white">Channel</h2>
          </div>
          {
            allDocumentary.slice(0, 4).map(data =>  <div key={data?._id} className="bg-slate-800 grid grid-cols-3 gap-1 items-center justify-around py-1 text-slate-300 mb-4">
              <div className="relative w-[60px] h-[60px]">
            <Image
                  className="w-full mx-auto h-full  rounded-xl transition duration-300  transform hover:scale-105"
                  src={data?.thambnail}
                  fill={true}
                  
                  alt="slice image"
                />
                </div>
                <div>
                <h2 className="text-sm">{data?.title.slice(0, 10)}</h2>
                <h2 className="text-xs">{data?.date}</h2>
                </div>
                <div>
                <h2 className="inline-flex items-center justify-center text-xs"><FcLike />{data?.view}</h2>
                <Link href={`channel/documentary/${data?._id}`}>
                <h2 className="text-xs underline text-blue-500 hover:text-red-600">Watch</h2>
                </Link>
                </div>
  
            </div>)
          }
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
            {
              allDocumentary.slice(0, 4).map(data => <SwiperSlide key={data?._id}>
                <div className="w-3/5 mx-auto h-[150px] rounded-xl mb-2 transition duration-300  transform hover:scale-105">
                <iframe 
              width="100%" 
              height="100%" 
              src={data?.url} 
              title="YouTube video player" 
              frameborder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              allowfullscreen></iframe>
                </div>
              
              </SwiperSlide>)
            }
          </Swiper>
          {
              allDocumentary.slice(0, 1).map(data => <div key={data?._id} className="flex  justify-center items-center gap-3 mt-6">
          
              <p className="inline-flex items-center text-xs text-blue-400 ">
              
                <TbPoint className="text-white " />
                Award Winning{" "}
              </p>
              
              <h2 className="text-xs text-slate-300 hover:text-sky-400">Subscribers.200k</h2>
              <h2 className="inline-flex items-center justify-center text-xs text-slate-300"><FcLike />{data?.view}</h2>
             
            </div>)
          }
          {
            allDocumentary.slice(0, 1).map(data =>  <div key={data?._id} className="w-5/6 mt-2 text-center mx-auto">
            <h2 className=" text-sm text-slate-300 hover:text-sky-400">{data?.description}</h2>
            </div>)
          }
          {/* <Link href={`channel/documentary/id`}>
          <div className="w-[150px] h-[100px] mx-auto">
          <button className=" flex mx-auto justify-center mt-4 text-xs rounded-lg px-3 py-2 bg-gradient-to-r from-red-600 to-zinc-600  text-slate-300 hover:text-white ">Documentary</button> </div></Link> */}
        </div>
        {/* third part */}
        <div className=" bg-zinc-700 rounded-md mb-3 ">
          <div className="bg-gradient-to-r from-red-600 to-zinc-600">
            <h2 className="mb-2 text-center text-white">Channel</h2>
          </div>
          {
            allDocumentary.slice(5, 9).map(data => <div key={data?._id} className="bg-slate-800 pl-9 grid grid-cols-3 gap-1 items-center justify-around py-1 text-slate-300 mx-auto mb-4">
          
              
            <div className="">
            <h2 className="inline-flex items-center justify-center text-xs"><FcLike />{data?.view}</h2>
            <Link href={`channel/documentary/${data?._id}`}>
            <h2 className="text-xs underline text-blue-500 hover:text-red-600">Watch</h2>
            </Link>
            </div>
            <div className="">
            <h2 className="text-sm">{data?.title.slice(0, 10)}</h2>
            <h2 className="text-xs">{data?.date}</h2>
            </div>
            <div className="relative w-[60px] h-[60px]">
            <Image
              className="w-full h-full  rounded-xl transition duration-300  transform hover:scale-105"
              src={data?.thambnail}
              fill={true}
              alt="slice image"
            />
            </div>
          

        </div>)
          }
        </div>
      </div>
    </div>
  );
};

export default Travel2;
