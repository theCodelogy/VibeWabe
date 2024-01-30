'use client'
import React from 'react';
import Image from 'next/image';
import war1 from '@/assets/war1.png';
import war2 from '@/assets/war2.png';
import { useTranslation } from "react-i18next";


const FristLandingFeature = () => {
    const {t} = useTranslation();
    return (
        <div className="my-5 ">
            <section className="text-gray-600 body-font">
                <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                    <div
                        className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center"
                    >
                       <h1 className="title-font text-xl md:text-2xl mb-4 font-medium text-white">
                           {t("landing:compatible")}
                        </h1>
                        <p className="mb-8 leading-relaxed text-xs lg:text-xl text-white">
                        Experience a new dimension of music with VideoWeb Visionary. Sync your playlists with captivating music videos, adding a visual layer to your audio journey. Choose from customizable themes, and watch as each beat comes to life in perfect harmony. Elevate your music experience with VideoWeb Visionary – where sound meets sight in perfect sync! 📽️✨
                        </p>
                        
                    </div>

                    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                        <div className="relative flex flex-col items-center mx-auto lg:flex-row-reverse lg:max-w-5xl lg:mt-12 xl:max-w-6xl">
                            <div className="w-full h-64 lg:w-1/2 lg:h-auto">
                                <Image src={war2} alt='image' className="h-full w-full object-cover" />
                            </div>

                            <div className="absolute md:top-0 mt-32 md:mt-50 lg:w-3/5 lg:left-0 lg:mt-20 lg:ml-20 xl:mt-8 xl:ml-24">
                                <div className="flex flex-col p-12 md:px-16">
                                    <Image src={war1} alt='image' className="h-full w-full object-cover" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default FristLandingFeature;
