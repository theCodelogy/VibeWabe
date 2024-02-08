'use client'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-creative';
// import required modules
import { EffectCreative } from 'swiper/modules';
import Image from 'next/image';
//images
import banner1 from '@/assets/channelImage/musicpic.jpg';
import banner2 from '@/assets/channelImage/show.webp';
import banner3 from '@/assets/channelImage/sports.webp';
import banner4 from '@/assets/channelImage/travel.jpg';

const ChannelBanner2 = () => {
    return (
        <div>
            <div className='container mx-auto'>
          {/*middle slider */}
            <div>
         
            <div className='grid grid-cols-4 gap-3 '>
                {/* first image */}
        <div className="group relative   mt-5 col-span-2">
        <Image className='w-full h-[200px] rounded-lg transition duration-300' src={banner2} alt='slice image'/>
        <div className="absolute text-3xl text-white -top-0 left-0  flex justify-center items-center h-full w-full bg-black bg-opacity-55 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
        <h2>TV Shows</h2>
              </div>
              </div>
              {/* second image */}
        <div className="group relative   mt-5 col-span-2">
        <Image className='w-full h-[200px] rounded-lg transition duration-300' src={banner1} alt='slice image'/>
        <div className="absolute text-3xl text-white -top-0 left-0  flex justify-center items-center h-full w-full bg-black bg-opacity-55 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
        <h2>News</h2>
              </div>
              </div>
              {/* third image */}
        <div className="group relative  col-span-2">
        <Image className='w-full h-[200px] rounded-lg  transition duration-300' src={banner3} alt='slice image'/>
        <div className="absolute text-3xl text-white -top-0 left-0  flex justify-center items-center h-full w-full bg-black bg-opacity-55 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
        <h2>Sports</h2>
              </div>
              </div>
              {/* fourth image */}
        <div className="group relative col-span-2">
        <Image className='w-full h-[200px] rounded-lg  transition duration-300' src={banner4} alt='slice image'/>
        <div className="absolute text-3xl text-white -top-0 left-0  flex justify-center items-center h-full w-full bg-black bg-opacity-55 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
        <h2>Travel</h2>
              </div>
              </div>
              </div>
            </div>
        </div> 
        </div>
    );
};

export default ChannelBanner2;