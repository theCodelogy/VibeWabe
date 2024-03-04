"use client"
import Link from "next/link";
import banner from '@/assets/Musics/360_F_632771663_DCOnXTxjAyh6tK8K82SNGFUmzSAIqGLQ.jpg'
import bannerTwo from '@/assets/Musics/istockphoto-994280546-612x612.jpg'
import bannerThree from '@/assets/Musics/1623880721105.jpg'
// import bannerTwo from '@/assets/Screenshot 2024-01-30 183339.png'
// import bannerTwo from '@/assets/tomorrowland-best-summer-music-festivals-europe.jpg'
import Image from "next/image";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { FaArrowRight } from "react-icons/fa";



const AllMusicShowBanner = ({language}) => {
    const upparLanguage = language[0].toUpperCase()+language.slice(1)
    return (
        <div>
            <div className="mb-20">


                <div className="relative">
                    <Carousel
                        showThumbs={false}

                        autoPlay={true}
                        transitionTime={5}
                        infiniteLoop={true}
                        showStatus={false}
                    >
                        {/* slide one */}
                        <div className="relative bg-gradient-to-r from-purple-600 to-blue-600 h-[700px] text-white overflow-hidden">
                            <div className="absolute inset-0">
                                <Image src={banner} alt="banner" className="object-cover object-center w-full h-full" />
                                <div className="absolute inset-0 bg-black opacity-50"></div>
                            </div>

                            <div className="relative z-10 flex flex-col justify-center items-center h-full text-center">
                                <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                                    <div className="text-center">
                                        <p
                                            className=" mx-auto mb-4 md:text-4xl font-bold  text-white text-2xl lg:text-5xl lg:leading-tight">
                                            <span className="bg-gradient-to-r from-red-500 to-yellow-500 text-transparent bg-clip-text font-extrabold">All {upparLanguage} </span> Music See Here
                                        </p>
                                        <h1 className="max-w-2xl mx-auto px-6 lg:text-xl text-zinc-300 font-inter text-xs">
                                            You can join the recent trend of creating movie posters in the style of Disney Pixar
                                            by showcasing your creative skills through
                                        </h1>
                                        <div className="px-6 sm:items-start sm:justify-center sm:px-0 sm:space-x-5 sm:flex mt-9">
                                            <Link href={'/music'} className="mb-3 sm:mb-0 inline-flex items-center justify-center w-full px-6 py-2 text-lg font-bold text-white transition-all duration-200 bg-gradient-to-r from-red-600 to-orange-500  hover:bg-gradient-to-b  hover:shadow-2xl hover:shadow-orange-400 hover:-translate-y-px border-transparent sm:w-auto rounded-xl border-0 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900">
                                                Go Back <FaArrowRight className="ml-3" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* end slide one */}



                        {/* slide Two */}
                        <div className="relative bg-gradient-to-r from-purple-600 to-blue-600 h-[700px] text-white overflow-hidden">
                            <div className="absolute inset-0">
                                <Image src={bannerTwo} alt="banner" className="object-cover object-center w-full h-full" />
                                <div className="absolute inset-0 bg-black opacity-50"></div>
                            </div>

                            <div className="relative z-10 flex flex-col justify-center items-center h-full text-center">
                                <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                                    <div className="text-center">
                                        <p
                                            className=" mx-auto mb-4 md:text-4xl font-bold  text-white  text-2xl lg:text-5xl lg:leading-tight">
                                            <span className="bg-gradient-to-r from-red-500 to-yellow-500 text-transparent bg-clip-text">All {language} </span> Music See Here
                                        </p>
                                        <h1 className="max-w-2xl mx-auto px-6 lg:text-xl text-white font-inter text-xs">
                                            You can join the recent trend of creating movie posters in the style of Disney Pixar
                                            by showcasing your creative skills through
                                        </h1>
                                        <div className="px-8 sm:items-start sm:justify-center sm:px-0 sm:space-x-5 sm:flex mt-9">
                                            <Link href={'/music'} className="mb-3 sm:mb-0 inline-flex items-center justify-center w-full px-8 py-3 text-lg font-bold text-white transition-all duration-200 bg-gradient-to-r from-red-600 to-orange-500  hover:bg-gradient-to-b  hover:shadow-2xl hover:shadow-orange-400 hover:-translate-y-px border-transparent sm:w-auto rounded-xl border-0 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900">
                                                Go Back
                                            </Link>



                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                        {/* end slide Two */}
                        <div className="relative bg-gradient-to-r from-purple-600 to-blue-600 h-[700px] text-white overflow-hidden">
                            <div className="absolute inset-0">
                                <Image src={bannerThree} alt="banner" className="object-cover object-center w-full h-full" />
                                <div className="absolute inset-0 bg-black opacity-50"></div>
                            </div>

                            <div className="relative z-10 flex flex-col justify-center items-center h-full text-center">
                                <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                                    <div className="text-center">
                                        <p
                                            className=" mx-auto mb-4 md:text-4xl font-bold  text-white  text-2xl lg:text-5xl lg:leading-tight">
                                            <span className="bg-gradient-to-r from-red-500 to-yellow-500 text-transparent bg-clip-text">All {language} </span> Musics See Here
                                        </p>
                                        <h1 className="max-w-2xl mx-auto px-6 lg:text-xl text-white font-inter text-xs">
                                            You can join the recent trend of creating movie posters in the style of Disney Pixar
                                            by showcasing your creative skills through
                                        </h1>
                                        <div className="px-8 sm:items-start sm:justify-center sm:px-0 sm:space-x-5 sm:flex mt-9">
                                            <Link href={'/music'} className="mb-3 sm:mb-0 inline-flex items-center justify-center w-full px-8 py-3 text-lg font-bold text-white transition-all duration-200 bg-gradient-to-r from-red-600 to-orange-500  hover:bg-gradient-to-b  hover:shadow-2xl hover:shadow-orange-400 hover:-translate-y-px border-transparent sm:w-auto rounded-xl border-0 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900">
                                                Go Back
                                            </Link>



                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>




                    </Carousel>
                </div>





            </div>
        </div>
    );
};

export default AllMusicShowBanner;