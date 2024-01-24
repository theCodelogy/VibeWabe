'use client'

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';


//music banner img
import Image from 'next/image';
import banner1 from '@/assets/Musics/CategoryImg/Categorybanner11.jpg'
import banner2 from '@/assets/Musics/CategoryImg/Categorybanner16.jpg'
import banner3 from '@/assets/Musics/CategoryImg/Categorybanner118.jpg'
import banner6 from '@/assets/Musics/CategoryImg/Categorybanner1.jpg'
import banner5 from '@/assets/Musics/CategoryImg/Categorybanner14.jpg'
import banner4 from '@/assets/Musics/CategoryImg/Categorybanner3.jpg'
import { FaCirclePlay } from 'react-icons/fa6';

const MusicCategory = () => {
    return (
        <div className='mb-32 px-5 container mx-auto mt-20'>
        <h3 className='text-white text-xl font-bold'>Most Popular Song</h3>
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
        className="mySwiper mt-10"
      >
        <SwiperSlide>
                <div className='flex gap-4 rounded-md hover:bg-zinc-700 py-2 px-3 my-6'>
                    <div className='group relative rounded-lg h-16 w-16'>
                        <Image className='w-full h-full rounded-lg mb-2 transition duration-300' src={banner1} alt='slice image'/>
                        <div className='absolute text-xl text-white rounded-lg -top-0 left-0  flex justify-center items-center h-16 w-16 bg-black bg-opacity-55 opacity-0 group-hover:opacity-100 transition-opacity duration-300 '>
                            <FaCirclePlay className='cursor-pointer'></FaCirclePlay>
                        </div>
                    </div>
                    <div className='text-white '>
                    <h3 className='hover:text-sky-400'>I Remember Everything feat. Kacey Musgraves</h3>
                    <p className='text-xs text-zinc-400'>Zach Bryan feat. Kacey Musgraves</p>
                    </div>
                </div>
                <div className='flex gap-4 rounded-md hover:bg-zinc-700 py-2 px-3 my-6'>
                    <div className='group relative rounded-lg h-16 w-16'>
                        <Image className='w-full h-full rounded-lg mb-2 transition duration-300' src={banner2} alt='slice image'/>
                        <div className='absolute text-xl text-white rounded-lg -top-0 left-0  flex justify-center items-center h-16 w-16 bg-black bg-opacity-55 opacity-0 group-hover:opacity-100 transition-opacity duration-300 '>
                            <FaCirclePlay className='cursor-pointer'></FaCirclePlay>
                        </div>
                    </div>
                    <div className='text-white '>
                    <h3 className='hover:text-sky-400'>I Remember Everything feat. Kacey Musgraves</h3>
                    <p className='text-xs text-zinc-400'>Zach Bryan feat. Kacey Musgraves</p>
                    </div>
                </div>
                <div className='flex gap-4 rounded-md hover:bg-zinc-700 py-2 px-3 my-6'>
                    <div className='group relative rounded-lg h-16 w-16'>
                        <Image className='w-full h-full rounded-lg mb-2 transition duration-300' src={banner3} alt='slice image'/>
                        <div className='absolute text-xl text-white rounded-lg -top-0 left-0  flex justify-center items-center h-16 w-16 bg-black bg-opacity-55 opacity-0 group-hover:opacity-100 transition-opacity duration-300 '>
                            <FaCirclePlay className='cursor-pointer'></FaCirclePlay>
                        </div>
                    </div>
                    <div className='text-white '>
                    <h3 className='hover:text-sky-400'>I Remember Everything feat. Kacey Musgraves</h3>
                    <p className='text-xs text-zinc-400'>Zach Bryan feat. Kacey Musgraves</p>
                    </div>
                </div>
        </SwiperSlide>
        {/* banner 2 */}
        <SwiperSlide>
                <div className='flex gap-4 rounded-md hover:bg-zinc-700 py-2 px-3 my-6'>
                    <div className='group relative rounded-lg h-16 w-16'>
                        <Image className='w-full h-full rounded-lg mb-2 transition duration-300' src={banner4} alt='slice image'/>
                        <div className='absolute text-xl text-white rounded-lg -top-0 left-0  flex justify-center items-center h-16 w-16 bg-black bg-opacity-55 opacity-0 group-hover:opacity-100 transition-opacity duration-300 '>
                            <FaCirclePlay className='cursor-pointer'></FaCirclePlay>
                        </div>
                    </div>
                    <div className='text-white '>
                    <h3 className='hover:text-sky-400'>I Remember Everything feat. Kacey Musgraves</h3>
                    <p className='text-xs text-zinc-400'>Zach Bryan feat. Kacey Musgraves</p>
                    </div>
                </div>
                <div className='flex gap-4 rounded-md hover:bg-zinc-700 py-2 px-3 my-6'>
                    <div className='group relative rounded-lg h-16 w-16'>
                        <Image className='w-full h-full rounded-lg mb-2 transition duration-300' src={banner5} alt='slice image'/>
                        <div className='absolute text-xl text-white rounded-lg -top-0 left-0  flex justify-center items-center h-16 w-16 bg-black bg-opacity-55 opacity-0 group-hover:opacity-100 transition-opacity duration-300 '>
                            <FaCirclePlay className='cursor-pointer'></FaCirclePlay>
                        </div>
                    </div>
                    <div className='text-white '>
                    <h3 className='hover:text-sky-400'>I Remember Everything feat. Kacey Musgraves</h3>
                    <p className='text-xs text-zinc-400'>Zach Bryan feat. Kacey Musgraves</p>
                    </div>
                </div>
                <div className='flex gap-4 rounded-md hover:bg-zinc-700 py-2 px-3 my-6'>
                    <div className='group relative rounded-lg h-16 w-16'>
                        <Image className='w-full h-full rounded-lg mb-2 transition duration-300' src={banner6} alt='slice image'/>
                        <div className='absolute text-xl text-white rounded-lg -top-0 left-0  flex justify-center items-center h-16 w-16 bg-black bg-opacity-55 opacity-0 group-hover:opacity-100 transition-opacity duration-300 '>
                            <FaCirclePlay className='cursor-pointer'></FaCirclePlay>
                        </div>
                    </div>
                    <div className='text-white '>
                    <h3 className='hover:text-sky-400'>I Remember Everything feat. Kacey Musgraves</h3>
                    <p className='text-xs text-zinc-400'>Zach Bryan feat. Kacey Musgraves</p>
                    </div>
                </div>
        </SwiperSlide>
        {/* banner 3 */}
        <SwiperSlide>
                <div className='flex gap-4 rounded-md hover:bg-zinc-700 py-2 px-3 my-6'>
                    <div className='group relative rounded-lg h-16 w-16'>
                        <Image className='w-full h-full rounded-lg mb-2 transition duration-300' src={banner1} alt='slice image'/>
                        <div className='absolute text-xl text-white rounded-lg -top-0 left-0  flex justify-center items-center h-16 w-16 bg-black bg-opacity-55 opacity-0 group-hover:opacity-100 transition-opacity duration-300 '>
                            <FaCirclePlay className='cursor-pointer'></FaCirclePlay>
                        </div>
                    </div>
                    <div className='text-white '>
                    <h3 className='hover:text-sky-400'>I Remember Everything feat. Kacey Musgraves</h3>
                    <p className='text-xs text-zinc-400'>Zach Bryan feat. Kacey Musgraves</p>
                    </div>
                </div>
                <div className='flex gap-4 rounded-md hover:bg-zinc-700 py-2 px-3 my-6'>
                    <div className='group relative rounded-lg h-16 w-16'>
                        <Image className='w-full h-full rounded-lg mb-2 transition duration-300' src={banner2} alt='slice image'/>
                        <div className='absolute text-xl text-white rounded-lg -top-0 left-0  flex justify-center items-center h-16 w-16 bg-black bg-opacity-55 opacity-0 group-hover:opacity-100 transition-opacity duration-300 '>
                            <FaCirclePlay className='cursor-pointer'></FaCirclePlay>
                        </div>
                    </div>
                    <div className='text-white '>
                    <h3 className='hover:text-sky-400'>I Remember Everything feat. Kacey Musgraves</h3>
                    <p className='text-xs text-zinc-400'>Zach Bryan feat. Kacey Musgraves</p>
                    </div>
                </div>
                <div className='flex gap-4 rounded-md hover:bg-zinc-700 py-2 px-3 my-6'>
                    <div className='group relative rounded-lg h-16 w-16'>
                        <Image className='w-full h-full rounded-lg mb-2 transition duration-300' src={banner3} alt='slice image'/>
                        <div className='absolute text-xl text-white rounded-lg -top-0 left-0  flex justify-center items-center h-16 w-16 bg-black bg-opacity-55 opacity-0 group-hover:opacity-100 transition-opacity duration-300 '>
                            <FaCirclePlay className='cursor-pointer'></FaCirclePlay>
                        </div>
                    </div>
                    <div className='text-white '>
                    <h3 className='hover:text-sky-400'>I Remember Everything feat. Kacey Musgraves</h3>
                    <p className='text-xs text-zinc-400'>Zach Bryan feat. Kacey Musgraves</p>
                    </div>
                </div>
        </SwiperSlide>
        {/* banner 4 */}
        <SwiperSlide>
                <div className='flex gap-4 rounded-md hover:bg-zinc-700 py-2 px-3 my-6'>
                    <div className='group relative rounded-lg h-16 w-16'>
                        <Image className='w-full h-full rounded-lg mb-2 transition duration-300' src={banner4} alt='slice image'/>
                        <div className='absolute text-xl text-white rounded-lg -top-0 left-0  flex justify-center items-center h-16 w-16 bg-black bg-opacity-55 opacity-0 group-hover:opacity-100 transition-opacity duration-300 '>
                            <FaCirclePlay className='cursor-pointer'></FaCirclePlay>
                        </div>
                    </div>
                    <div className='text-white '>
                    <h3 className='hover:text-sky-400'>I Remember Everything feat. Kacey Musgraves</h3>
                    <p className='text-xs text-zinc-400'>Zach Bryan feat. Kacey Musgraves</p>
                    </div>
                </div>
                <div className='flex gap-4 rounded-md hover:bg-zinc-700 py-2 px-3 my-6'>
                    <div className='group relative rounded-lg h-16 w-16'>
                        <Image className='w-full h-full rounded-lg mb-2 transition duration-300' src={banner5} alt='slice image'/>
                        <div className='absolute text-xl text-white rounded-lg -top-0 left-0  flex justify-center items-center h-16 w-16 bg-black bg-opacity-55 opacity-0 group-hover:opacity-100 transition-opacity duration-300 '>
                            <FaCirclePlay className='cursor-pointer'></FaCirclePlay>
                        </div>
                    </div>
                    <div className='text-white '>
                    <h3 className='hover:text-sky-400'>I Remember Everything feat. Kacey Musgraves</h3>
                    <p className='text-xs text-zinc-400'>Zach Bryan feat. Kacey Musgraves</p>
                    </div>
                </div>
                <div className='flex gap-4 rounded-md hover:bg-zinc-700 py-2 px-3 my-6'>
                    <div className='group relative rounded-lg h-16 w-16'>
                        <Image className='w-full h-full rounded-lg mb-2 transition duration-300' src={banner6} alt='slice image'/>
                        <div className='absolute text-xl text-white rounded-lg -top-0 left-0  flex justify-center items-center h-16 w-16 bg-black bg-opacity-55 opacity-0 group-hover:opacity-100 transition-opacity duration-300 '>
                            <FaCirclePlay className='cursor-pointer'></FaCirclePlay>
                        </div>
                    </div>
                    <div className='text-white '>
                    <h3 className='hover:text-sky-400'>I Remember Everything feat. Kacey Musgraves</h3>
                    <p className='text-xs text-zinc-400'>Zach Bryan feat. Kacey Musgraves</p>
                    </div>
                </div>
        </SwiperSlide>
        {/* banner 5 */}
        <SwiperSlide>
                <div className='flex gap-4 rounded-md hover:bg-zinc-700 py-2 px-3 my-6'>
                    <div className='group relative rounded-lg h-16 w-16'>
                        <Image className='w-full h-full rounded-lg mb-2 transition duration-300' src={banner1} alt='slice image'/>
                        <div className='absolute text-xl text-white rounded-lg -top-0 left-0  flex justify-center items-center h-16 w-16 bg-black bg-opacity-55 opacity-0 group-hover:opacity-100 transition-opacity duration-300 '>
                            <FaCirclePlay className='cursor-pointer'></FaCirclePlay>
                        </div>
                    </div>
                    <div className='text-white '>
                    <h3 className='hover:text-sky-400'>I Remember Everything feat. Kacey Musgraves</h3>
                    <p className='text-xs text-zinc-400'>Zach Bryan feat. Kacey Musgraves</p>
                    </div>
                </div>
                <div className='flex gap-4 rounded-md hover:bg-zinc-700 py-2 px-3 my-6'>
                    <div className='group relative rounded-lg h-16 w-16'>
                        <Image className='w-full h-full rounded-lg mb-2 transition duration-300' src={banner2} alt='slice image'/>
                        <div className='absolute text-xl text-white rounded-lg -top-0 left-0  flex justify-center items-center h-16 w-16 bg-black bg-opacity-55 opacity-0 group-hover:opacity-100 transition-opacity duration-300 '>
                            <FaCirclePlay className='cursor-pointer'></FaCirclePlay>
                        </div>
                    </div>
                    <div className='text-white '>
                    <h3 className='hover:text-sky-400'>I Remember Everything feat. Kacey Musgraves</h3>
                    <p className='text-xs text-zinc-400'>Zach Bryan feat. Kacey Musgraves</p>
                    </div>
                </div>
                <div className='flex gap-4 rounded-md hover:bg-zinc-700 py-2 px-3 my-6'>
                    <div className='group relative rounded-lg h-16 w-16'>
                        <Image className='w-full h-full rounded-lg mb-2 transition duration-300' src={banner3} alt='slice image'/>
                        <div className='absolute text-xl text-white rounded-lg -top-0 left-0  flex justify-center items-center h-16 w-16 bg-black bg-opacity-55 opacity-0 group-hover:opacity-100 transition-opacity duration-300 '>
                            <FaCirclePlay className='cursor-pointer'></FaCirclePlay>
                        </div>
                    </div>
                    <div className='text-white '>
                    <h3 className='hover:text-sky-400'>I Remember Everything feat. Kacey Musgraves</h3>
                    <p className='text-xs text-zinc-400'>Zach Bryan feat. Kacey Musgraves</p>
                    </div>
                </div>
        </SwiperSlide>
        {/* banner 6 */}
        <SwiperSlide>
                <div className='flex gap-4 rounded-md hover:bg-zinc-700 py-2 px-3 my-6'>
                    <div className='group relative rounded-lg h-16 w-16'>
                        <Image className='w-full h-full rounded-lg mb-2 transition duration-300' src={banner4} alt='slice image'/>
                        <div className='absolute text-xl text-white rounded-lg -top-0 left-0  flex justify-center items-center h-16 w-16 bg-black bg-opacity-55 opacity-0 group-hover:opacity-100 transition-opacity duration-300 '>
                            <FaCirclePlay className='cursor-pointer'></FaCirclePlay>
                        </div>
                    </div>
                    <div className='text-white '>
                    <h3 className='hover:text-sky-400'>I Remember Everything feat. Kacey Musgraves</h3>
                    <p className='text-xs text-zinc-400'>Zach Bryan feat. Kacey Musgraves</p>
                    </div>
                </div>
                <div className='flex gap-4 rounded-md hover:bg-zinc-700 py-2 px-3 my-6'>
                    <div className='group relative rounded-lg h-16 w-16'>
                        <Image className='w-full h-full rounded-lg mb-2 transition duration-300' src={banner5} alt='slice image'/>
                        <div className='absolute text-xl text-white rounded-lg -top-0 left-0  flex justify-center items-center h-16 w-16 bg-black bg-opacity-55 opacity-0 group-hover:opacity-100 transition-opacity duration-300 '>
                            <FaCirclePlay className='cursor-pointer'></FaCirclePlay>
                        </div>
                    </div>
                    <div className='text-white '>
                    <h3 className='hover:text-sky-400'>I Remember Everything feat. Kacey Musgraves</h3>
                    <p className='text-xs text-zinc-400'>Zach Bryan feat. Kacey Musgraves</p>
                    </div>
                </div>
                <div className='flex gap-4 rounded-md hover:bg-zinc-700 py-2 px-3 my-6'>
                    <div className='group relative rounded-lg h-16 w-16'>
                        <Image className='w-full h-full rounded-lg mb-2 transition duration-300' src={banner6} alt='slice image'/>
                        <div className='absolute text-xl text-white rounded-lg -top-0 left-0  flex justify-center items-center h-16 w-16 bg-black bg-opacity-55 opacity-0 group-hover:opacity-100 transition-opacity duration-300 '>
                            <FaCirclePlay className='cursor-pointer'></FaCirclePlay>
                        </div>
                    </div>
                    <div className='text-white '>
                    <h3 className='hover:text-sky-400'>I Remember Everything feat. Kacey Musgraves</h3>
                    <p className='text-xs text-zinc-400'>Zach Bryan feat. Kacey Musgraves</p>
                    </div>
                </div>
        </SwiperSlide>
    </Swiper>
   </div>
    );
};

export default MusicCategory;