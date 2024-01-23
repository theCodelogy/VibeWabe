'use client'
import Image from 'next/image';
import React from 'react';
import Slider from "react-slick";
import card1 from '@/assets/Musics/card11.jpg'
import card2 from '@/assets/Musics/card15.jpg'
import card3 from '@/assets/Musics/card13.jpg'
import card4 from '@/assets/Musics/card14.jpg'
import card5 from '@/assets/Musics/card16.jpg'

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

const Card2 = () => {
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
        <div className='px-10'>
            <Slider {...settings}>
                <div className='transition-all hover:scale-105 duration-300 border  h-[300px]'>
                    <Image className='w-full md:w-full h-full' src={card1} alt='slice image'/>
                    <h3 className='text-xl py-2'> New Horor-Trending song</h3>
                </div>

                <div className='transition-all hover:scale-105  duration-300 border  h-[300px]'>
                    <Image className='w-full md:w-full h-full' src={card2} alt='slice image'/>
                    <h3 className='text-xl py-2'>Webdding-Trending song</h3>
                </div>
                <div className='transition-all hover:scale-105  duration-300 border  h-[300px]'>
                    <Image className='w-full md:w-full h-full' src={card3} alt='slice image'/>
                    <h3 className='text-xl py-2'>Romantic -Trending song</h3>
                </div>
                <div className='transition-all hover:scale-105  duration-300 border  h-[300px]'>
                    <Image className='w-full md:w-full h-full' src={card4} alt='slice image'/>
                    <h3 className='text-xl py-2'>T-Trending song</h3>
                </div>
                <div className='transition-all hover:scale-105  duration-300 border  h-[300px]'>
                    <Image className='w-full md:w-full h-full' src={card3} alt='slice image'/>
                    <h3 className='text-xl py-2'>Tere vaste-Trending song</h3>
                </div>
                <div className='transition-all hover:scale-105  duration-300 border  h-[300px]'>
                    <Image className='w-full md:w-full h-full' src={card5} alt='slice image'/>
                    <h3 className='text-xl py-2'>Tere vaste-Trending song</h3>
                </div>
                
            </Slider>
        </div>
    </div>
    );
};

export default Card2;

