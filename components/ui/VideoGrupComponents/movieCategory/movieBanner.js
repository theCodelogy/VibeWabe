"use client"
import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Image from "next/image";
import imageOne from '@/assets/Movies-Image/Polar-new-banner.jpg'
import imageTwo from '@/assets/Movies-Image/p21562309_v_h8_aa.jpg'
import imageThree from '@/assets/Movies-Image/Broad-Peak-banner-1-e1662657343870.jpg'
import imageFour from '@/assets/BannerImage/gruesome-banner-john-wick-2.jpg'
const movieBanner = () => {
    return (
        <div>
                <div className="relative">
  <Carousel
    showThumbs={false}
    
    autoPlay={true}
    transitionTime={5}
    infiniteLoop={true}
    showStatus={false}
  >
    {/* slide one */}
       <div
        
        >
          <div className="h-[600px]">
            <Image 
              className=" bg-cover object-cover object-center w-full h-full"
              src={imageOne}
              alt=''
             />
          <div className="absolute inset-0 flex flex-col items-start justify-end bg-gradient-to-tl from-black via-transparent to-black p-8  opacity-100 transition-opacity duration-300">

{/* <section>
<div className="relative items-center w-full px-5 py-12 mx-auto md:px-12 lg:px-16 max-w-7xl lg:py-24">
    
<div class="w-full md:w-1/2 lg:pr-32">
            <h2 class="text-4xl lg:text-5xl text-center md:text-left text-white leading-tight font-medium">Peaky Blinders</h2>
            <h3
                class="mt-6 md:mt-10 text-md lg:text-xl text-center md:text-left text-gray-200 font-light tracking-wider leading-relaxed">
              Join Thomas Razor and the Blades as they navigate post-war chaos, seeking redemption and power in the heart of the citys shadows. Loyalties will be tested, and secrets will unfold in this gripping crime drama.
            </h3>
            <div class="mt-10 flex flex-col sm:flex-row justify-center md:justify-start">
                <button class="w-full sm:w-40 px-4 py-3 rounded font-semibold text-md bg-red-600 text-white border-2 border-red-700">Watched Now</button>
            </div>
        </div>

</div>
</section> */}


</div>
          </div>
        </div>
{/* end slide one */}



    {/* slide Two */}
       <div
        
        >
          <div className="h-[600px]">
            <Image
              className="bg-cover  w-full h-full"
              src={imageTwo}
              alt=''
            />

            <div className="absolute inset-0 flex flex-col items-start justify-end bg-gradient-to-tl from-black via-transparent to-black p-8  opacity-100 transition-opacity duration-300">

            {/* <section>
<div className="relative items-center w-full px-5 py-12 mx-auto md:px-12 lg:px-16 max-w-7xl lg:py-24">
    
<div class="w-full md:w-1/2 lg:pr-32">
            <h2 class="text-4xl lg:text-5xl text-center md:text-left text-white leading-tight font-medium">Pandas Quest</h2>
            <h3
                class="mt-6 md:mt-10 text-md lg:text-xl text-center md:text-left text-white font-light tracking-wider leading-relaxed">
             Po faces a new threat when an ancient villain reawakens. To save the Valley of Peace, he must master a forgotten martial arts technique with unexpected allies....
            </h3>
            <div class="mt-10 flex flex-col sm:flex-row justify-center md:justify-start">
                <button class="w-full sm:w-40 px-4 py-3 rounded font-semibold text-md bg-red-600 text-white border-2 border-red-700">Watched Now</button>
            </div>
        </div>

</div>
</section> */}


            </div>

            
          </div>
        </div>
{/* end slide Two */}



    {/* slide three */}
       <div
        
        >
          <div className="h-[600px]">
            <Image
              className="bg-cover w-full h-full"
              src={imageThree}
              alt=''
            />
            <div className="absolute inset-0 flex flex-col items-start justify-end bg-gradient-to-tl from-black via-transparent to-black p-8  opacity-100 transition-opacity duration-300">

{/*      
            <section>
<div className="relative items-center w-full px-5 py-12 mx-auto md:px-12 lg:px-16 max-w-7xl lg:py-24">
    
<div class="w-full md:w-1/2 lg:pr-32">
            <h2 class="text-4xl lg:text-5xl text-center md:text-left text-white leading-tight font-medium">Beyond the Horizon</h2>
            <h3
                class="mt-6 md:mt-10 text-md lg:text-xl text-center md:text-left text-white font-light tracking-wider leading-relaxed">
            Explore an uncharted alien world with a team of intrepid explorers in Beyond the Horizon. As they navigate lush landscapes and ethical dilemmas, the film unravels a visually stunning and emotionally charged sci-fi adventure.
            </h3>
            <div class="mt-10 flex flex-col sm:flex-row justify-center md:justify-start">
                <button class="w-full sm:w-40 px-4 py-3 rounded font-semibold text-md bg-red-600 text-white border-2 border-red-700">Watched Now</button>
            </div>
        </div>

</div>
</section> */}


            </div>
          </div>
        </div>
{/* end slide Three */}


    {/* slide Four */}
       {/* <div
        
        >
          <div className="h-[600px]">
            <Image
              className="object-cover object-center w-full h-full"
              src={imageFour}
              alt=''
            />
            <div className="absolute inset-0 flex flex-col items-start justify-end bg-gradient-to-tl from-black via-transparent to-black p-8  opacity-100 transition-opacity duration-300">


            <section>
    <div className="relative items-center w-full px-5 py-12 mx-auto md:px-12 lg:px-16 max-w-7xl lg:py-24">
      <div className="flex w-full mx-auto text-left">
        <div className="relative inline-flex items-center mx-auto align-middle">
          <div className="">
            <h1 className="max-w-5xl text-4xl font-bold leading-none tracking-tighter text-white md:text-5xl lg:text-6xl lg:max-w-7xl">
           JHON WICK <br className="hidden lg:block"/>
              
            </h1>
            <p className="text-[14px] md:text-xl  text-white my-5">Free and Premium themes, UI, templates and <br /> landing pages built with Tailwind CSS, HTML &amp; Next.js</p>
            <div className="w-full max-w-2xl gap-2 mx-auto mt-6">
              <div className="mt-3 rounded-lg sm:mt-0">
                <button className="px-5 py-4 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-red-600 lg:px-10 rounded-xl hover:bg-red-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">Watch Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>


            </div>
          </div>
        </div> */}
{/* end slide Four */}



  </Carousel>



  
</div>
        </div>
    );
};

export default movieBanner;