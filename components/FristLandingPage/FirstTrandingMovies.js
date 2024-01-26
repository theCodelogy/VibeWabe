"use client";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { FreeMode, Autoplay } from "swiper/modules";
import Image from "next/image";

// movies picture
import animal from "@/assets/Trending-Movies/Animal.jpg";
import oppenheimer from "@/assets/Trending-Movies/oppenheimer.jpg";
import salar from "@/assets/Trending-Movies/salar.jpg";
import theConference from "@/assets/Trending-Movies/theConference.jpg";
import maestro from "@/assets/Trending-Movies/maestro.jpg";
import scremVi from "@/assets/Trending-Movies/scremVijpg.jpg";
import fail from "@/assets/Trending-Movies/12th-failjpg.jpg";
import { useTranslation } from "react-i18next";

const FirstTrendingMovies = () => {
  const {t} = useTranslation();
  return (
    <div className="text-white container mx-auto px-5 py-24 ">
      <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-6">
        {t("landing:trending")}{" "}
      </h3>
      <Swiper
        // slidesPerView={3}
        spaceBetween={10}
        freeMode={true}
        loop={true}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        modules={[FreeMode, Autoplay]}
        className="mySwiper  "
        breakpoints={{
            // For small device
            640: {
              slidesPerView: 1,
            },
            // For medium device
            768: {
              slidesPerView: 2,
            },
            // For larger screens 
            1024: {
              slidesPerView: 3,
            },
          }}
      >
        <SwiperSlide>
          <Image
            className="object-cover h-96 rounded-lg"
            src={animal}
            alt="Animal Movie"
          />
        </SwiperSlide>

        <SwiperSlide>
          <Image
            className="object-cover h-96 rounded-lg"
            src={oppenheimer}
            alt="Oppenheimer Movie"
          />
        </SwiperSlide>

        <SwiperSlide>
          <Image
            className="object-cover h-96 rounded-lg"
            src={salar}
            alt="Salar Movie"
          />
        </SwiperSlide>

        <SwiperSlide>
          <Image
            className="object-cover h-96 rounded-lg"
            src={theConference}
            alt="The Conference Movie"
          />
        </SwiperSlide>

        <SwiperSlide>
          <Image
            className="object-cover h-96 rounded-lg"
            src={maestro}
            alt="Maestro Movie"
          />
        </SwiperSlide>

        <SwiperSlide>
          <Image
            className="object-cover h-96 rounded-lg"
            src={scremVi}
            alt="screm Vi Movie"
          />
        </SwiperSlide>

        <SwiperSlide>
          <Image
            className="object-cover h-96 rounded-lg"
            src={fail}
            alt="12th Fail Movie"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default FirstTrendingMovies;
