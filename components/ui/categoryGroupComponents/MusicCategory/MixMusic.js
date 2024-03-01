'use client'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';

// import required modules
import { EffectCards } from 'swiper/modules';



import Image from "next/image";
import { FaCirclePlay } from 'react-icons/fa6';
import Link from 'next/link';
import { IoIosMusicalNotes } from 'react-icons/io';

const MixMusic = ({romanticMusics, category}) => {
    return (
        <div>
           <div className="my-5 bg-black px-5 pb-10">
            <section className="text-gray-600 body-font">
                <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center justify-around">
                    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                        <h1 className="title-font sm:text-4xl text-3xl mb-8 font-medium text-white">Favorite <span className="bg-gradient-to-r from-red-500 to-yellow-500 text-transparent bg-clip-text">Romantic Music</span></h1>
                        <p className="mb-10 leading-relaxed text-zinc-300 lg:w-2/3 w-auto ">
                        This week Green Day get back to basics on a hooky, heavy pop record, Sleater-Kinney plays with a sense of cathartic purpose, and Kid Cudis ninth effort features all the trademark humming, production, and introspective lyrics fans expect.
                        </p>
                        <div className="flex justify-center">
                        <Link href={`/music/allMusic/${category}`}>
                            <button className=" inline-flex text-white bg-gradient-to-r from-red-600 to-orange-500  hover:bg-gradient-to-b dark:shadow-indigo-900  hover:shadow-2xl hover:shadow-orange-400 hover:-translate-y-px  border-0 py-2 lg:px-6 md:px-4 px-3 focus:outline-none   font-semibold duration-300 transition rounded lg:text-md md:text-md text-base">
                                All Romantic Music
                            </button>
                        </Link>
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
                                        <IoIosMusicalNotes className='cursor-pointer'></IoIosMusicalNotes>
                                        </div>
                                    </div> 
                                    </Link>
                                </SwiperSlide>)
                                }
                            
                        </Swiper>
                    </div>
                </div>
            </section>
        </div>
        </div>
    );
};

export default MixMusic;