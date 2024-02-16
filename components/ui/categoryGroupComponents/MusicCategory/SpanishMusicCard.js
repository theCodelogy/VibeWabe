'use client'

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';
import { FaCirclePlay } from "react-icons/fa6";
//music imag
import Image from 'next/image';
import { useTranslation } from 'react-i18next';
import Link from 'next/link';


const SpanishMusicCard = ({spanish}) => {
    const {t} = useTranslation();
    
    return (
        <div className='container mx-auto px-5'>
            <h3 className='text-white text-xl font-bold mb-8 px-5 '>Spanish Music</h3>
            <Swiper 
                slidesPerView={1}
                spaceBetween={10}
                pagination={{
                clickable: true,
                }}
                breakpoints={{
                640: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
                768: {
                    slidesPerView: 4,
                    spaceBetween: 40,
                },
                1024: {
                    slidesPerView: 5,
                    spaceBetween: 50,
                },
                }}
                modules={[Pagination]}
                className="mySwiper bg-zinc-950  h-80 rounded-md"
            >
                {
                    spanish.map(music => <SwiperSlide key={music?._id}>
                        <div className='group relative rounded-lg lg:w-48 md:w-48 w-auto lg:h-48 md:h-48 h-56 mt-5 mx-5 py-3'>
                                <Link href={`/music/${music?._id}`}>
                                <Image className='w-full h-full rounded-lg mb-2 transition duration-300' src={music?.thambnail} width={200} height={200} alt='slice image'/>
                                
                                <div className='absolute text-3xl text-white rounded-lg -top-0 left-0  flex justify-center items-center lg:w-48 md:w-48 w-full lg:h-48 md:h-48 h-56 bg-black bg-opacity-55 opacity-0 group-hover:opacity-100 transition-opacity duration-300 '>
                                    <FaCirclePlay className='cursor-pointer'></FaCirclePlay>
                                </div>
                            <h3 className='text-white hover:text-sky-400'>{music?.title}</h3>
                            </Link>
                            <p className='text-sm text-zinc-500'>{music?.singerName}</p>
                        </div>
                    </SwiperSlide>)
                }
            </Swiper>
        </div>
    );
};

export default SpanishMusicCard;