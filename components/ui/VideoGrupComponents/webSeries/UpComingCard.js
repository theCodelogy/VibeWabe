'use client'
import Image from 'next/image';
import React from 'react';
import Slider from "react-slick";
import slide1 from '@/assets/Series-Image/AAAABYOh_qSTCE0CjK1UqWGAadvbnn55fMNFzyKslyB6v0AOBd0I9NIZwE1ctGeC_2FrCcCAHal5K4XRrE19fUf-IkCR_3pyk9zXrvzSKH2wnaB8eNZXX9DJ8jdvsLNEBcNWoF6ddg.jpg'
import slide2 from '@/assets/Series-Image/AAAAQROwTYEBX6jBgdzzxXMHOIxYDjyTKbZaGszQ38pJCDW4-Mxs3wa12Il3goPnykiB92fvjYt3g5_YOQUAHv_ywLXmQ-q9SLeLhfV7wii_zLu5LFctYX87GEMD_BHDg9A4cGK20728irptybLWnFU6CCFu.jpg'
import slide3 from '@/assets/Series-Image/s-l1200.webp'
import slide4 from '@/assets/Series-Image/space-force-netflix-159794.jpg'
import slide5 from '@/assets/Series-Image/AAAABdG_jOQeldU-v8TiX0GGxwemOu2KF7d0kIGFgraQM8fbO4ZXadbUUvfyMaXPdj2ZhGR2hWHaT85EGpA-sOb65nHfjMHx7zn5s9J-.jpg'

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

const UpComingCard = () => {
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
              <h1 className='text-2xl my-5 text-white font-bold'>Upcoming Movie </h1>
            <div>
                <Slider {...settings}>
{/* slide One */}
                <div>
        <a href="#" className="group relative mb-2 block h-96 overflow-hidden rounded-lg bg-gray-100 shadow-lg lg:mb-3">
          <Image src={slide1} loading="lazy" alt="Photo by Austin Wade" className="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
         
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

export default UpComingCard;