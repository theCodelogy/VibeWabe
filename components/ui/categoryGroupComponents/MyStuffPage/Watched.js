"use client";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";

//images
import img1 from "@/assets/DramaImage/img1.webp";
import img2 from "@/assets/DramaImage/img2.webp";
import img3 from "@/assets/DramaImage/img3.png";
import img4 from "@/assets/DramaImage/img4.webp";
import img6 from "@/assets/DramaImage/img6.webp";
import img7 from "@/assets/DramaImage/img7.jpg";
import Image from "next/image";
import { IoIosArrowDropright } from "react-icons/io";
import { IoIosArrowDropleft } from "react-icons/io";

const Watched = () => {
  return (
    <div className=" my-14 container mx-auto pt-10 px-10">
      <h1 className="text-xl font-bold text-white py-3 border-b border-zinc-500 mb-6 ">
        Already Watched
      </h1>
      <div className=" grid grid-cols-1 lg:grid-cols-5 gap-8">
        <div className="w-full col-span-3">
          <Swiper
            navigation={{
              nextEl: ".button-next-slide",
              prevEl: ".button-prev-slide",
            }}
            modules={[Navigation]}
            className="mySwiper w-full relative group"
          >
            <SwiperSlide>
              <div className="relative">
                <Image
                  className="w-full h-[400px] contain overflow-hidden rounded-md"
                  src={img2}
                  alt="slice image"
                />
                <div className="flex gap-5 mt-4">
                  <h3 className="text-xl text-white">Wedding Dress Movies</h3>
                  <button className="py-1 px-1 lg:py-2 lg:px-2 font-base lg:font-thin bg-gradient-to-r from-red-600 to-zinc-500 rounded-md text-sm lg:text-base text-white transition-all hover:scale-95 ease-in-out">
                    Watch Now
                  </button>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="relative">
                <Image
                  className="w-full h-[400px] contain overflow-hidden rounded-md"
                  src={img1}
                  alt="slice image"
                />
                <div className="flex gap-5 mt-4">
                  <h3 className="text-xl text-white">Wedding Dress Movies</h3>
                  <button className="py-1 px-1 lg:py-2 lg:px-2 font-base lg:font-thin bg-gradient-to-r from-red-600 to-zinc-500 rounded-md text-sm lg:text-base text-white transition-all hover:scale-95 ease-in-out">
                    Watch Now
                  </button>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="relative">
                <Image
                  className="w-full h-[400px] contain overflow-hidden rounded-md"
                  src={img3}
                  alt="slice image"
                />
                <div className="flex gap-5 mt-4">
                  <h3 className="text-xl text-white">Wedding Dress Movies</h3>
                  <button className="py-1 px-1 lg:py-2 lg:px-2 font-base lg:font-thin bg-gradient-to-r from-red-600 to-zinc-500 rounded-md text-sm lg:text-base text-white transition-all hover:scale-95 ease-in-out">
                    Watch Now
                  </button>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="relative">
                <Image
                  className="w-full h-[400px] contain overflow-hidden rounded-md"
                  src={img1}
                  alt="slice image"
                />
                <div className="flex gap-5 mt-4">
                  <h3 className="text-xl text-white">Wedding Dress Movies</h3>
                  <button className="py-1 px-1 lg:py-2 lg:px-2 font-base lg:font-thin bg-gradient-to-r from-red-600 to-zinc-500 rounded-md text-sm lg:text-base text-white transition-all hover:scale-95 ease-in-out">
                    Watch Now
                  </button>
                </div>
              </div>
            </SwiperSlide>
            <div className="top-[50%] absolute z-10 button-next-slide text-4xl group-hover:right-0 -right-[23rem] duration-500">
              <IoIosArrowDropright className="bg-gradient-to-r from-red-600 to-zinc-500 text-white rounded-full" />
            </div>
            <div className="top-[50%] absolute z-10 button-prev-slide text-4xl group-hover:left-0 -left-[23rem] duration-500">
              <IoIosArrowDropleft className="bg-gradient-to-r from-red-600 to-zinc-500 text-white rounded-full" />
            </div>
          </Swiper>
        </div>
        {/* right side */}

        <div className="w-full col-span-2 max-h-[500px] flex flex-col gap-5 overflow-y-auto border border-zinc-500 p-3 bg-slate-800 rounded-md">
          <div className="grid grid-cols-3 gap-5">
            <Image
              className="col-span-2 border border-zinc-500 w-full h-[200px] contain overflow-hidden rounded-md shadow-xl"
              src={img3}
              alt="slice image"
            />
            <div className="text-white col-span-1 my-4">
              <h3 className="text-base font-bold">Wedding Dress</h3>
              <h4 className="text-sm text-zinc-500">Watched</h4>
              <button className="mt-2 py-1 px-1 lg:py-1 lg:px-2 font-thin lg:font-medium bg-gradient-to-r from-red-600 to-zinc-500 rounded-md text-sm lg:text-sm text-white">
                1:14:07
              </button>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-5 ">
            <Image
              className="col-span-2 border border-zinc-500 w-full h-[200px] contain overflow-hidden rounded-md shadow-xl"
              src={img7}
              alt="slice image"
            />
            <div className="text-white col-span-1 my-4">
              <h3 className="text-base font-bold">Wedding Dress</h3>
              <h4 className="text-sm text-zinc-500">Watched</h4>
              <button className="mt-2 py-1 px-1 lg:py-1 lg:px-2 font-thin lg:font-medium bg-gradient-to-r from-red-600 to-zinc-500 rounded-md text-sm lg:text-sm text-white">
                1:14:07
              </button>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-5 ">
            <Image
              className="col-span-2 border border-zinc-500 w-full h-[200px] contain overflow-hidden rounded-md shadow-xl"
              src={img1}
              alt="slice image"
            />
            <div className="text-white col-span-1 my-4">
              <h3 className="text-base font-bold">Wedding Dress</h3>
              <h4 className="text-sm text-zinc-500">Watched</h4>
              <button className="mt-2 py-1 px-1 lg:py-1 lg:px-2 font-thin lg:font-medium bg-gradient-to-r from-red-600 to-zinc-500 rounded-md text-sm lg:text-sm text-white">
                1:14:07
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Watched;
