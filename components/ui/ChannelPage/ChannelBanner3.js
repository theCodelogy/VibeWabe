'use client'
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-flip";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";
// import required modules
import { EffectFlip, Pagination, Navigation, Autoplay } from "swiper/modules";

import Image from 'next/image';
//images
import banner1 from '@/assets/channelImage/b1.jpg';
import banner2 from '@/assets/channelImage/b2.jpg';
import banner3 from '@/assets/channelImage/b3.jpg';
//framer motion
import { motion, AnimatePresence, template, delay  } from "framer-motion";

const ChannelBanner3 = () => {
    return (
      <AnimatePresence>
        <motion.div
          
        className=" px-5 container mx-auto">
        {/* Banner Image */}
        <div className="relative">
        <Swiper 
         modules={[Pagination, Autoplay]} 
        pagination={true} 
        autoplay={{delay: 3000}}   
        loop={true}
       
        className="mySwiper">
        <SwiperSlide>
        
        <div className="relative">
           
                <Image className="object-cover object-center w-full h-[500px]" src={banner3} alt="" />
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <motion.div
                 animate={{ rotate: 360 }}
                 transition={{ delay: 0.5 }}
                 className='absolute top-1/2 transform -translate-y-1/2 left-10 p-8 mb-1'>
                <div className="bg-gradient-to-r from-red-600 to-orange-500 w-4/12 lg:w-2/12 py-1 mb-4 text-center text-white"><h2>Channel</h2></div>
        <h2 className='text-white text-3xl lg:text-5xl font-bold leading-1'>Welcome To <br/> <span className='bg-gradient-to-r from-red-600 to-orange-500 text-transparent bg-clip-text'>VibeWave</span> Channel</h2>
        <p className='text-white mt-4 text-sm ml-2'>News|Documentary|Podcast|Radio|TV Shows</p>
    </motion.div>
              </div>
        </SwiperSlide>
        <SwiperSlide>
        
        <div className="relative">
           
                <Image className="object-cover object-center w-full h-[500px]" src={banner2} alt="" />
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <motion.div
                  animate={{ y: -200 }}
                  transition={{ delay: 4}}
                 className='absolute top-1/2 transform -translate-y-1/2 left-10 p-8 mb-1'>
                <div className="bg-gradient-to-r from-red-600 to-orange-500 w-4/12 lg:w-2/12 py-1 mb-4 text-center text-white"><h2>Channel</h2></div>
        <h2 className='text-white text-3xl lg:text-5xl font-bold leading-1'>Welcome To <br/> <span className='bg-gradient-to-r from-red-600 to-orange-500 text-transparent bg-clip-text'>VibeWave</span> Channel</h2>
        <p className='text-white mt-4 text-sm ml-2'>News|Documentary|Podcast|Radio|TV Shows</p>
    </motion.div>
              </div>
        </SwiperSlide>
        <SwiperSlide>
        
        <div className="relative">
           
                <Image className="object-cover object-center w-full h-[500px]" src={banner1} alt="" />
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <motion.div 
                 animate={{ rotate: 360 }}
                 transition={{ delay: 7 }}
                className='absolute top-1/2 transform -translate-y-1/2 left-10 p-8 mb-1'>
                <div className="bg-gradient-to-r from-red-600 to-orange-500 w-4/12 w-2/12 py-1 mb-4 text-center text-white"><h2>Channel</h2></div>
        <h2 className='text-white text-3xl lg:text-5xl font-bold leading-1'>Welcome To <br/> <span className='bg-gradient-to-r from-red-600 to-orange-500 text-transparent bg-clip-text'>VibeWave</span> Channel</h2>
        <p className='text-white mt-4 text-sm ml-2'>News|Documentary|Podcast|Radio|TV Shows</p>
    </motion.div>
              </div>
        </SwiperSlide>
        
      </Swiper>
          </div>
      
        {/* Text on top left */}
        {/* <div className="absolute top-1/2 transform -translate-y-1/2 left-0 p-8 ">
          <h2 className="text-3xl md:text-5xl mb-4 font-bold text-center lg:text-left">Welcome to</h2>
          <h2 className="text-4xl md:text-6xl bg-gradient-to-r from-red-700 to-slate-300 text-transparent bg-clip-text font-bold whitespace-nowrap text-center lg:text-left">
            VibeWave Channel
          </h2>
        </div> */}
      
        {/* Swiper at the bottom right */}
        {/* <div className="absolute bottom-0 right-0 p-8 w-full lg:w-4/12">
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
                <Image className="object-cover object-center w-full h-[500px]" src={banner1} alt="" />
                <div className="absolute inset-0 bg-black opacity-50"></div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="relative">
                <Image className="object-cover object-center w-full h-[500px]" src={banner1} alt="" />
                <div className="absolute inset-0 bg-black opacity-50"></div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="relative">
                <Image className="object-cover object-center w-full h-[500px]" src={banner1} alt="" />
                <div className="absolute inset-0 bg-black opacity-50"></div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="relative">
                <Image className="object-cover object-center w-full h-[500px]" src={banner1} alt="" />
                <div className="absolute inset-0 bg-black opacity-50"></div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="relative">
                <Image className="object-cover object-center w-full h-[500px]" src={banner1} alt="" />
                <div className="absolute inset-0 bg-black opacity-50"></div>
              </div>
            </SwiperSlide>
           
          </Swiper>
        </div> */}
        </motion.div>
   
      </AnimatePresence>

    //second
    


   

    );
};

export default ChannelBanner3;