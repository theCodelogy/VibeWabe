// 'use client'
// import Image from 'next/image';
// import React from 'react';
// import Slider from "react-slick";
// import slide1 from '@/assets/Series-Image/AAAABYOh_qSTCE0CjK1UqWGAadvbnn55fMNFzyKslyB6v0AOBd0I9NIZwE1ctGeC_2FrCcCAHal5K4XRrE19fUf-IkCR_3pyk9zXrvzSKH2wnaB8eNZXX9DJ8jdvsLNEBcNWoF6ddg.jpg'
// import slide2 from '@/assets/Series-Image/AAAAQROwTYEBX6jBgdzzxXMHOIxYDjyTKbZaGszQ38pJCDW4-Mxs3wa12Il3goPnykiB92fvjYt3g5_YOQUAHv_ywLXmQ-q9SLeLhfV7wii_zLu5LFctYX87GEMD_BHDg9A4cGK20728irptybLWnFU6CCFu.jpg'
// import slide3 from '@/assets/Series-Image/s-l1200.webp'
// import slide4 from '@/assets/Series-Image/space-force-netflix-159794.jpg'
// import slide5 from '@/assets/Series-Image/AAAABdG_jOQeldU-v8TiX0GGxwemOu2KF7d0kIGFgraQM8fbO4ZXadbUUvfyMaXPdj2ZhGR2hWHaT85EGpA-sOb65nHfjMHx7zn5s9J-.jpg'
// import { useTranslation } from 'react-i18next';

// // function SampleNextArrow(props) {
// //     const { className, style, onClick } = props;
// //     return (
// //       <div
// //         className={className}
// //         style={{ ...style, display: "block", color:'red', }}
// //         onClick={onClick}
        
// //       />
      
// //     );
// //   }

// const UpComingCard = () => {
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
//         <div className='max-w-screen-xl mx-auto px-8 md:px-16 lg:px-24 py-5 my-10'>
//               <h1 className='text-2xl my-5 text-white font-bold'>{t("series:upcomingseries")} </h1>
//             <div>
//                 <Slider {...settings}>
// {/* slide One */}
//                 <div>
//         <a href="#" className="group relative mb-2 block h-96 overflow-hidden rounded-lg bg-gray-100 shadow-lg lg:mb-3">
//           <Image src={slide1} loading="lazy" alt="Photo by Austin Wade" className="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
         
// //         </a>

// //         <div className="flex flex-col">
// //           <span className="text-gray-200">JHON WICK</span>
// //           <a href="#" className="text-lg font-bold text-gray-800 transition duration-100 hover:text-gray-500 lg:text-xl">Business Causual</a>
// //         </div>
// //       </div>

// // {/* end slide one */}


// // {/* slide two */}
// // <div>
// //         <a href="#" className="group relative mb-2 block h-96 overflow-hidden rounded-lg bg-gray-100 shadow-lg lg:mb-3">
// //           <Image src={slide2} loading="lazy" alt="Photo by Austin Wade" className="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
         
// //         </a>

// //         <div className="flex flex-col">
// //           <span className="text-gray-200">JHON WICK</span>
// //           <a href="#" className="text-lg font-bold text-gray-800 transition duration-100 hover:text-gray-500 lg:text-xl">Business Causual</a>
// //         </div>
// //       </div>
// //     {/* end slide two */}
// //                     {/* slide three */}
// //                     <div>
// //         <a href="#" className="group relative mb-2 block h-96 overflow-hidden rounded-lg bg-gray-100 shadow-lg lg:mb-3">
// //           <Image src={slide3} loading="lazy" alt="Photo by Austin Wade" className="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
         
// //         </a>

// //         <div className="flex flex-col">
// //           <span className="text-gray-200">JHON WICK</span>
// //           <a href="#" className="text-lg font-bold text-gray-800 transition duration-100 hover:text-gray-500 lg:text-xl">Business Causual</a>
// //         </div>
// //       </div>

// //                     {/* end slide three */}
                    
// //                     {/* slide four */}
// //                     <div>
// //         <a href="#" className="group relative mb-2 block h-96 overflow-hidden rounded-lg bg-gray-100 shadow-lg lg:mb-3">
// //           <Image src={slide4} loading="lazy" alt="Photo by Austin Wade" className="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
         
// //         </a>

// //         <div className="flex flex-col">
// //           <span className="text-gray-200">JHON WICK</span>
// //           <a href="#" className="text-lg font-bold text-gray-800 transition duration-100 hover:text-gray-500 lg:text-xl">Business Causual</a>
// //         </div>
// //       </div>
// //                     {/* end slide four */}
                    
// //                     {/* slide five */}
// //                     <div>
// //         <a href="#" className="group relative mb-2 block h-96 overflow-hidden rounded-lg bg-gray-100 shadow-lg lg:mb-3">
// //           <Image src={slide5} loading="lazy" alt="Photo by Austin Wade" className="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
         
// //         </a>

// //         <div className="flex flex-col">
// //           <span className="text-gray-200">JHON WICK</span>
// //           <a href="#" className="text-lg font-bold text-gray-800 transition duration-100 hover:text-gray-500 lg:text-xl">Business Causual</a>
// //         </div>
// //       </div>
// //                     {/* end slide five */}
// //                 </Slider>
// //             </div>
// //         </div>
// //     );
// // };

// // export default UpComingCard;








// // "use client";

// // import { Swiper, SwiperSlide } from "swiper/react";

// // // Import Swiper styles
// // import "swiper/css";
// // import "swiper/css/free-mode";
// // import "swiper/css/navigation";

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

// eslint-disable-next-line @next/next/no-async-client-component
const UpComingCard = async () => {
  const {t} = useTranslation();
  const res = await fetch(
    "https://vibewabe-server.vercel.app/video?category=series"
  );
  const drama = await res.json();
  console.log(drama);

  return (
    <div className="text-white max-w-screen-xl mx-auto px-8 md:px-16 lg:px-24 py-5 my-10">
      <div className="relative group">
        <Link href="#">
          <h3 className="text-xl font-semibold mb-6 group-hover:text-red-500">
          {t("series:upcomingseries")}
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
        {drama.slice(10,30).map((data) => (
          <SwiperSlide key={data.id}>
            <Link href={`/video/${data.id}`}>
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

export default UpComingCard;
