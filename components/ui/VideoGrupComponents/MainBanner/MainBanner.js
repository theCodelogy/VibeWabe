"use client"

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Image from "next/image";
import imageOne from '@/assets/BannerImage/hero-bg.jpg'
import imageTwo from '@/assets/BannerImage/home2.png'
import imageThree from '@/assets/BannerImage/wanda-banner.jpg'
import imageFour from '@/assets/BannerImage/home4.png'
import Aos from 'aos';
import 'aos/dist/aos.css'
import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";


const MainBanner = () => {
  const [banners,setBanners] = useState([])
  useEffect(() =>{
    axios.get('https://vibewabe-server.vercel.app/videoSlider')
    .then(res =>{
      setBanners(res.data)
      console.log(res.data)
    })
  },[])


  useEffect(() =>{
    Aos.init();
      },[])
   

    return (
        <>
          <div className="relative">
  <Carousel
    showThumbs={false}
    
    autoPlay={true}
    transitionTime={0}
    infiniteLoop={true}
    showStatus={false}
  >
    {/* slide one */}
    { banners.map( banner =>  <div
        key={banner._id}
        >

          <div className="h-[600px]">
            <Image 
              className="object-cover object-center w-full h-full"
              src={banner.image}
              width={1000}
              height={600}
              alt=''
             />
            <div className="absolute inset-0 flex flex-col items-start justify-end bg-gradient-to-tl from-black via-transparent to-black p-8  opacity-100 transition-opacity duration-300">



            <div>
      <div className=" mx-auto grid grid-cols-1 gap-12 px-4 py-16 lg:grid-cols-2 lg:px-8 lg:py-32 xl:max-w-7xl">
        <div className="flex items-center text-center lg:text-left">
          <div className="space-y-8">
            {/* Heading */}
            <div>
              <div className="mb-1 text-sm font-extrabold uppercase tracking-wider text-red-600  dark:text-blue-500">
                Get Started
              </div>
              <h2 className="mb-4 text-xl md:text-4xl font-black text-white dark:text-white">
            {banner.title}
              
              </h2>
              <h3 className="md:text-xl text-xs font-medium leading-relaxed text-gray-100 dark:text-gray-300">
               {banner.description}
              </h3>
            </div>
            {/* END Heading */}

            {/* Action */}
            <div className="">
         
           <Link href={`/video/${banner?.videoId}`}>
           <button className="btn inline-flex items-center justify-center transition-all duration-200  border-orange-500 hover:bg-gradient-to-r from-red-600 to-orange-500  btn-outline hover:shadow-2xl hover:shadow-orange-400 hover:-translate-y-px border-transparent   flex items-center bg-rich-black-fogra-29 text-white font-bold uppercase text-xs tracking-wide px-6 py-4 border-2 border-citrine rounded-full  hover:bg-opacity-80 font-bold" >Watch Now</button>
           
           </Link>

 



            </div>
            {/* END Action */}
          </div>
        </div>
        <div className="flex items-center text-blue-500 lg:justify-end">
          <svg
            viewBox="0 0 753 480.951"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full"
          >
            {/* SVG Path */}
          </svg>
        </div>
      </div>
    </div>



            </div>
          </div>



        </div>  ) }
{/* end slide one */}







  </Carousel>
</div>

        </>
    )
}

export default MainBanner