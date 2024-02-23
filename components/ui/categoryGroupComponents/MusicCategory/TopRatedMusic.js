'use client'

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';


//music banner img
import Image from 'next/image';
import { useTranslation } from 'react-i18next';
import Link from 'next/link';
import { IoIosMusicalNotes } from 'react-icons/io';

const TopRatedMusic = ({TopRatedMusics}) => {
    return (
        <div className='mb-5 px-5 container mx-auto '>
        <h3 className='text-white text-xl font-bold'>Top Rated Musics Musics</h3>
        <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper mt-5"
      >
        
        {
          TopRatedMusics.map(music => <SwiperSlide key={music?._id}>
                <Link href={`/music/${music?._id}`}>
                <div className='flex gap-4 rounded-md hover:bg-zinc-700 py-3 px-3 my-6 bg-zinc-950 mb-16 transition duration-500'> 
                    <div className='group relative rounded-lg h-16 w-16'>
                        <Image className='w-full h-full rounded-lg mb-2 transition duration-300 object-cover' src={music?.thambnail} width={50} height={50} alt='slice image'/>
                        <div className='absolute text-xl text-white rounded-lg -top-0 left-0  flex justify-center items-center h-16 w-16 bg-black bg-opacity-55 opacity-0 group-hover:opacity-100 transition-opacity duration-300 '>
                        <IoIosMusicalNotes className='cursor-pointer'></IoIosMusicalNotes>
                        </div>
                    </div>
                    <div className='text-white '>
                    <h3 className='hover:text-sky-400'>{music?.title}</h3>
                    <p className='text-xs text-zinc-400'>Singer- {music?.singerName}</p>
                    </div>
                </div>
                </Link>
            </SwiperSlide>)
        }
    </Swiper>
   </div>
    );
};

export default TopRatedMusic;