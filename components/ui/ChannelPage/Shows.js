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
import { useTranslation } from "react-i18next";
import Link from "next/link";
import { useEffect, useState } from 'react';
import axios from "axios";


const Shows = ({allShows}) => {
  const { t } = useTranslation();
  const [shows, setShows] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://vibewabe-server.vercel.app/channel"
      )
      .then((res) => {
        setShows(res?.data);
      });
  }, []);
  return (
    <div className="px-5 container mx-auto mt-20">
      <h2 className="text-white text-xl font-bold">
        {" "}
        {t("channel:latestshows")}
      </h2>
      <div className="mt-10 opacity-70">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          autoplay={{
            delay: 1000,
            disableOnInteraction:false,
          }}
          slidesPerView={3}
          spaceBetween={20}
          coverflowEffect={{
            rotate: 50,
            stretch: -100,
            depth: 500,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={true}
          breakpoints={{
            425: {
              slidesPerView: 1,
              depth: 100,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 2,
              depth: 100,
              spaceBetween: 10,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
          }}
          modules={[EffectCoverflow, Pagination]}
          className="mySwiper"
        >
          {
            allShows.slice(4, 12).map(show=>   <SwiperSlide key={show?._id}>
              <div className="group relative h-40 md:h-60 lg:h-60 w-full md:w-50 lg:w-50  mt-5 hover:opacity-100 transition-opacity duration-300 ">
                <Image
                  className="w-full h-full mb-2 transition duration-300 rounded-lg"
                  src={show?.thambnail}
                  fill={true}
                  alt="slice image"
                />
                <div className="absolute text-xl text-white -top-0 left-0 flex justify-center items-center h-60 w-full bg-black bg-opacity-55 opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-lg ">
                  <h2>TV Shows</h2>
                  <Link href={`channel/shows/${show?._id}`}>
                  <FaCirclePlay className="cursor-pointer ml-1"></FaCirclePlay>
                  </Link>
                  
                </div>
              </div>
            </SwiperSlide>)
          }
          {/* slide1 */}
          {/* <SwiperSlide>
            <div className="group relative h-40 md:h-60 lg:h-60 w-full md:w-50 lg:w-50  mt-5 hover:opacity-100 transition-opacity duration-300 ">
              <Image
                className="w-full h-full mb-2 transition duration-300 rounded-lg"
                src={shows1}
                alt="slice image"
              />
              <div className="absolute text-xl text-white -top-0 left-0 flex justify-center items-center h-60 w-full bg-black bg-opacity-55 opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-lg ">
                <h2>TV Shows</h2>
                <Link href={`channel/shows/id`}>
                <FaCirclePlay className="cursor-pointer ml-1"></FaCirclePlay>
                </Link>
                
              </div>
            </div>
          </SwiperSlide> */}
           {/* end of slide1 */}

            {/* slide2 */}
          {/* <SwiperSlide>
            <div className="group relative h-40 md:h-60 lg:h-60 w-full md:w-50 lg:w-50  mt-5">
              <Image
                className="w-full h-full mb-2 transition duration-300 rounded-lg"
                src={shows2}
                alt="slice image"
              />
              <div className="absolute text-xl text-white -top-0 left-0  flex justify-center items-center h-full w-full bg-black bg-opacity-55 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
                <h2>TV Shows</h2>
                <Link href={`channel/shows/id`}>
                <FaCirclePlay className="cursor-pointer ml-1"></FaCirclePlay>
                </Link>
              </div>
            </div>
          </SwiperSlide> */}
           {/* end of slide2 */}

            {/* slide3 */}
          {/* <SwiperSlide>
            <div className="group relative h-40 md:h-60 lg:h-60 w-full md:w-50 lg:w-50 mt-5 hover:opacity-100 transition-opacity duration-300">
              <Image
                className="w-full h-full mb-2 transition duration-300 rounded-lg"
                src={shows3}
                alt="slice image"
              />
              <div className="absolute text-xl text-white -top-0 left-0 flex justify-center items-center h-60 w-full bg-black bg-opacity-55 opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-lg ">
                <h2>TV Shows</h2>
                <Link href={`channel/shows/id`}>
                <FaCirclePlay className="cursor-pointer ml-1"></FaCirclePlay>
                </Link>
              </div>
            </div>
          </SwiperSlide> */}
           {/* end of slide3 */}

            {/* slide4 */}
          {/* <SwiperSlide>
            <div className="group relative h-40 md:h-60 lg:h-60 w-full md:w-50 lg:w-50  mt-5">
              <Image
                className="w-full h-full mb-2 transition duration-300 rounded-lg"
                src={shows2}
                alt="slice image"
              />
              <div className="absolute text-xl text-white -top-0 left-0  flex justify-center items-center h-full w-full bg-black bg-opacity-55 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
                <h2>TV Shows</h2>
                <Link href={`channel/shows/id`}>
                <FaCirclePlay className="cursor-pointer ml-1"></FaCirclePlay>
                </Link>
              </div>
            </div>
          </SwiperSlide> */}
           {/* end of slide4 */}

            {/* slide5 */}
          {/* <SwiperSlide>
            <div className="group relative h-40 md:h-60 lg:h-60 w-full md:w-50 lg:w-50 mt-5 hover:opacity-100 transition-opacity duration-300">
              <Image
                className="w-full h-full mb-2 transition duration-300 rounded-lg"
                src={shows1}
                alt="slice image"
              />
              <div className="absolute text-xl text-white -top-0 left-0 flex justify-center items-center h-60 w-full bg-black bg-opacity-55 opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-lg ">
                <h2>TV Shows</h2>
                <Link href={`channel/shows/id`}>
                <FaCirclePlay className="cursor-pointer ml-1"></FaCirclePlay>
                </Link>
              </div>
            </div>
          </SwiperSlide> */}
           {/* end of slide5 */}

            {/* slide6 */}
          {/* <SwiperSlide>
            <div className="group relative h-40 md:h-60 lg:h-60 w-full md:w-50 lg:w-50  mt-5">
              <Image
                className="w-full h-full mb-2 transition duration-300 rounded-lg"
                src={shows2}
                alt="slice image"
              />
              <div className="absolute text-xl text-white -top-0 left-0  flex justify-center items-center h-full w-full bg-black bg-opacity-55 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
                <h2>TV Shows</h2>
                <Link href={`channel/shows/id`}>
                <FaCirclePlay className="cursor-pointer ml-1"></FaCirclePlay>
                </Link>
              </div>
            </div>
          </SwiperSlide> */}
          {/* end of slide6 */}
        </Swiper>
      </div>
    </div>
  );
};

export default Shows;
