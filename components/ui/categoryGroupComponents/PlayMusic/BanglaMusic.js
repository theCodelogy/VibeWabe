'use client'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';
import Image from 'next/image';
import { FaCirclePlay } from 'react-icons/fa6';
import banner1 from '@/assets/Musics/CategoryImg/played1.jpg'
import banner2 from '@/assets/Musics/CategoryImg/played2.jpg'
import banner3 from '@/assets/Musics/CategoryImg/played3.jpg'
import banner4 from '@/assets/Musics/CategoryImg/played4.jpg'
import banner5 from '@/assets/Musics/CategoryImg/played5.jpg'
import banner6 from '@/assets/Musics/CategoryImg/played6.jpg'
import banner7 from '@/assets/Musics/CategoryImg/played7.jpg'

const BanglaMusic = () => {
    return (
        <div>
            
            <div className="container mx-auto my-20 lg:px-5">
                <h1 className='text-white text-xl font-bold lg:px-5 mb-8'>Trending Bangla Music</h1>
                <div>
                <Swiper
                    effect={'coverflow'}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={4}
                    coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 3,
                    slideShadows: true,
                    }}
                    pagination={true}
                    modules={[EffectCoverflow, Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <div className='group relative lg:h-80 md:h-60 h-40 lg:w-64 md:w-60 w-full mt-5'>
                            <Image className='w-full h-full mb-2 transition duration-300' src={banner1} alt='slice image'/>
                            <div className='absolute text-3xl text-white -top-0 left-0  flex justify-center items-center h-full w-full bg-black bg-opacity-55 opacity-0 group-hover:opacity-100 transition-opacity duration-300 '>
                                <FaCirclePlay className='cursor-pointer'></FaCirclePlay>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='group relative lg:h-80 md:h-60 h-40 lg:w-64 md:w-60 w-full mt-5 mx-5'>
                            <Image className='w-full h-full mb-2 transition duration-300' src={banner2} alt='slice image'/>
                            <div className='absolute text-3xl text-white -top-0 left-0  flex justify-center items-center h-full w-full bg-black bg-opacity-55 opacity-0 group-hover:opacity-100 transition-opacity duration-300 '>
                                <FaCirclePlay className='cursor-pointer'></FaCirclePlay>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='group relative lg:h-80 md:h-60 h-40 lg:w-64 md:w-60 w-full mt-5 mx-5'>
                            <Image className='w-full h-full mb-2 transition duration-300' src={banner3} alt='slice image'/>
                            <div className='absolute text-3xl text-white -top-0 left-0  flex justify-center items-center h-full w-full bg-black bg-opacity-55 opacity-0 group-hover:opacity-100 transition-opacity duration-300 '>
                                <FaCirclePlay className='cursor-pointer'></FaCirclePlay>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='group relative lg:h-80 md:h-60 h-40 lg:w-64 md:w-60 w-full mt-5 mx-5'>
                            <Image className='w-full h-full mb-2 transition duration-300' src={banner4} alt='slice image'/>
                            <div className='absolute text-3xl text-white -top-0 left-0  flex justify-center items-center h-full w-full bg-black bg-opacity-55 opacity-0 group-hover:opacity-100 transition-opacity duration-300 '>
                                <FaCirclePlay className='cursor-pointer'></FaCirclePlay>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='group relative lg:h-80 md:h-60 h-40 lg:w-64 md:w-60 w-full mt-5 mx-5'>
                            <Image className='w-full h-full mb-2 transition duration-300' src={banner5} alt='slice image'/>
                            <div className='absolute text-3xl text-white -top-0 left-0  flex justify-center items-center h-full w-full bg-black bg-opacity-55 opacity-0 group-hover:opacity-100 transition-opacity duration-300 '>
                                <FaCirclePlay className='cursor-pointer'></FaCirclePlay>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='group relative lg:h-80 md:h-60 h-40 lg:w-64 md:w-60 w-full mt-5 mx-5'>
                            <Image className='w-full h-full mb-2 transition duration-300' src={banner6} alt='slice image'/>
                            <div className='absolute text-3xl text-white -top-0 left-0  flex justify-center items-center h-full w-full bg-black bg-opacity-55 opacity-0 group-hover:opacity-100 transition-opacity duration-300 '>
                                <FaCirclePlay className='cursor-pointer'></FaCirclePlay>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='group relative lg:h-80 md:h-60 h-40 lg:w-64 md:w-60 w-full mt-5 mx-5'>
                            <Image className='w-full h-full mb-2 transition duration-300' src={banner7} alt='slice image'/>
                            <div className='absolute text-3xl text-white -top-0 left-0  flex justify-center items-center h-full w-full bg-black bg-opacity-55 opacity-0 group-hover:opacity-100 transition-opacity duration-300 '>
                                <FaCirclePlay className='cursor-pointer'></FaCirclePlay>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='group relative lg:h-80 md:h-60 h-40 lg:w-64 md:w-60 w-full mt-5 mx-5'>
                            <Image className='w-full h-full mb-2 transition duration-300' src={banner2} alt='slice image'/>
                            <div className='absolute text-3xl text-white -top-0 left-0  flex justify-center items-center h-full w-full bg-black bg-opacity-55 opacity-0 group-hover:opacity-100 transition-opacity duration-300 '>
                                <FaCirclePlay className='cursor-pointer'></FaCirclePlay>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='group relative lg:h-80 md:h-60 h-40 lg:w-64 md:w-60 w-full mt-5 mx-5'>
                            <Image className='w-full h-full mb-2 transition duration-300' src={banner3} alt='slice image'/>
                            <div className='absolute text-3xl text-white -top-0 left-0  flex justify-center items-center h-full w-full bg-black bg-opacity-55 opacity-0 group-hover:opacity-100 transition-opacity duration-300 '>
                                <FaCirclePlay className='cursor-pointer'></FaCirclePlay>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='group relative lg:h-80 md:h-60 h-40 lg:w-64 md:w-60 w-full mt-5 mx-5'>
                            <Image className='w-full h-full mb-2 transition duration-300' src={banner4} alt='slice image'/>
                            <div className='absolute text-3xl text-white -top-0 left-0  flex justify-center items-center h-full w-full bg-black bg-opacity-55 opacity-0 group-hover:opacity-100 transition-opacity duration-300 '>
                                <FaCirclePlay className='cursor-pointer'></FaCirclePlay>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='group relative lg:h-80 md:h-60 h-40 lg:w-64 md:w-60 w-full mt-5 mx-5'>
                            <Image className='w-full h-full mb-2 transition duration-300' src={banner5} alt='slice image'/>
                            <div className='absolute text-3xl text-white -top-0 left-0  flex justify-center items-center h-full w-full bg-black bg-opacity-55 opacity-0 group-hover:opacity-100 transition-opacity duration-300 '>
                                <FaCirclePlay className='cursor-pointer'></FaCirclePlay>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='group relative lg:h-80 md:h-60 h-40 lg:w-64 md:w-60 w-full mt-5 mx-5'>
                            <Image className='w-full h-full mb-2 transition duration-300' src={banner6} alt='slice image'/>
                            <div className='absolute text-3xl text-white -top-0 left-0  flex justify-center items-center h-full w-full bg-black bg-opacity-55 opacity-0 group-hover:opacity-100 transition-opacity duration-300 '>
                                <FaCirclePlay className='cursor-pointer'></FaCirclePlay>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='group relative lg:h-80 md:h-60 h-40 lg:w-64 md:w-60 w-full mt-5 mx-5'>
                            <Image className='w-full h-full mb-2 transition duration-300' src={banner7} alt='slice image'/>
                            <div className='absolute text-3xl text-white -top-0 left-0  flex justify-center items-center h-full w-full bg-black bg-opacity-55 opacity-0 group-hover:opacity-100 transition-opacity duration-300 '>
                                <FaCirclePlay className='cursor-pointer'></FaCirclePlay>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
                </div>
            </div>
        </div>
    );
};

export default BanglaMusic;