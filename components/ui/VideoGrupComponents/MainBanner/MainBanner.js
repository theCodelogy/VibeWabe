"use client"

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Image from "next/image";
import imageOne from '@/assets/BannerImage/2.jpeg'
import imageTwo from '@/assets/BannerImage/3.jpg'
import imageThree from '@/assets/BannerImage/5.jpg'
import imageFour from '@/assets/BannerImage/gruesome-banner-john-wick-2.jpg'



const MainBanner = () => {



   

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
       <div
        
        >
          <div className="h-[600px]">
            <Image 
              className="object-cover object-center w-full h-full"
              src={imageOne}
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
        </div>
{/* end slide one */}



    {/* slide Two */}
       <div
        
        >
          <div className="h-[600px]">
            <Image
              className="object-cover object-center w-full h-full"
              src={imageTwo}
              alt=''
            />
            <div className="absolute inset-0 flex flex-col items-start justify-end bg-gradient-to-tl from-black via-transparent to-black p-8  opacity-100 transition-opacity duration-300">

            <section>
      <div className="relative items-center w-full px-5 py-12 mx-auto md:px-12 lg:px-16 max-w-7xl lg:py-24">
        <div class="flex w-full mx-auto text-left">
          <div class="relative inline-flex items-center mx-auto align-middle">
            <div class="">
              <h1 class="max-w-5xl text-4xl font-bold leading-none tracking-tighter text-white md:text-5xl lg:text-6xl lg:max-w-7xl">
            JHON WICK <br class="hidden lg:block"/>
                
              </h1>
              <p className="text-[14px] md:text-xl  text-white my-5">Free and Premium themes, UI, templates and <br /> landing pages built with Tailwind CSS, HTML &amp; Next.js</p>
              <div class="w-full max-w-2xl gap-2 mx-auto mt-6">
                <div class="mt-3 rounded-lg sm:mt-0">
                  <button class="px-5 py-4 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-red-600 lg:px-10 rounded-xl hover:bg-red-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">Watch Now</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  </section>


            </div>
          </div>
        </div>
{/* end slide Two */}



    {/* slide three */}
       <div
        
        >
          <div className="h-[600px]">
            <Image
              className="object-cover object-center w-full h-full"
              src={imageThree}
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
        </div>
{/* end slide Three */}


    {/* slide Four */}
       <div
        
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
        </div>
{/* end slide Four */}



  </Carousel>
</div>

        </>
    )
}

export default MainBanner