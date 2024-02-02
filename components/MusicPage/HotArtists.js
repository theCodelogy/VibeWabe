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
import { useTranslation } from 'react-i18next';


const HotArtists = () => {
  const {t} = useTranslation();
    return (
        <div className='my-15 container mx-auto px-10 mb-10'>
             <h1 className='text-xl font-bold text-slate-300 py-3 mb-6 '>{t("music:hotartists")}</h1>
             <Swiper
        slidesPerView={1}
        spaceBetween={1}
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
              slidesPerView: 1,
            },
            // For larger screens 
            1024: {
              slidesPerView: 1,
            },
          }}
      >
        <SwiperSlide>
            <div className='grid grid-cols-8 gap-4'>
            <div className='w-full h-full relative group'>
            <Image className='w-[80px] h-[80px] rounded-full contain overflow-hidden transition duration-300 transform group-hover:scale-110 mx-auto' src={artists1} alt='artists'/>
            
            <h3 className='text-sm mx-auto text-zinc-500 hover:text-blue-500 text-center mt-5'>Taylor Swift</h3>
            
            </div>
            <div className='w-full h-full relative group'>
            <Image className='w-[80px] h-[80px] rounded-full contain overflow-hidden transition duration-300 transform group-hover:scale-110 mx-auto' src={artists2} alt='artists'/>
            <h3 className='text-sm mx-auto text-zinc-500 hover:text-blue-500 text-center mt-5'>Katy Perry</h3>
            </div>
            <div className='w-full h-full relative group'>
            <Image className='w-[80px] h-[80px] rounded-full contain overflow-hidden transition duration-300 transform group-hover:scale-110 mx-auto' src={artists3} alt='artists'/>
            <h3 className='mx-auto text-sm text-zinc-500 hover:text-blue-500 text-center mt-5'>Drake</h3>
            </div>
            <div className='w-full h-full relative group'>
            <Image className='w-[80px] h-[80px] rounded-full contain overflow-hidden transition duration-300 transform group-hover:scale-110 mx-auto' src={artists5} alt='artists'/>
            
            <h3 className='text-sm mx-auto text-zinc-500 hover:text-blue-500 text-center mt-5'>Taylor Swift</h3>
            
            </div>
            <div className='w-full h-full relative group'>
            <Image className='w-[80px] h-[80px] rounded-full contain overflow-hidden transition duration-300 transform group-hover:scale-110 mx-auto' src={artists4} alt='artists'/>
            <h3 className='text-sm mx-auto text-zinc-500 hover:text-blue-500 text-center mt-5'>Katy Perry</h3>
            </div>
            <div className='w-full h-full relative group'>
            <Image className='w-[80px] h-[80px] rounded-full contain overflow-hidden transition duration-300 transform group-hover:scale-110 mx-auto' src={artists2} alt='artists'/>
            <h3 className='mx-auto text-sm text-zinc-500 hover:text-blue-500 text-center mt-5'>Drake</h3>
            </div>
            <div className='w-full h-full relative group'>
            <Image className='w-[80px] h-[80px] rounded-full contain overflow-hidden transition duration-300 transform group-hover:scale-110 mx-auto' src={artists1} alt='artists'/>
            <h3 className='mx-auto text-sm text-zinc-500 hover:text-blue-500 text-center mt-5'>Drake</h3>
            </div>
            <div className='w-full h-full relative group'>
            <Image className='w-[80px] h-[80px] rounded-full contain overflow-hidden transition duration-300 transform group-hover:scale-110 mx-auto' src={artists3} alt='artists'/>
            <h3 className='mx-auto text-sm text-zinc-500 hover:text-blue-500 text-center mt-5'>Drake</h3>
            </div>
            </div>
        
        </SwiperSlide>
        
        <SwiperSlide>
            <div className='grid grid-cols-8 gap-4'>
            <div className='w-full h-full relative group'>
            <Image className='w-[80px] h-[80px] rounded-full contain overflow-hidden transition duration-300 transform group-hover:scale-110 mx-auto' src={artists1} alt='artists'/>
            
            <h3 className='text-sm mx-auto text-zinc-500 hover:text-blue-500 text-center mt-5'>Taylor Swift</h3>
            
            </div>
            <div className='w-full h-full relative group'>
            <Image className='w-[80px] h-[80px] rounded-full contain overflow-hidden transition duration-300 transform group-hover:scale-110 mx-auto' src={artists2} alt='artists'/>
            <h3 className='text-sm mx-auto text-zinc-500 hover:text-blue-500 text-center mt-5'>Katy Perry</h3>
            </div>
            <div className='w-full h-full relative group'>
            <Image className='w-[80px] h-[80px] rounded-full contain overflow-hidden transition duration-300 transform group-hover:scale-110 mx-auto' src={artists3} alt='artists'/>
            <h3 className='mx-auto text-sm text-zinc-500 hover:text-blue-500 text-center mt-5'>Drake</h3>
            </div>
            <div className='w-full h-full relative group'>
            <Image className='w-[80px] h-[80px] rounded-full contain overflow-hidden transition duration-300 transform group-hover:scale-110 mx-auto' src={artists4} alt='artists'/>
            
            <h3 className='text-sm mx-auto text-zinc-500 hover:text-blue-500 text-center mt-5'>Taylor Swift</h3>
            
            </div>
            <div className='w-full h-full relative group'>
            <Image className='w-[80px] h-[80px] rounded-full contain overflow-hidden transition duration-300 transform group-hover:scale-110 mx-auto' src={artists2} alt='artists'/>
            <h3 className='text-sm mx-auto text-zinc-500 hover:text-blue-500 text-center mt-5'>Katy Perry</h3>
            </div>
            <div className='w-full h-full relative group'>
            <Image className='w-[80px] h-[80px] rounded-full contain overflow-hidden transition duration-300 transform group-hover:scale-110 mx-auto' src={artists3} alt='artists'/>
            <h3 className='mx-auto text-sm text-zinc-500 hover:text-blue-500 text-center mt-5'>Drake</h3>
            </div>
            <div className='w-full h-full relative group'>
            <Image className='w-[80px] h-[80px] rounded-full contain overflow-hidden transition duration-300 transform group-hover:scale-110 mx-auto' src={artists4} alt='artists'/>
            <h3 className='mx-auto text-sm text-zinc-500 hover:text-blue-500 text-center mt-5'>Drake</h3>
            </div>
            <div className='w-full h-full relative group'>
            <Image className='w-[80px] h-[80px] rounded-full contain overflow-hidden transition duration-300 transform group-hover:scale-110 mx-auto' src={artists3} alt='artists'/>
            <h3 className='mx-auto text-sm text-zinc-500 hover:text-blue-500 text-center mt-5'>Drake</h3>
            </div>
            </div>
        
        </SwiperSlide>
       
        

      </Swiper>
        </div>
    );
};

export default HotArtists;