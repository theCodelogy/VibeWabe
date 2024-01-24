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
import musicImg1 from '@/assets/Musics/CategoryImg/card2.jpg'
import musicImg2 from '@/assets/Musics/CategoryImg/card23.jpg'
import musicImg3 from '@/assets/Musics/CategoryImg/baaa.png'
import musicImg4 from '@/assets/Musics/CategoryImg/categorybanner22.jpeg'
import musicImg5 from '@/assets/Musics/CategoryImg/card4.jpg'
import musicImg6 from '@/assets/Musics/CategoryImg/Categorybanner5.jpg'


const NewMusicCard = () => {
    return (
        <div className='container mx-auto px-5'>
            <h3 className='text-white text-xl font-bold mb-8 px-5'>Music Album</h3>
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
                className="mySwiper bg-zinc-950 "
            >
                <SwiperSlide>
                    <div className='group relative rounded-lg lg:w-48 md:w-48 w-auto lg:h-48 md:h-48 h-56 mt-5 mb-20 mx-5 m-auto'>
                            <Image className='w-full h-full rounded-lg mb-2 transition duration-300' src={musicImg1} alt='slice image'/>
                            <div className='absolute text-3xl text-white rounded-lg -top-0 left-0  flex justify-center items-center lg:w-48 md:w-48 w-full lg:h-48 md:h-48 h-56 bg-black bg-opacity-55 opacity-0 group-hover:opacity-100 transition-opacity duration-300 '>
                                <FaCirclePlay className='cursor-pointer'></FaCirclePlay>
                            </div>
                        <h3 className='text-white hover:text-sky-400'>Brand new song</h3>
                        <p className='text-sm text-zinc-500'>Noah Kahan, Sam Fender, I</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='group relative rounded-lg lg:w-48 md:w-48 w-auto lg:h-48 md:h-48 h-56 mt-5 mx-5'>
                            <Image className='w-full h-full rounded-lg mb-2 transition duration-300' src={musicImg2} alt='slice image'/>
                            <div className='absolute text-3xl text-white rounded-lg -top-0 left-0  flex justify-center items-center lg:w-48 md:w-48 w-full lg:h-48 md:h-48 h-56 bg-black bg-opacity-55 opacity-0 group-hover:opacity-100 transition-opacity duration-300 '>
                                <FaCirclePlay className='cursor-pointer'></FaCirclePlay>
                            </div>
                        <h3 className='text-white hover:text-sky-400'>Brand new song</h3>
                        <p className='text-sm text-zinc-500'>Noah Kahan, Sam Fender, I</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='group relative rounded-lg lg:w-48 md:w-48 w-auto lg:h-48 md:h-48 h-56 mt-5 mx-5'>
                            <Image className='w-full h-full rounded-lg mb-2 transition duration-300' src={musicImg3} alt='slice image'/>
                            <div className='absolute text-3xl text-white rounded-lg -top-0 left-0  flex justify-center items-center lg:w-48 md:w-48 w-full lg:h-48 md:h-48 h-56 bg-black bg-opacity-55 opacity-0 group-hover:opacity-100 transition-opacity duration-300 '>
                                <FaCirclePlay className='cursor-pointer'></FaCirclePlay>
                            </div>
                        <h3 className='text-white hover:text-sky-400'>Brand new song</h3>
                        <p className='text-sm text-zinc-500'>Noah Kahan, Sam Fender, I</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='group relative rounded-lg lg:w-48 md:w-48 w-auto lg:h-48 md:h-48 h-56 mt-5 mx-5'>
                            <Image className='w-full h-full rounded-lg mb-2 transition duration-300' src={musicImg4} alt='slice image'/>
                            <div className='absolute text-3xl text-white rounded-lg -top-0 left-0  flex justify-center items-center lg:w-48 md:w-48 w-full lg:h-48 md:h-48 h-56 bg-black bg-opacity-55 opacity-0 group-hover:opacity-100 transition-opacity duration-300 '>
                                <FaCirclePlay className='cursor-pointer'></FaCirclePlay>
                            </div>
                        <h3 className='text-white hover:text-sky-400'>Brand new song</h3>
                        <p className='text-sm text-zinc-500'>Noah Kahan, Sam Fender, I</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='group relative rounded-lg lg:w-48 md:w-48 w-auto lg:h-48 md:h-48 h-56 mt-5 mx-5'>
                            <Image className='w-full h-full rounded-lg mb-2 transition duration-300' src={musicImg5} alt='slice image'/>
                            <div className='absolute text-3xl text-white rounded-lg -top-0 left-0  flex justify-center items-center lg:w-48 md:w-48 w-full lg:h-48 md:h-48 h-56 bg-black bg-opacity-55 opacity-0 group-hover:opacity-100 transition-opacity duration-300 '>
                                <FaCirclePlay className='cursor-pointer'></FaCirclePlay>
                            </div>
                        <h3 className='text-white hover:text-sky-400'>Brand new song</h3>
                        <p className='text-sm text-zinc-500'>Noah Kahan, Sam Fender, I</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='group relative rounded-lg lg:w-48 md:w-48 w-auto lg:h-48 md:h-48 h-56 mt-5 mx-5'>
                            <Image className='w-full h-full rounded-lg mb-2 transition duration-300' src={musicImg6} alt='slice image'/>
                            <div className='absolute text-3xl text-white rounded-lg -top-0 left-0  flex justify-center items-center lg:w-48 md:w-48 w-full lg:h-48 md:h-48 h-56 bg-black bg-opacity-55 opacity-0 group-hover:opacity-100 transition-opacity duration-300 '>
                                <FaCirclePlay className='cursor-pointer'></FaCirclePlay>
                            </div>
                        <h3 className='text-white hover:text-sky-400'>Brand new song</h3>
                        <p className='text-sm text-zinc-500'>Noah Kahan, Sam Fender, I</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='group relative rounded-lg lg:w-48 md:w-48 w-auto lg:h-48 md:h-48 h-56 mt-5 mx-5'>
                            <Image className='w-full h-full rounded-lg mb-2 transition duration-300' src={musicImg3} alt='slice image'/>
                            <div className='absolute text-3xl text-white rounded-lg -top-0 left-0  flex justify-center items-center lg:w-48 md:w-48 w-full lg:h-48 md:h-48 h-56 bg-black bg-opacity-55 opacity-0 group-hover:opacity-100 transition-opacity duration-300 '>
                                <FaCirclePlay className='cursor-pointer'></FaCirclePlay>
                            </div>
                        <h3 className='text-white hover:text-sky-400'>Brand new song</h3>
                        <p className='text-sm text-zinc-500'>Noah Kahan, Sam Fender, I</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='group relative rounded-lg lg:w-48 md:w-48 w-auto lg:h-48 md:h-48 h-56 mt-5 mx-5'>
                            <Image className='w-full h-full rounded-lg mb-2 transition duration-300' src={musicImg1} alt='slice image'/>
                            <div className='absolute text-3xl text-white rounded-lg -top-0 left-0  flex justify-center items-center lg:w-48 md:w-48 w-full lg:h-48 md:h-48 h-56 bg-black bg-opacity-55 opacity-0 group-hover:opacity-100 transition-opacity duration-300 '>
                                <FaCirclePlay className='cursor-pointer'></FaCirclePlay>
                            </div>
                        <h3 className='text-white hover:text-sky-400'>Brand new song</h3>
                        <p className='text-sm text-zinc-500'>Noah Kahan, Sam Fender, I</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='group relative rounded-lg lg:w-48 md:w-48 w-auto lg:h-48 md:h-48 h-56 mt-5 mx-5'>
                            <Image className='w-full h-full rounded-lg mb-2 transition duration-300' src={musicImg4} alt='slice image'/>
                            <div className='absolute text-3xl text-white rounded-lg -top-0 left-0  flex justify-center items-center lg:w-48 md:w-48 w-full lg:h-48 md:h-48 h-56 bg-black bg-opacity-55 opacity-0 group-hover:opacity-100 transition-opacity duration-300 '>
                                <FaCirclePlay className='cursor-pointer'></FaCirclePlay>
                            </div>
                        <h3 className='text-white hover:text-sky-400'>Brand new song</h3>
                        <p className='text-sm text-zinc-500'>Noah Kahan, Sam Fender, I</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='group relative rounded-lg lg:w-48 md:w-48 w-auto lg:h-48 md:h-48 h-56 mt-5 mx-5'>
                            <Image className='w-full h-full rounded-lg mb-2 transition duration-300' src={musicImg6} alt='slice image'/>
                            <div className='absolute text-3xl text-white rounded-lg -top-0 left-0  flex justify-center items-center lg:w-48 md:w-48 w-full lg:h-48 md:h-48 h-56 bg-black bg-opacity-55 opacity-0 group-hover:opacity-100 transition-opacity duration-300 '>
                                <FaCirclePlay className='cursor-pointer'></FaCirclePlay>
                            </div>
                        <h3 className='text-white hover:text-sky-400'>Brand new song</h3>
                        <p className='text-sm text-zinc-500'>Noah Kahan, Sam Fender, I</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='group relative rounded-lg lg:w-48 md:w-48 w-auto lg:h-48 md:h-48 h-56 mt-5 mx-5'>
                            <Image className='w-full h-full rounded-lg mb-2 transition duration-300' src={musicImg5} alt='slice image'/>
                            <div className='absolute text-3xl text-white rounded-lg -top-0 left-0  flex justify-center items-center lg:w-48 md:w-48 w-full lg:h-48 md:h-48 h-56 bg-black bg-opacity-55 opacity-0 group-hover:opacity-100 transition-opacity duration-300 '>
                                <FaCirclePlay className='cursor-pointer'></FaCirclePlay>
                            </div>
                        <h3 className='text-white hover:text-sky-400'>Brand new song</h3>
                        <p className='text-sm text-zinc-500'>Noah Kahan, Sam Fender, I</p>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default NewMusicCard;