// "use client";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/free-mode";
// import "swiper/css/navigation";
// import { FreeMode, Navigation } from "swiper/modules";
// import Image from "next/image";
// import Link from "next/link";

// const ComedyMovies = async () => {
//   const res = await fetch(
//     "https://vibewabe-server.vercel.app/video?category=movie&tags=comedy"
//   );
//   const comedyMovies = await res.json();
//   console.log(comedyMovies);
//   return (
//     <div className="text-white max-w-screen-xl mx-auto px-8 md:px-16 lg:px-24 py-5 my-10">
//       <div className="relative group">
//         <Link href="#">
//           <h3 className="text-xl font-semibold mb-6 group-hover:text-red-500">
//             Comedy Movie
//           </h3>
//           <button className="absolute top-0 left-32 hidden group-hover:inline-block px-4 py-2 text-white rounded-md transition-transform transform group-hover:translate-x-2 hover:underline">
//             See All
//           </button>
//         </Link>
//       </div>
//       <Swiper
//         slidesPerView={1}
//         spaceBetween={10}
//         freeMode={true}
//         loop={true}
//         navigation={true}
//         modules={[FreeMode, Navigation]}
//         className="mySwiper"
//         breakpoints={{
//           640: { slidesPerView: 1 },
//           768: { slidesPerView: 3 },
//           1024: { slidesPerView: 4 },
//         }}
//       >
//         {comedyMovies.slice(10, 20).map((data) => (
//           <SwiperSlide key={data.id}>
//             <Link href={`/video/${data.id}`}>
//               <div className="relative group overflow-hidden">
//                 <Image
//                   className="w-[350px] md:w-[300px] h-[350px] transform transition-transform duration-300 group-hover:scale-110 rounded-xl"
//                   src={data.thambnail}
//                   width={350}
//                   height={350}
//                   alt={data.title}
//                   priority={true}
//                 />
//               </div>
//               <h5 className="text-center mt-1 text-lg font-semibold">
//                 {data.title}
//               </h5>
//             </Link>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );
// };

// export default ComedyMovies;

"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import { SwiperModule, Navigation } from "swiper";
import Image from "next/image";
import Link from "next/link";

const ComedyMovies = async () => {
  try {
    const res = await fetch(
      "https://vibewabe-server.vercel.app/video?category=movie&tags=comedy"
    );

    if (!res.ok) {
      throw new Error("Failed to fetch comedy movies");
    }

    const comedyMovies = await res.json();

    return (
      <div className="text-white max-w-screen-xl mx-auto px-8 md:px-16 lg:px-24 py-5 my-10">
        <div className="relative group">
          <Link href="#">
            <h3 className="text-xl font-semibold mb-6 group-hover:text-red-500">
              Comedy Movie
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
          modules={[SwiperModule.FreeMode, Navigation]}
          className="mySwiper"
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
          }}
        >
          {comedyMovies.slice(10, 20).map((data) => (
            <SwiperSlide key={data.id}>
              <Link href={`/video/${data.id}`}>
                <div className="relative group overflow-hidden">
                  <Image
                    className="w-[350px] md:w-[300px] h-[350px] transform transition-transform duration-300 group-hover:scale-110 rounded-xl"
                    src={data.thumbnail}
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
  } catch (error) {
    console.error("Error fetching comedy movies:", error);
    // You may want to handle the error in a way that makes sense for your application
    return null;
  }
};

export default ComedyMovies;
