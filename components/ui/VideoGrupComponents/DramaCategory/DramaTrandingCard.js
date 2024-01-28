'use client'
import Image from 'next/image';
import React from 'react';
import Slider from "react-slick";
import slide1 from '@/assets/Drama-Image/1418bc99-01e5-4391-a5d6-9e64786a25a1.webp'
import slide2 from '@/assets/Drama-Image/81927347-8c39-44da-861b-272e3a5ec268.webp'
import slide3 from '@/assets/Drama-Image/c9cf53b4-36b3-4c5b-a949-4daef88e9053.webp'
import slide4 from '@/assets/Drama-Image/d6a5c125-1944-4217-ac3b-3e93f655bbcf.webp'
import slide5 from '@/assets/Drama-Image/60e76c61-30d8-4b51-b0be-08bd5351ae8c.webp'
import { useTranslation } from 'react-i18next';

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", color:'red', }}
        onClick={onClick}
        
      />
      
    );
  }

const DramaTrandingCard = () => {
  const {t} = useTranslation();
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        nextArrow: <SampleNextArrow />,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
    };
    return (
        <div className='max-w-screen-xl mx-auto px-8 md:px-16 lg:px-24 py-5 my-10'>
              <h1 className='text-2xl my-5 text-white font-bold'>{t("drama:trendingdrama")} </h1>
            <div>
                <Slider {...settings}>
{/* slide One */}
                <div>
        <a href="#" className="group relative mb-2 block h-96 overflow-hidden rounded-lg bg-gray-100 shadow-lg lg:mb-3">
          <Image src={slide1} loading="lazy" alt="Photo by Austin Wade" className="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
          <span className="absolute left-0 top-0 rounded-br-lg bg-blue-500 px-3 py-1.5 text-sm uppercase tracking-wider text-white">Tranding</span>
        </a>

        <div className="flex flex-col">
          <span className="text-gray-200">JHON WICK</span>
          <a href="#" className="text-lg font-bold text-gray-800 transition duration-100 hover:text-gray-500 lg:text-xl">Business Causual</a>
        </div>
      </div>

{/* end slide one */}


{/* slide two */}
<div>
        <a href="#" className="group relative mb-2 block h-96 overflow-hidden rounded-lg bg-gray-100 shadow-lg lg:mb-3">
          <Image src={slide2} loading="lazy" alt="Photo by Austin Wade" className="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
          <span className="absolute left-0 top-0 rounded-br-lg bg-blue-500 px-3 py-1.5 text-sm uppercase tracking-wider text-white">Tranding</span>
        </a>

        <div className="flex flex-col">
          <span className="text-gray-200">JHON WICK</span>
          <a href="#" className="text-lg font-bold text-gray-800 transition duration-100 hover:text-gray-500 lg:text-xl">Business Causual</a>
        </div>
      </div>
    {/* end slide two */}
                    {/* slide three */}
                    <div>
        <a href="#" className="group relative mb-2 block h-96 overflow-hidden rounded-lg bg-gray-100 shadow-lg lg:mb-3">
          <Image src={slide3} loading="lazy" alt="Photo by Austin Wade" className="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
          <span className="absolute left-0 top-0 rounded-br-lg bg-blue-500 px-3 py-1.5 text-sm uppercase tracking-wider text-white">Tranding</span>
        </a>

        <div className="flex flex-col">
          <span className="text-gray-200">JHON WICK</span>
          <a href="#" className="text-lg font-bold text-gray-800 transition duration-100 hover:text-gray-500 lg:text-xl">Business Causual</a>
        </div>
      </div>

                    {/* end slide three */}
                    
                    {/* slide four */}
                    <div>
        <a href="#" className="group relative mb-2 block h-96 overflow-hidden rounded-lg bg-gray-100 shadow-lg lg:mb-3">
          <Image src={slide4} loading="lazy" alt="Photo by Austin Wade" className="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
          <span className="absolute left-0 top-0 rounded-br-lg bg-blue-500 px-3 py-1.5 text-sm uppercase tracking-wider text-white">Tranding</span>
        </a>

        <div className="flex flex-col">
          <span className="text-gray-200">JHON WICK</span>
          <a href="#" className="text-lg font-bold text-gray-800 transition duration-100 hover:text-gray-500 lg:text-xl">Business Causual</a>
        </div>
      </div>
                    {/* end slide four */}
                    
                    {/* slide five */}
                    <div>
        <a href="#" className="group relative mb-2 block h-96 overflow-hidden rounded-lg bg-gray-100 shadow-lg lg:mb-3">
          <Image src={slide5} loading="lazy" alt="Photo by Austin Wade" className="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
          <span className="absolute left-0 top-0 rounded-br-lg bg-blue-500 px-3 py-1.5 text-sm uppercase tracking-wider text-white">Tranding</span>
        </a>

        <div className="flex flex-col">
          <span className="text-gray-200">JHON WICK</span>
          <a href="#" className="text-lg font-bold text-gray-800 transition duration-100 hover:text-gray-500 lg:text-xl">Business Causual</a>
        </div>
      </div>
                    {/* end slide five */}
                </Slider>
            </div>
        </div>
    );
};

export default DramaTrandingCard;




