"use client";
import { FreeMode, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import "swiper/css/navigation";
import Image from "next/image";
import "swiper/css/free-mode";
import Link from "next/link";
import axios from "axios";
import "swiper/css";

const Slider = ({ category, tags, title }) => {
  const { t } = useTranslation();
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://vibewabe-server.vercel.app/video?category=${category}&tags=${tags}`
      )
      .then((res) => {
        setVideos(res.data);
      });
  }, [category, tags]);

  return (
    <div className="text-white max-w-screen-xl mx-auto px-8 md:px-16 lg:px-24 py-5 my-10">
      <div className="py-3 group relative flex justify-start items-center">
        <h2 className="text-2xl font-semibold group-hover:text-red-500">
          {t(`${title}`)}
        </h2>
        <Link
          href={`${category}/${tags}`}
          className="hidden group-hover:inline-block px-2 py-1 text-white rounded-md transition-transform transform group-hover:translate-x-2 hover:underline"
        >
          See All
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
          1024: { slidesPerView: 5 },
        }}
      >
        {videos.map((video) => (
          <SwiperSlide key={video?._id}>
            <Link href={`/video/${video?._id}`}>
              <div className="relative group overflow-hidden rounded-xl">
                <Image
                  className="w-[350px] md:w-[300px] h-[350px] transform transition-transform duration-300 group-hover:scale-110"
                  src={video?.thambnail}
                  width={350}
                  height={350}
                  alt={video?.title}
                  priority={true}
                />
              </div>
              <h5 className="text-center mt-1 text-lg font-semibold">
                {video?.title}
              </h5>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
