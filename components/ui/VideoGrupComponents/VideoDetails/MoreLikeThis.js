
// 'use client'
// import Image from 'next/image';

// import { Swiper, SwiperSlide } from "swiper/react";

// // Import Swiper styles
// import "swiper/css";
// import "swiper/css/free-mode";
// import "swiper/css/navigation";
// import { FreeMode, Navigation } from "swiper/modules";
// import Link from 'next/link';

// const MoreLikeThis = ({category}) => {

//   return (
//     <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
     
//     {/* {category.map(data => <Link key={data._id}  href={"/video/id"}>
//             <div className="relative group overflow-hidden">
//               <Image
//                 className="w-[200px] md:w-[300px] h-[150px] md:h-full  transform transition-transform duration-300 group-hover:scale-110 rounded-xl"
//                 src={data.thambnail}
//                 alt="Imaginary Movie"
//                 width={200}
//                 height={200}
//               />
//             </div>
//             <h5 className="text-center mt-1 text-xs md:text-[15px] font-semibold">
//              {data.title}
//             </h5>
//           </Link>) 
//      } */}
  
//   <div className="text-white max-w-screen-xl mx-auto px-8 md:px-16 lg:px-24 py-5 my-10">
//       <div className="relative group">
//         <Link href="#">
//           <h3 className="text-xl font-semibold mb-6 group-hover:text-red-500">
//           {/* {t("drama:kids")} */}
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
//         {category.map((data) => (
//           <SwiperSlide key={data.id}>
//             <Link href={`/video/${data._id}`}>
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
//     </div>
//   );
// };

'use client'
import Image from 'next/image';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import { FreeMode, Navigation } from "swiper/modules";
import Link from 'next/link';

const MoreLikeThis = ({ category, id }) => {
  // Filter out the initial video from the category array
  const filteredCategory = category.filter(data => data._id !== id);

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      <div className="text-white max-w-screen-xl mx-auto px-8 md:px-16 lg:px-24 py-5 my-10">
        <div className="relative group">
          <Link href="#">
            <h3 className="text-xl font-semibold mb-6 group-hover:text-red-500">
              {/* {t("drama:kids")} */}
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
          {filteredCategory.map((data) => (
            <SwiperSlide key={data._id}>
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
    </div>
  );
};

export default MoreLikeThis;
