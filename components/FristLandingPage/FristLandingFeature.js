import Image from 'next/image';
import React from 'react';
import war1 from '@/assets/war1.png'
import war2 from '@/assets/war2.png'

const FristLandingFeature = () => {
    return (
        <div className="my-5 bg-black">
        <section className="text-gray-600 body-font">
          <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
            <div
              className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center"
            >
              <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
                We’re compatible.
              </h1>
              <p className="mb-8 leading-relaxed text-white">
                Copper mug Manufacturer: AppleFeatures: Large Super <br /> Retina
                XDR display, A15 Bionic chip, Pro camera system <br /> with advanced
                photography and video capabilities. Samsung <br /> Galaxy Tab S7+
                Features: Super AMOLED display, Snapdragon <br /> 865+ chipset,
                Amazon Fire TV Stick 4K Max4K Ultra HD streaming, <br />
                Dolby Vision and HDR10+ support,
              </p>
              <div className="flex justify-center">
                
                <button className="ml-4 inline-flex text-white bg-red-600 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
                  See details
                </button>
              </div>
            </div>
  
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
              <div className="relative flex flex-col items-center mx-auto lg:flex-row-reverse lg:max-w-5xl lg:mt-12 xl:max-w-6xl">
                <div className="w-full h-64 lg:w-1/2 lg:h-auto">
                  <Image src={war2} alt='image' className="h-full w-full object-cover"/>
                </div>
  
                <div className="absolute md:top-0 mt-32 md:mt-50 lg:w-3/5 lg:left-0 lg:mt-20 lg:ml-20 xl:mt-8 xl:ml-24">
                  <div className="flex flex-col p-12 md:px-16">
                  <Image src={war1} alt='image' className="h-full w-full object-cover"/>
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