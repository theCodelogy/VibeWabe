"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import { FreeMode, Navigation } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import axios from "axios";

const MovieUpComingCard = () => {
  const { t } = useTranslation();
  const [drama, setDrama] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://vibewabe-server.vercel.app/video?category=movie&tags=comedy"
      )
      .then((res) => {
        setDrama(res?.data);
      });
  }, []);

  return (
    <div className="text-white max-w-screen-xl mx-auto px-8 md:px-16 lg:px-24 py-5 my-10">
      <div className="relative group">
        <Link href="#">
          <h3 className="text-xl font-semibold mb-6 group-hover:text-red-500">
            {t("Movies:Upcoming")}
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
        className="mySwiper"
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
        }}
      >
        {drama.slice(10, 20).map((data) => (
          <SwiperSlide key={data?._id}>
            <Link href={`/video/${data?._id}`}>
              <div className="relative group overflow-hidden">
                <Image
                  className="w-[350px] md:w-[300px] h-[350px] transform transition-transform duration-300 group-hover:scale-110 rounded-xl"
                  src={data?.thambnail}
                  width={350}
                  height={350}
                  alt={data?.title}
                  priority={true}
                />
              </div>
              <h5 className="text-center mt-1 text-lg font-semibold">
                {data?.title}
              </h5>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default MovieUpComingCard;
