"use client";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";

// import required modules
import { FreeMode, Navigation } from "swiper/modules";
import Image from "next/image";

// images

import call from "@/assets/Thrillers-movies/call.jpeg";
import pandora from "@/assets/Thrillers-movies/Pandora.jpeg";
import extinction from "@/assets/Thrillers-movies/Extinction.jpeg";
import theGrayMan from "@/assets/Thrillers-movies/theGrayMan.jpeg";
import nightIsLonely from "@/assets/Thrillers-movies/nightIsLonely.jpeg";
import TheGuilty from "@/assets/Thrillers-movies/TheGuilty.jpeg";
import Link from "next/link";

const Drama = () => {
  return (
    <div className="text-white container  mx-auto px-5 pb-12">
      <div className="relative group">
        <Link href="#">
          <h3 className="text-xl font-semibold mb-6 group-hover:text-red-500">
            Drama
          </h3>

          <button className="absolute top-0 left-32 hidden group-hover:inline-block px-4 py-2 text-white rounded-md transition-transform transform group-hover:translate-x-2 hover:underline">
            See All
          </button>
        </Link>
      </div>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        freeMode={true}
        loop={true}
        navigation={true}
        modules={[FreeMode, Navigation]}
        className="mySwiper  "
        breakpoints={{
          // For small device
          640: {
            slidesPerView: 1,
          },
          // For medium device
          768: {
            slidesPerView: 3,
          },
          // For larger screens
          1024: {
            slidesPerView: 4,
          },
        }}
      >
        <SwiperSlide>
          <Link href={"/video/id"}>
            <div className="relative group overflow-hidden">
              <Image
                className="w-[350px] md:w-[300px] h-[350px] md:h-full  transform transition-transform duration-300 group-hover:scale-110 rounded-xl"
                src={call}
                alt="Call Movie"
              />
            </div>
            <h5 className="text-center mt-1 text-lg font-semibold">Call</h5>
          </Link>
        </SwiperSlide>

        <SwiperSlide>
          <Link href={"/video/id"}>
            <div className="relative group overflow-hidden">
              <Image
                className="w-[350px] md:w-[300px] h-[350px] md:h-full  transform transition-transform duration-300 group-hover:scale-110 rounded-xl"
                src={theGrayMan}
                alt="The Gray Man Movie"
              />
            </div>
            <h5 className="text-center mt-1 text-lg font-semibold">
              The Gray Man
            </h5>
          </Link>
        </SwiperSlide>

        <SwiperSlide>
          <Link href={"/video/id"}>
            <div className="relative group overflow-hidden">
              <Image
                className="w-[350px] md:w-[300px] h-[350px] md:h-full  transform transition-transform duration-300 group-hover:scale-110 rounded-xl"
                src={TheGuilty}
                alt="the Guilty Movie"
              />
            </div>
            <h5 className="text-center mt-1 text-lg font-semibold">
              The Guilty
            </h5>
          </Link>
        </SwiperSlide>

        <SwiperSlide>
          <Link href={"/video/id"}>
            <div className="relative group overflow-hidden">
              <Image
                className="w-[350px] md:w-[300px] h-[350px] md:h-full  transform transition-transform duration-300 group-hover:scale-110 rounded-xl"
                src={pandora}
                alt="pandora Movie"
              />
            </div>
            <h5 className="text-center mt-1 text-lg font-semibold">Pandora</h5>
          </Link>
        </SwiperSlide>

        <SwiperSlide>
          <Link href={"/video/id"}>
            <div className="relative group overflow-hidden">
              <Image
                className="w-[350px] md:w-[300px] h-[350px] md:h-full  transform transition-transform duration-300 group-hover:scale-110 rounded-xl"
                src={extinction}
                alt="Extinction Movie"
              />
            </div>
            <h5 className="text-center mt-1 text-lg font-semibold">
              Extinction
            </h5>
          </Link>
        </SwiperSlide>

        <SwiperSlide>
          <Link href={"/video/id"}>
            <div className="relative group overflow-hidden">
              <Image
                className="w-[350px] md:w-[300px] h-[350px] md:h-full  transform transition-transform duration-300 group-hover:scale-110 rounded-xl"
                src={nightIsLonely}
                alt="Night Is Lonely Movie"
              />
            </div>
            <h5 className="text-center mt-1 text-lg font-semibold">
              Night Is Lonely
            </h5>
          </Link>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Drama;
