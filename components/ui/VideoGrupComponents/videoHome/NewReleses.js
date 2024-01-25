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

import theNew from "@/assets/New-Releases/theNewLook.jpg";
import fullSpeed from "@/assets/New-Releases/fullSpeed.jpg";
import code8 from "@/assets/New-Releases/code8.jpg";
import dunki from "@/assets/New-Releases/AAAAQWIzP26lfPx5u8_EHyeEi8SLM-0qvyQuTeKgTk8BjkQ-dSzp6F0GGXqlXX2iCQiwZQsUMlxF0S0dCO3IpUtzBrSSUnM2jgW1rarX1GrvrS0ahIZulIq4jf7bzvKVcqrg_93YDII0E1QtRnOD6C6f0LRe.jpg";
import imaginary from "@/assets/New-Releases/imaginary.jpg";
import Link from "next/link";
const NewReleses = () => {
  return (
    <div className="text-white container  mx-auto px-5 py-12 ">
      <div className="relative group">
        <Link href="#">
          <h3 className="text-xl font-semibold mb-6 group-hover:text-red-500">
            New Releases{" "}
          </h3>

          <button className="absolute -top-1 left-32  group-hover:inline-block px-4 py-2 text-white rounded-md transition-transform transform group-hover:translate-x-2 hover:underline">
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
                src={imaginary}
                alt="Imaginary Movie"
              />
            </div>
            <h5 className="text-center mt-1 text-lg font-semibold">
              Imaginary
            </h5>
          </Link>
        </SwiperSlide>

        <SwiperSlide>
          <Link href={"/video/id"}>
            <div className="relative group overflow-hidden">
              <Image
                className="w-[350px] md:w-[300px] h-[350px] md:h-full  transform transition-transform duration-300 group-hover:scale-110 rounded-xl"
                src={theNew}
                alt="The New look Movie"
              />
            </div>
            <h5 className="text-center mt-1 text-lg font-semibold">
              The New look
            </h5>
          </Link>
        </SwiperSlide>

        <SwiperSlide>
          <Link href={"/video/id"}>
            <div className="relative group overflow-hidden">
              <Image
                className="w-[350px] md:w-[300px] h-[350px] md:h-full  transform transition-transform duration-300 group-hover:scale-110 rounded-xl"
                src={code8}
                alt="Code8 Movie"
              />
            </div>
            <h5 className="text-center mt-1 text-lg font-semibold">Code8</h5>
          </Link>
        </SwiperSlide>

        <SwiperSlide>
          <Link href={"/video/id"}>
            <div className="relative group overflow-hidden">
              <Image
                className="w-[350px] md:w-[300px] h-[350px] md:h-full  transform transition-transform duration-300 group-hover:scale-110 rounded-xl"
                src={dunki}
                alt="Dunki Movie"
              />
            </div>
            <h5 className="text-center mt-1 text-lg font-semibold">Dunki</h5>
          </Link>
        </SwiperSlide>

        <SwiperSlide>
          <Link href={"/video/id"}>
            <div className="relative group overflow-hidden">
              <Image
                className="w-[350px] md:w-[300px] h-[350px] md:h-full  transform transition-transform duration-300 group-hover:scale-110 rounded-xl"
                src={fullSpeed}
                alt="Full Speed Movie"
              />
            </div>
            <h5 className="text-center mt-1 text-lg font-semibold">
              Full Speed
            </h5>
          </Link>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default NewReleses;
