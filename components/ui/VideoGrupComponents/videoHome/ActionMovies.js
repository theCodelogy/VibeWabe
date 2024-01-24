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

import theKiller from "@/assets/Action-movies/theKiller.jpg";
import salaar from "@/assets/Action-movies/salaar.jpg";
import theHungerGames from "@/assets/Action-movies/theHungerGames.jpg";
import animal from "@/assets/Action-movies/animal.jpg";
import theCreator from "@/assets/Action-movies/theCreator.jpg";
import Link from "next/link";
const ActionMovies = () => {
  return (
    <div className="text-white container  mx-auto px-5  ">
      <div className="relative group">
        <Link href="#">
          <h3 className="text-xl font-semibold mb-6 group-hover:text-red-500">
            Actions{" "}
          </h3>

          <button className="absolute top-0 left-20 hidden group-hover:inline-block px-4 py-2 text-white rounded-md transition-transform transform group-hover:translate-x-2 hover:underline">
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
                className="w-[350px] md:w-[300px] h-[350px] md:h-full  rounded-xl transform transition-transform duration-300 group-hover:scale-110 "
                src={theCreator}
                alt="the Creator Movie"
              />
            </div>
            <h5 className="text-center mt-1 text-lg font-semibold">
              The Creator
            </h5>
          </Link>
        </SwiperSlide>

        <SwiperSlide>
        <Link href={"/video/id"}>
          <div className="relative group overflow-hidden">
            <Image
              className="w-[350px] md:w-[300px] h-[350px] md:h-full  rounded-xl transform transition-transform duration-300 group-hover:scale-110 "
              src={animal}
              alt="Animal Movie"
            />
          </div>
          <h5 className="text-center mt-1 text-lg font-semibold">Animal</h5>
          </Link>
        </SwiperSlide>

        <SwiperSlide>
        <Link href={"/video/id"}>
          <div className="relative group overflow-hidden">
            <Image
              className="w-[350px] md:w-[300px] h-[350px] md:h-full  rounded-xl transform transition-transform duration-300 group-hover:scale-110 "
              src={theHungerGames}
              alt="theHungerGames Movie"
            />
          </div>
          <h5 className="text-center mt-1 text-lg font-semibold">
            The Hunger Games
          </h5>
          </Link>
        </SwiperSlide>

        <SwiperSlide>
        <Link href={"/video/id"}>
          <div className="relative group overflow-hidden">
            <Image
              className="w-[350px] md:w-[300px] h-[350px] md:h-full  rounded-xl transform transition-transform duration-300 group-hover:scale-110 "
              src={salaar}
              alt="salaar Movie"
            />
          </div>
          <h5 className="text-center mt-1 text-lg font-semibold">Salaar</h5>
          </Link>
        </SwiperSlide>

        <SwiperSlide>
        <Link href={"/video/id"}>
          <div className="relative group overflow-hidden">
            <Image
              className="w-[350px] md:w-[300px] h-[350px] md:h-full  rounded-xl transform transition-transform duration-300 group-hover:scale-110 "
              src={theKiller}
              alt="the Killer Movie"
            />
          </div>
          <h5 className="text-center mt-1 text-lg font-semibold">The Killer</h5>
          </Link>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default ActionMovies;
