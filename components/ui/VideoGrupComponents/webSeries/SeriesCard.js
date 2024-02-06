// 'use client'
// import Image from 'next/image';
// import React from 'react';
// import Slider from "react-slick";
// import slide1 from '@/assets/Recomended-movie/d3e6plk-14712041-47d4-43f7-9806-8aa132e62941.jpg'
// import slide2 from '@/assets/Series-Image/AAAAQYApbyEA8dTOxD7XXJZ7gnnghPd3GL5xGL_wPxXWm43oWwL7XYR2dstAzkR4Xgqzkig_h8BOT920-lCqEmT-AFsKzBjhdyCsiBh2I5NcWcs8WPsRl7vxU6IsYm1blDEQItlVy8-z6q9f1Cy_i32tsl-y.jpg'
// import slide3 from '@/assets/Series-Image/main-qimg-4e6cd31edc1a1856d03ef87ad331b00d-lq.jpeg'
// import slide4 from '@/assets/Series-Image/kingdom-ashin-of-the-north-1.jpg'
// import slide5 from '@/assets/Series-Image/mm-608x900.jpg'
// import { useTranslation } from 'react-i18next';

// function SampleNextArrow(props) {
  
//     const { className, style, onClick } = props;
//     return (
//       <div
//         className={className}
//         style={{ ...style, display: "block", color:'red', }}
//         onClick={onClick}
        
//       />
      
//     );
//   }

// const SeriesCard = () => {
//   const {t} = useTranslation();
//     const settings = {
//         dots: true,
//         infinite: true,
//         speed: 500,
//         slidesToShow: 4,
//         slidesToScroll: 4,
//         nextArrow: <SampleNextArrow />,
//         responsive: [
//             {
//               breakpoint: 1024,
//               settings: {
//                 slidesToShow: 3,
//                 slidesToScroll: 3,
//                 infinite: true,
//                 dots: true
//               }
//             },
//             {
//               breakpoint: 600,
//               settings: {
//                 slidesToShow: 2,
//                 slidesToScroll: 2,
//                 initialSlide: 2
//               }
//             },
//             {
//               breakpoint: 480,
//               settings: {
//                 slidesToShow: 1,
//                 slidesToScroll: 1
//               }
//             }
//           ]
//     };
//     return (
//         <div className='max-w-screen-xl mx-auto px-8 md:px-16 lg:px-24 py-5'>
//             <h1 className='text-2xl my-5 text-white font-bold'>{t("series:trendingseries")} </h1>
//             <div>
//                 <Slider {...settings}>
// {/* slide One */}
//                 <div>
//         <a href="#" className="group relative mb-2 block h-96 overflow-hidden rounded-lg bg-gray-100 shadow-lg lg:mb-3">
//           <Image src={slide1} loading="lazy" alt="Photo by Austin Wade" className="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
//           <span className="absolute left-0 top-0 rounded-br-lg bg-blue-500 px-3 py-1.5 text-sm uppercase tracking-wider text-white">Tranding</span>
//         </a>

// // // import required modules
// // import { FreeMode, Navigation } from "swiper/modules";
// // import Image from "next/image";

// // // images

// // import call from "@/assets/Thrillers-movies/call.jpeg";
// // import pandora from "@/assets/Thrillers-movies/Pandora.jpeg";
// // import extinction from "@/assets/Thrillers-movies/Extinction.jpeg";
// // import theGrayMan from "@/assets/Thrillers-movies/theGrayMan.jpeg";
// // import nightIsLonely from "@/assets/Thrillers-movies/nightIsLonely.jpeg";
// // import TheGuilty from "@/assets/Thrillers-movies/TheGuilty.jpeg";
// // import Link from "next/link";

// // const Drama = () => {
// //   return (
// //     <div className="text-white container  mx-auto px-5 pb-12">
// //       <div className="relative group">
// //         <Link href="#">
// //           <h3 className="text-xl font-semibold mb-6 group-hover:text-red-500">
// //             Drama
// //           </h3>

// //           <button className="absolute top-0 left-32 hidden group-hover:inline-block px-4 py-2 text-white rounded-md transition-transform transform group-hover:translate-x-2 hover:underline">
// //             See All
// //           </button>
// //         </Link>
// //       </div>
// //       <Swiper
// //         slidesPerView={1}
// //         spaceBetween={10}
// //         freeMode={true}
// //         loop={true}
// //         navigation={true}
// //         modules={[FreeMode, Navigation]}
// //         className="mySwiper  "
// //         breakpoints={{
// //           // For small device
// //           640: {
// //             slidesPerView: 1,
// //           },
// //           // For medium device
// //           768: {
// //             slidesPerView: 3,
// //           },
// //           // For larger screens
// //           1024: {
// //             slidesPerView: 4,
// //           },
// //         }}
// //       >
// //         <SwiperSlide>
// //           <Link href={"/video/id"}>
// //             <div className="relative group overflow-hidden">
// //               <Image
// //                 className="w-[350px] md:w-[300px] h-[350px] md:h-full  transform transition-transform duration-300 group-hover:scale-110 rounded-xl"
// //                 src={call}
// //                 alt="Call Movie"
// //               />
// //             </div>
// //             <h5 className="text-center mt-1 text-lg font-semibold">Call</h5>
// //           </Link>
// //         </SwiperSlide>

// //         <SwiperSlide>
// //           <Link href={"/video/id"}>
// //             <div className="relative group overflow-hidden">
// //               <Image
// //                 className="w-[350px] md:w-[300px] h-[350px] md:h-full  transform transition-transform duration-300 group-hover:scale-110 rounded-xl"
// //                 src={theGrayMan}
// //                 alt="The Gray Man Movie"
// //               />
// //             </div>
// //             <h5 className="text-center mt-1 text-lg font-semibold">
// //               The Gray Man
// //             </h5>
// //           </Link>
// //         </SwiperSlide>

// //         <SwiperSlide>
// //           <Link href={"/video/id"}>
// //             <div className="relative group overflow-hidden">
// //               <Image
// //                 className="w-[350px] md:w-[300px] h-[350px] md:h-full  transform transition-transform duration-300 group-hover:scale-110 rounded-xl"
// //                 src={TheGuilty}
// //                 alt="the Guilty Movie"
// //               />
// //             </div>
// //             <h5 className="text-center mt-1 text-lg font-semibold">
// //               The Guilty
// //             </h5>
// //           </Link>
// //         </SwiperSlide>

// //         <SwiperSlide>
// //           <Link href={"/video/id"}>
// //             <div className="relative group overflow-hidden">
// //               <Image
// //                 className="w-[350px] md:w-[300px] h-[350px] md:h-full  transform transition-transform duration-300 group-hover:scale-110 rounded-xl"
// //                 src={pandora}
// //                 alt="pandora Movie"
// //               />
// //             </div>
// //             <h5 className="text-center mt-1 text-lg font-semibold">Pandora</h5>
// //           </Link>
// //         </SwiperSlide>

// //         <SwiperSlide>
// //           <Link href={"/video/id"}>
// //             <div className="relative group overflow-hidden">
// //               <Image
// //                 className="w-[350px] md:w-[300px] h-[350px] md:h-full  transform transition-transform duration-300 group-hover:scale-110 rounded-xl"
// //                 src={extinction}
// //                 alt="Extinction Movie"
// //               />
// //             </div>
// //             <h5 className="text-center mt-1 text-lg font-semibold">
// //               Extinction
// //             </h5>
// //           </Link>
// //         </SwiperSlide>

// //         <SwiperSlide>
// //           <Link href={"/video/id"}>
// //             <div className="relative group overflow-hidden">
// //               <Image
// //                 className="w-[350px] md:w-[300px] h-[350px] md:h-full  transform transition-transform duration-300 group-hover:scale-110 rounded-xl"
// //                 src={nightIsLonely}
// //                 alt="Night Is Lonely Movie"
// //               />
// //             </div>
// //             <h5 className="text-center mt-1 text-lg font-semibold">
// //               Night Is Lonely
// //             </h5>
// //           </Link>
// //         </SwiperSlide>
// //       </Swiper>
// //     </div>
// //   );
// // };

// // export default Drama;

"use client";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";

// import required modules
import { FreeMode, Navigation } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from "react";
import axios from "axios";

// eslint-disable-next-line @next/next/no-async-client-component
const SeriesCard = async () => {
  const {t} = useTranslation();
  const [drama ,setDrama] = useState([])
  useEffect(() =>{
    axios.get('https://vibewabe-server.vercel.app/video?category=series')
    .then(res =>{
      setDrama(res.data)
    })
  },[])

  return (
    <div className="text-white max-w-screen-xl mx-auto px-8 md:px-16 lg:px-24 py-5 my-10">
      <div className="relative group">
        <Link href="#">
          <h3 className="text-xl font-semibold mb-6 group-hover:text-red-500">
          {t("series:trendingseries")}
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
        {drama.map((data) => (
          <SwiperSlide key={data.id}>
            <Link href={`/video/${data._id}`}>
              <div className="relative group overflow-hidden">
                <Image
                  className="w-[350px] md:w-[300px] h-[350px] transform transition-transform duration-300 group-hover:scale-110 rounded-xl"
                  src={data.thambnail}
                  width={350}
                  height={350}
                  alt={data.title}
                  priority={true}
                />
              </div>
              <h5 className="text-center mt-1 text-lg font-semibold">
                {data.title}
              </h5>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SeriesCard;
