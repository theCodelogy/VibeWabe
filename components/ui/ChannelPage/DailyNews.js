'use client'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';
//music banner img
import Image from 'next/image';
import news1 from '@/assets/channelImage/news1.jpg';
import news2 from '@/assets/channelImage/news2.jpg';
import channel1 from '@/assets/channelImage/jalsha.png';
import channel2 from '@/assets/channelImage/star.png';

import { FaCirclePlay } from "react-icons/fa6";
import { GrLike } from "react-icons/gr";
import { IoEyeOutline } from "react-icons/io5";
import { useTranslation } from 'react-i18next';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import axios from "axios";


const DailyNews = ({allTv}) => {
    const {t} = useTranslation();
    const [tvChannel, setTvChannel] = useState([]);
    useEffect(() => {
      axios
        .get(
          "https://vibewabe-server.vercel.app/channel"
        )
        .then((res) => {
            setTvChannel(res?.data);
        });
    }, []);
    console.log(tvChannel)
    return (
  //       <div>
  //             <div className='px-5 container mx-auto mt-20'>
  //       <h3 className='text-white text-xl font-bold'>{t("channel:tv")}</h3>
  //       <Swiper
  //       slidesPerView={4}
  //       spaceBetween={7}
  //       pagination={{
  //         clickable: true,
  //       }}
  //       breakpoints={{
  //         425: {
  //           slidesPerView: 1,
  //           spaceBetween: 10,
  //         },
  //         768: {
  //           slidesPerView: 2,
  //           spaceBetween: 10,
  //         },
  //         1024: {
  //           slidesPerView: 4,
  //           spaceBetween: 10,
  //         },
  //       }}
  //       modules={[Pagination]}
  //       className="mySwiper mt-10"
  //     >
  //       {
  //           allTv.slice(4, 8).map(tv=>  <SwiperSlide key={tv?._id}>
           
  //               <div className='flex gap-4 rounded-md hover:bg-zinc-700'>
                    
  //               <div className='flex gap-4 rounded-md hover:bg-zinc-700 px-3 py-2'>
  //               <div className='group relative rounded-lg h-16 w-16'>
  //                       <Image className='w-full h-full rounded-lg  transition duration-300' src={tv?.thambnail}   fill={true} alt='slice image'/>
  //                       <div className='absolute text-xl text-white rounded-lg -top-0 left-0  flex justify-center items-center h-16 w-16 bg-black bg-opacity-55 opacity-0 group-hover:opacity-100 transition-opacity duration-300 '>
  //                       </div>
  //                   </div>
  //                   <div className='text-slate-300'>
  //                   <h3 className='hover:text-sky-400 text-sm'>{tv?.title}</h3>
  //                   <Link href={`channel/news/${tv?._id}`}>
  //                   <button className="mb-2 text-xs rounded-lg px-1 bg-red-700 hover:bg-orange-600 text-white hover:text-white ">View</button> 
  //                   </Link>
                   
  //                   <div className='grid grid-cols-3 gap-1 items-center'>
  //                   <p className='text-xs text-zinc-400 inline-flex gap-2'><GrLike />1</p>
  //                   <p className='text-xs text-blue-400 inline-flex gap-1 items-center  rounded-lg'><IoEyeOutline />{tv?.view}</p>
  //                   </div>
                    
  //                   </div>
  //               </div>
  //               </div>
  //               {/* end of first div */}

  //               <div className='flex gap-4 rounded-md hover:bg-zinc-700 py-2 px-3 my-6'>
  //               <div className='group relative rounded-lg h-16 w-16'>
  //                       <Image className='w-full h-full rounded-lg mb-2 transition duration-300' src={tv?.thambnail}   fill={true} alt='slice image'/>
  //                       <div className='absolute text-xl text-white rounded-lg -top-0 left-0  flex justify-center items-center h-16 w-16 bg-black bg-opacity-55 opacity-0 group-hover:opacity-100 transition-opacity duration-300 '>
  //                       </div>
  //                   </div>
  //                   <div className='text-slate-300'>
  //                   <h3 className='hover:text-sky-400 text-sm'>{tv?.title}</h3>
  //                   <Link href={`channel/news/${tv?._id}`}>
  //                   <button className="mb-2 text-xs rounded-lg px-1 bg-red-700 hover:bg-orange-600 text-white hover:text-white ">View</button> 
  //                   </Link>
                   
  //                   <div className='grid grid-cols-3 gap-1 items-center'>
  //                   <p className='text-xs text-zinc-400 inline-flex gap-2'><GrLike />1</p>
  //                   <p className='text-xs text-blue-400 inline-flex gap-1 items-center  rounded-lg'><IoEyeOutline />{tv?.view}</p>
  //                   </div>
                    
  //                   </div>
  //               </div>
  //                {/* end of second div */}
  //               <div className='flex gap-4 rounded-md hover:bg-zinc-700 py-2 px-3 my-6'>
  //               <div className='group relative rounded-lg h-16 w-16'>
  //                       <Image className='w-full h-full rounded-lg mb-2 transition duration-300' src={tv?.thambnail}   fill={true} alt='slice image'/>
  //                       <div className='absolute text-xl text-white rounded-lg -top-0 left-0  flex justify-center items-center h-16 w-16 bg-black bg-opacity-55 opacity-0 group-hover:opacity-100 transition-opacity duration-300 '>
  //                       </div>
  //                   </div>
  //                   <div className='text-slate-300'>
  //                   <h3 className='hover:text-sky-400 text-sm'>{tv?.title}</h3>
  //                   <Link href={`channel/news/${tv?._id}`}>
  //                   <button className="mb-2 text-xs rounded-lg px-1 bg-red-700 hover:bg-orange-600 text-white hover:text-white ">View</button> 
  //                   </Link>
                   
  //                   <div className='grid grid-cols-3 gap-1 items-center'>
  //                   <p className='text-xs text-zinc-400 inline-flex gap-2'><GrLike />1</p>
  //                   <p className='text-xs text-blue-400 inline-flex gap-1 items-center  rounded-lg'><IoEyeOutline />{tv?.view}</p>
  //                   </div>
                    
  //                   </div>
  //               </div>
                
  //       </SwiperSlide>)
  //       }
       
       
  //   </Swiper>
  //  </div>
  //       </div>
  <div className='px-5 container mx-auto mt-20'>
  
   
       <h3 className='text-white text-xl font-bold mb-10'>{t("channel:tv")}</h3>
       <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 ml-5 lg:ml-0'>
       {
         allTv.slice(4, 17).map(tv=> 
          <div key={tv?._id} className='flex gap-4 rounded-md hover:bg-zinc-700'>
                    
                <div className='flex gap-4 rounded-md hover:bg-zinc-700 px-3 py-2'>
                <div className='group relative rounded-lg h-16 w-16'>
                        <Image className='w-full h-full rounded-lg  transition duration-300' src={tv?.thambnail}   fill={true} alt='slice image'/>
                        <div className='absolute text-xl text-white rounded-lg -top-0 left-0  flex justify-center items-center h-16 w-16 bg-black bg-opacity-55 opacity-0 group-hover:opacity-100 transition-opacity duration-300 '>
                        </div>
                   </div>
                   <div className='text-slate-300'>
                     <h3 className='hover:text-sky-400 text-sm'>{tv?.title}</h3>
                    <Link href={`channel/news/${tv?._id}`}>
                    <button className="mb-2 text-xs rounded-lg px-1 bg-red-700 hover:bg-orange-600 text-white hover:text-white ">View</button> 
                   </Link>
                   
                    <div className='grid grid-cols-3 gap-1 items-center'>
                    <p className='text-xs text-zinc-400 inline-flex gap-2'><GrLike />1</p>
                    <p className='text-xs text-blue-400 inline-flex gap-1 items-center  rounded-lg'><IoEyeOutline />{tv?.view}</p>
                    </div>
                    
                    </div>
                </div>
                </div>)
       }
       </div>
   
  </div>
    );
};

export default DailyNews;