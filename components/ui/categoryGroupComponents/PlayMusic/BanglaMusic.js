// 'use client'

// // Import Swiper React components
// import { Swiper, SwiperSlide } from 'swiper/react';

// // Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/effect-coverflow';
// import 'swiper/css/pagination';

// // import required modules
// import { EffectCoverflow, Pagination } from 'swiper/modules';
// import Image from 'next/image';
// import Link from 'next/link';
// import { IoIosMusicalNotes } from 'react-icons/io';

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
import { useTranslation } from "react-i18next";
import { IoIosMusicalNotes } from 'react-icons/io';
import Link from "next/link";


const BanglaMusic = ({allMusics, category}) => {
    return (
        <div>
            <div className="px-5 container mx-auto mt-20 mb-28">
            <div className="py-3 group relative flex justify-start items-center">
          <h2 className="text-xl font-semibold text-white group-hover:text-orange-500">
          Remix Music List 
          </h2>
          <div>
          <Link
              href={`/music/allMusic/${category}`}
              className="hidden group-hover:inline-block px-2 py-1 text-white rounded-md transition-transform transform group-hover:translate-x-2 hover:underline"
          >
              See All
          </Link>
          </div>
      </div>
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
          {/* slide1 */}
          {
                    allMusics.map(music => <SwiperSlide key={music?._id}>
                        <Link href={`/music/${music?._id}`}>
            <div className="group relative h-40 md:h-60 lg:h-60 w-full md:w-50 lg:w-50  mt-5 hover:opacity-100 transition-opacity duration-300 ">
              <Image
                className="w-full h-full mb-2 transition duration-300 rounded-lg"
                src={music?.thambnail} height={100} width={100}
                alt="slice image"
              />
              <div className="absolute text-3xl text-white -top-0 left-0 flex justify-center items-center h-60 w-full bg-black bg-opacity-55 opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-lg ">
                {/* <h2>TV Shows</h2> */}
                <IoIosMusicalNotes className="cursor-pointer ml-1"></IoIosMusicalNotes>
                
              </div>
            </div>
            </Link>
                </SwiperSlide>)
                    }
           {/* end of slide1 */}
        </Swiper>
      </div>
    </div>
    {/* <CgLoadbarSound />           */}
             {/* <div className="container mx-auto my-20 lg:px-5">
                <h1 className='text-white text-xl font-bold lg:px-5 mb-8'>Trending Remix Music</h1>
                <div>
                <Swiper
                    effect={'coverflow'}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={4}
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
                    {
                    allMusics.map(music => <SwiperSlide key={music?._id}>
                        <Link href={`/music/${music?._id}`}>
                            <div className='group relative lg:h-80 md:h-60 h-40 lg:w-64 md:w-60 w-full mt-5'>
                                <Image className='w-full h-full mb-2 transition duration-300' src={music?.thambnail} width={100} height={100} alt='slice image'/>
                                <div className='absolute text-3xl text-white -top-0 left-0  flex justify-center items-center h-full w-full bg-black bg-opacity-55 opacity-0 group-hover:opacity-100 transition-opacity duration-300 '>
                                <IoIosMusicalNotes className='cursor-pointer'></IoIosMusicalNotes>
                                </div>
                            </div>
                        </Link>
                    </SwiperSlide>)
                    }
                </Swiper>
               </div>
           </div> */}
        </div>
    );
};

export default BanglaMusic;