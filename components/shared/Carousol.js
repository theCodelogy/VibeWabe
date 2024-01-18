'use client'
import Image from 'next/image';
import React from 'react';
import Slider from "react-slick";
import slide1 from '@/assets/recomanded-1.jpg'
import slide2 from '@/assets/recomanded-2.jpg'
import slide3 from '@/assets/recomanded-3.jpg'
import slide4 from '@/assets/recomanded-4.jpg'

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

const Carousol = () => {
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
        <div>
            <div>
                <Slider {...settings}>
                    <div className='transition-all hover:scale-105 duration-300'>
                        <Image className='w-[350px] md:w-[300px] h-[350px] md:h-full  rounded-xl' src={slide1} alt='slice image'/>
                    </div>

                    <div className='transition-all hover:scale-105  duration-300'>
                        <Image className='w-[350px] md:w-[300px] h-[350px] md:h-full  rounded-xl' src={slide2} alt='slice image'/>
                    </div><div className='transition-all hover:scale-105  duration-300'>
                        <Image className='w-[350px] md:w-[300px] h-[350px] md:h-full  rounded-xl' src={slide3} alt='slice image'/>
                    </div><div className='transition-all hover:scale-105  duration-300 '>
                        <Image className='w-[350px] md:w-[300px] h-[350px] md:h-full  rounded-xl' src={slide4} alt='slice image'/>
                    </div><div className='transition-all hover:scale-105  duration-300'>
                        <Image className='w-[350px] md:w-[300px] h-[350px] md:h-full rounded-xl' src={slide3} alt='slice image'/>
                    </div>
                    
                </Slider>
            </div>
        </div>
    );
};

export default Carousol;