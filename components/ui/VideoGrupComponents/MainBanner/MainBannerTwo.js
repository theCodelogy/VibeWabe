'use client'
import React, { useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
// import required modules
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import imageOne from '@/assets/BannerImage/black-banner.png'
import imageTwo from '@/assets/BannerImage/wanda-banner.jpg'
import imageThree from '@/assets/BannerImage/transformer-banner.jpg'
import imageFour from '@/assets/BannerImage/bat-man.jpg'
import imageFive from '@/assets/BannerImage/captain-marvel.png'
import imageSix from '@/assets/BannerImage/transformer.jpg'
import Image from 'next/image';
const MainBannerTwo = () => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    return (
        <div>
            <Swiper
         loop={true}
         spaceBetween={10}
         navigation={true}
         thumbs={{ swiper: thumbsSwiper }}
         modules={[FreeMode, Navigation, Thumbs]}
         className="mySwiper2"
         autoplay={{ delay: 3000 }}
      >
        <SwiperSlide>
        <div
        
        >
          <div className="h-[600px]">
            <Image 
              className="object-cover object-center w-full h-full"
              src={imageOne}
              alt=''
             />
            <div className="absolute inset-0 flex flex-col items-start justify-end bg-gradient-to-tl from-black via-transparent to-black p-8  opacity-100 transition-opacity duration-300">




            <section>
    <div className="relative items-center w-full px-5 py-12 mx-auto md:px-12 lg:px-16 max-w-7xl lg:py-24">
      <div className="flex w-full mx-auto text-left">
        <div className="relative inline-flex items-center mx-auto align-middle">
          <div className="">
            <h1 data-aos='zoom-in-up' className="max-w-5xl text-4xl  leading-none tracking-tighter text-white md:text-5xl lg:text-6xl lg:max-w-7xl">
           JHON WICK <br className="hidden lg:block"/>
              
            </h1>
            <p className="text-[14px] md:text-xl  text-white my-5">Free and Premium themes, UI, templates and <br /> landing pages built with Tailwind CSS, HTML &amp; Next.js</p>
            <div className="w-full max-w-2xl gap-2 mx-auto mt-6">
              <div className="mt-3 rounded-lg sm:mt-0">
                <button className="inline-block w-auto min-w-[250px] px-6 py-4 text-white transition-all rounded-md shadow-xl sm:w-auto bg-gradient-to-r from-red-600 to-orange-500  hover:bg-gradient-to-b dark:shadow-indigo-900  hover:shadow-2xl hover:shadow-orange-400 hover:-translate-y-px">Watch Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>



            </div>
          </div>
        </div>

        </SwiperSlide>


        <SwiperSlide>
        <div
        
        >
          <div className="h-[600px]">
            <Image 
              className="object-cover object-center w-full h-full"
              src={imageTwo}
              alt=''
             />
            <div className="absolute inset-0 flex flex-col items-start justify-end bg-gradient-to-tl from-black via-transparent to-black p-8  opacity-100 transition-opacity duration-300">




            <section>
    <div className="relative items-center w-full px-5 py-12 mx-auto md:px-12 lg:px-16 max-w-7xl lg:py-24">
      <div className="flex w-full mx-auto text-left">
        <div className="relative inline-flex items-center mx-auto align-middle">
          <div className="">
            <h1 data-aos='zoom-in-up' className="max-w-5xl text-4xl  leading-none tracking-tighter text-white md:text-5xl lg:text-6xl lg:max-w-7xl">
           JHON WICK <br className="hidden lg:block"/>
              
            </h1>
            <p className="text-[14px] md:text-xl  text-white my-5">Free and Premium themes, UI, templates and <br /> landing pages built with Tailwind CSS, HTML &amp; Next.js</p>
            <div className="w-full max-w-2xl gap-2 mx-auto mt-6">
              <div className="mt-3 rounded-lg sm:mt-0">
                <button className="inline-block w-auto min-w-[250px] px-6 py-4 text-white transition-all rounded-md shadow-xl sm:w-auto bg-gradient-to-r from-red-600 to-orange-500  hover:bg-gradient-to-b dark:shadow-indigo-900  hover:shadow-2xl hover:shadow-orange-400 hover:-translate-y-px">Watch Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>



            </div>
          </div>
        </div>

        </SwiperSlide>



        <SwiperSlide>
        <div
        
        >
          <div className="h-[600px]">
            <Image 
              className="object-cover object-center w-full h-full"
              src={imageThree}
              alt=''
             />
            <div className="absolute inset-0 flex flex-col items-start justify-end bg-gradient-to-tl from-black via-transparent to-black p-8  opacity-100 transition-opacity duration-300">




            <section>
    <div className="relative items-center w-full px-5 py-12 mx-auto md:px-12 lg:px-16 max-w-7xl lg:py-24">
      <div className="flex w-full mx-auto text-left">
        <div className="relative inline-flex items-center mx-auto align-middle">
          <div className="">
            <h1 data-aos='zoom-in-up' className="max-w-5xl text-4xl  leading-none tracking-tighter text-white md:text-5xl lg:text-6xl lg:max-w-7xl">
           JHON WICK <br className="hidden lg:block"/>
              
            </h1>
            <p className="text-[14px] md:text-xl  text-white my-5">Free and Premium themes, UI, templates and <br /> landing pages built with Tailwind CSS, HTML &amp; Next.js</p>
            <div className="w-full max-w-2xl gap-2 mx-auto mt-6">
              <div className="mt-3 rounded-lg sm:mt-0">
                <button className="inline-block w-auto min-w-[250px] px-6 py-4 text-white transition-all rounded-md shadow-xl sm:w-auto bg-gradient-to-r from-red-600 to-orange-500  hover:bg-gradient-to-b dark:shadow-indigo-900  hover:shadow-2xl hover:shadow-orange-400 hover:-translate-y-px">Watch Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>



            </div>
          </div>
        </div>

        </SwiperSlide>

       
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        <SwiperSlide>
        <div>
              <div className="relative group overflow-hidden">
                <Image
                  className="w-[350px] md:w-[300px] h-[350px] transform transition-transform duration-300 group-hover:scale-110 rounded-xl"
                  src={imageFour}
                  priority={true}
                />
              </div>
              <h5 className="text-center mt-1 text-lg font-semibold">
               
              </h5>
            </div>
        </SwiperSlide>


        <SwiperSlide>
        <div>
              <div className="relative group overflow-hidden">
                <Image
                  className="w-[350px] md:w-[300px] h-[350px] transform transition-transform duration-300 group-hover:scale-110 rounded-xl"
                  src={imageFive}
                  priority={true}
                />
              </div>
              <h5 className="text-center mt-1 text-lg font-semibold">
               
              </h5>
            </div>
        </SwiperSlide>


        <SwiperSlide>
        <div>
              <div className="relative group overflow-hidden">
                <Image
                  className="w-[350px] md:w-[300px] h-[350px] transform transition-transform duration-300 group-hover:scale-110 rounded-xl"
                  src={imageSix}
                  priority={true}
                />
              </div>
              <h5 className="text-center mt-1 text-lg font-semibold">
               
              </h5>
            </div>
        </SwiperSlide>

        
    
      </Swiper>
        </div>
    );
};

export default MainBannerTwo;