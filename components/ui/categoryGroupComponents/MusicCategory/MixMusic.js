'use client'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';

// import required modules
import { EffectCards } from 'swiper/modules';



import Image from "next/image";
import musicImg1 from '@/assets/Musics/CategoryImg/newupload6.jpg'
import musicImg2 from '@/assets/Musics/CategoryImg/newupload7.jpg'
import musicImg3 from '@/assets/Musics/CategoryImg/newupload1.jpg'
import musicImg4 from '@/assets/Musics/CategoryImg/newupload5.jpg'
import musicImg5 from '@/assets/Musics/CategoryImg/newupload3.jpg'
import musicImg6 from '@/assets/Musics/CategoryImg/newupload4.jpg'
import { FaCirclePlay } from 'react-icons/fa6';
import Link from 'next/link';

const MixMusic = ({romanticMusics}) => {
    return (
        <div>
           <div className="my-5 bg-black px-5 pb-10">
            <section className="text-gray-600 body-font">
                <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center justify-around">
                    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                        <h1 className="title-font sm:text-4xl text-3xl mb-8 font-medium text-white">Recently <span className="text-red-500">played Music</span></h1>
                        <p className="mb-10 leading-relaxed text-zinc-300 lg:w-2/3 w-auto ">
                        This week Green Day get back to basics on a hooky, heavy pop record, Sleater-Kinney plays with a sense of cathartic purpose, and Kid Cudis ninth effort features all the trademark humming, production, and introspective lyrics fans expect.
                        </p>
                        <div className="flex justify-center">
                            <button className=" inline-flex text-white bg-gradient-to-r from-red-600 to-zinc-500  border-0 py-2 px-6 focus:outline-none hover:from-zinc-500 hover:to-red-600 font-semibold duration-300 transition rounded text-md">
                                See More Music
                            </button>
                        </div>
                    </div>
                        <div className="flex flex-col  lg:pr-12">
                            <Swiper
                                effect={'cards'}
                                grabCursor={true}
                                modules={[EffectCards]}
                                className="mySwiper h-96 w-64"
                            >
                                {
                                    romanticMusics.map(romanticMusic => <SwiperSlide key={romanticMusic?._id}> 
                                    <Link href={`/music/${romanticMusic?._id}`}>
                                    <div className='group relative rounded-lg h-full w-full mt-5 mx-5'>
                                        <Image className='w-full h-full object-fill rounded-lg mb-2 transition duration-300' src={romanticMusic?.thambnail} height={100} width={100} alt='slice image'/>
                                        <div className='absolute text-3xl text-white rounded-lg -top-0 left-0  flex justify-center items-center h-full w-full bg-black bg-opacity-55 opacity-0 group-hover:opacity-100 transition-opacity duration-300 '>
                                            <FaCirclePlay className='cursor-pointer'></FaCirclePlay>
                                        </div>
                                    </div> 
                                    </Link>
                                </SwiperSlide>)
                                }
                            
                            
                            <SwiperSlide>
                            <div className='group relative rounded-lg h-full w-full mt-5 mx-5'>
                                <Image className='w-full h-full rounded-lg mb-2 transition duration-300' src={musicImg2} alt='slice image'/>
                                <div className='absolute text-3xl text-white rounded-lg -top-0 left-0  flex justify-center items-center h-full w-full bg-black bg-opacity-55 opacity-0 group-hover:opacity-100 transition-opacity duration-300 '>
                                    <FaCirclePlay className='cursor-pointer'></FaCirclePlay>
                                </div>
                            </div>
                            </SwiperSlide>
                            <SwiperSlide>
                            <div className='group relative rounded-lg h-full w-full mt-5 mx-5'>
                                <Image className='w-full h-full rounded-lg mb-2 transition duration-300' src={musicImg3} alt='slice image'/>
                                <div className='absolute text-3xl text-white rounded-lg -top-0 left-0  flex justify-center items-center h-full w-full bg-black bg-opacity-55 opacity-0 group-hover:opacity-100 transition-opacity duration-300 '>
                                    <FaCirclePlay className='cursor-pointer'></FaCirclePlay>
                                </div>
                            </div>
                            </SwiperSlide>
                            <SwiperSlide>
                            <div className='group relative rounded-lg h-full w-full mt-5 mx-5'>
                                <Image className='w-full h-full rounded-lg mb-2 transition duration-300' src={musicImg4} alt='slice image'/>
                                <div className='absolute text-3xl text-white rounded-lg -top-0 left-0  flex justify-center items-center h-full w-full bg-black bg-opacity-55 opacity-0 group-hover:opacity-100 transition-opacity duration-300 '>
                                    <FaCirclePlay className='cursor-pointer'></FaCirclePlay>
                                </div>
                            </div>
                            </SwiperSlide>
                            <SwiperSlide>
                            <div className='group relative rounded-lg h-full w-full mt-5 mx-5'>
                                <Image className='w-full h-full rounded-lg mb-2 transition duration-300' src={musicImg5} alt='slice image'/>
                                <div className='absolute text-3xl text-white rounded-lg -top-0 left-0  flex justify-center items-center h-full w-full bg-black bg-opacity-55 opacity-0 group-hover:opacity-100 transition-opacity duration-300 '>
                                    <FaCirclePlay className='cursor-pointer'></FaCirclePlay>
                                </div>
                            </div>
                            </SwiperSlide>
                            <SwiperSlide>
                            <div className='group relative rounded-lg h-full w-full mt-5 mx-5'>
                                <Image className='w-full h-full rounded-lg mb-2 transition duration-300' src={musicImg6} alt='slice image'/>
                                <div className='absolute text-3xl text-white rounded-lg -top-0 left-0  flex justify-center items-center h-full w-full bg-black bg-opacity-55 opacity-0 group-hover:opacity-100 transition-opacity duration-300 '>
                                    <FaCirclePlay className='cursor-pointer'></FaCirclePlay>
                                </div>
                            </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </section>
        </div>
        </div>
    );
};

export default MixMusic;