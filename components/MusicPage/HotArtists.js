'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';
import Image from 'next/image';

//images
import artists1 from '@/assets/music/artists1.jpg';
import artists2 from '@/assets/music/artists2.jpeg';
import artists3 from '@/assets/music/artists3.webp';
import artists4 from '@/assets/music/artists4.jpg';
import artists5 from '@/assets/music/artists5.webp';


const HotArtists = () => {
    return (
        <div className='my-15 container mx-auto px-10 mb-10'>
             <h1 className='text-2xl font-bold text-white py-3 border-b-2 border-white mb-6 '>Hot Artists</h1>
             <Swiper
        slidesPerView={4}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
        breakpoints={{
            // For small device
            425: {
              slidesPerView: 1,
            },
            // For medium device
            768: {
              slidesPerView: 2,
            },
            // For larger screens 
            1024: {
              slidesPerView: 4,
            },
          }}
      >
        <SwiperSlide>
            <div className='w-full h-full relative group'>
            <Image className='w-[200px] h-[200px] rounded-full contain overflow-hidden ml-10 transition duration-300 transform group-hover:scale-110' src={artists1} alt='artists'/>
            
            <h3 className='text-xl text-gray-300 text-center mt-5'>Taylor Swift</h3>
            
            </div>
        
        </SwiperSlide>
        <SwiperSlide>
        <div className='w-full h-full relative group'>
            <Image className='w-[200px] h-[200px] rounded-full contain overflow-hidden ml-10 transition duration-300 transform group-hover:scale-110' src={artists2} alt='artists'/>
            <h3 className='text-xl text-gray-300 text-center mt-5'>Katy Perry</h3>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='w-full h-full relative group'>
            <Image className='w-[200px] h-[200px] rounded-full contain overflow-hidden ml-10 transition duration-300 transform group-hover:scale-110' src={artists3} alt='artists'/>
            <h3 className='text-xl text-gray-300 text-center mt-5'>Drake</h3>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='w-full h-full relative group'>
            <Image className='w-[200px] h-[200px] rounded-full contain overflow-hidden ml-10 transition duration-300 transform group-hover:scale-110' src={artists4} alt='artists'/>
            <h3 className='text-xl text-gray-300 text-center mt-5'>Ed Sheeran</h3>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='w-full h-full relative group'>
            <Image className='w-[200px] h-[200px] rounded-full contain overflow-hidden ml-10 transition duration-300 transform group-hover:scale-110' src={artists5} alt='artists'/>
            <h3 className='text-xl text-gray-300 text-center mt-5'>Nicki Minaj</h3>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='w-full h-full relative group'>
            <Image className='w-[200px] h-[200px] rounded-full contain overflow-hidden ml-10 transition duration-300 transform group-hover:scale-110' src={artists1} alt='artists'/>
            <h3 className='text-xl text-gray-300 text-center mt-5'>Taylor Swift</h3>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='w-full h-full relative group'>
            <Image className='w-[200px] h-[200px] rounded-full contain overflow-hidden ml-10 transition duration-300 transform group-hover:scale-110' src={artists2} alt='artists'/>
            <h3 className='text-xl text-gray-300 text-center mt-5'>Katy Perry</h3>
            </div>
        </SwiperSlide>

      </Swiper>
        </div>
    );
};

export default HotArtists;