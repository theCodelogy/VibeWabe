"use client";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";

import img1 from "@/assets/DramaImage/img1.webp";
import img2 from "@/assets/DramaImage/img2.webp";
import img3 from "@/assets/DramaImage/img3.png";
import img4 from "@/assets/DramaImage/img4.webp";
import img6 from "@/assets/DramaImage/img6.webp";
import img7 from "@/assets/DramaImage/img7.jpg";
import Image from "next/image";
import { IoIosArrowDropright } from "react-icons/io";
import { IoIosArrowDropleft } from "react-icons/io";
import { useTranslation } from "react-i18next";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { authContext } from "@/utils/AuthProvider";
import Link from "next/link";


const Watched = () => {
  const {t} = useTranslation();
  const {user} = useContext(authContext)
  const [lists , setLists] = useState([])

  useEffect(() =>{
    axios.get(`https://vibewabe-server.vercel.app/videoPlaylist/${user?.email}`)
    .then(res => setLists(res.data))
  },[user])
  const date = new Date(lists?.date).toLocaleDateString('en-US')
  
  return (
    <div className=" my-14 container mx-auto pt-10 px-10">
      <h1 className="text-xl font-bold text-white py-3 border-b border-zinc-500 mb-6 ">
      {t("mystuff:alreadywatched")}
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
           {lists.map(list => <SwiperSlide key={list._id} >
              <div className="relative">
                <Image
                  className="w-full h-[400px] contain overflow-hidden rounded-md"
                  src={list.thambnail}
                  alt="slice image"
                  width={400}
                  height={400}
                />
                <div className="flex gap-5 mt-4">
                  <h3 className="text-xl text-white">{list.title}</h3>
                  <p className="text-white">{date}</p>
<Link href={`/video/${list?.videoId}`} className="py-1 px-1 lg:py-2 lg:px-2 font-base lg:font-thin bg-gradient-to-r from-red-600 to-orange-500 rounded-md text-sm lg:text-base text-white transition-all hover:scale-95 ease-in-out">
                    Watch Now
                  </Link>
                </div>
              </div>
            </SwiperSlide>) }
           
            <div className="top-[50%] absolute z-10 button-next-slide text-4xl group-hover:right-0 -right-[23rem] duration-500">
              <IoIosArrowDropright className="bg-gradient-to-r from-red-600 to-orange-500 text-white rounded-full" />
            </div>
            <div className="top-[50%] absolute z-10 button-prev-slide text-4xl group-hover:left-0 -left-[23rem] duration-500">
              <IoIosArrowDropleft className="bg-gradient-to-r from-red-600 to-orange-500 text-white rounded-full" />
            </div>
          </Swiper>
        </div>
        {/* right side */}

        <div className="w-full col-span-2 max-h-[500px] flex flex-col gap-5 overflow-y-auto border border-zinc-500 p-3 bg-slate-800 rounded-md">

{lists.map(list => <div key={list._id}  className="grid grid-cols-3 gap-5 ">
  <Image
    className="col-span-2 border border-zinc-500 w-full h-[200px] contain overflow-hidden rounded-md shadow-xl"
    src={list.thambnail}
    alt="slice image"
    width={300}
    height={300}
  />
  <div className="text-white col-span-1 my-4">
    <h3 className="text-base font-bold">{list.title}</h3>
    <h4 className="text-sm text-zinc-500">Watched</h4>
    <Link href={`/video/${list?.videoId}`} className="mt-2 py-1 px-1 lg:py-1 lg:px-2 font-thin lg:font-medium bg-gradient-to-r from-red-600 to-orange-500 rounded-md text-sm lg:text-sm text-white">
      1:14:07
    </Link>
  </div>
</div>)
}

</div>
      </div>
    </div>
  );
};

export default Watched;
