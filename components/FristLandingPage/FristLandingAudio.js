import React from 'react';
import Image from 'next/image';
import war1 from '@/assets/war1.png';
import war2 from '@/assets/war2.png';

const FristLandingAudio = () => {
    return (
        <div className="my-5 bg-black">
   <div className="relative flex flex-col-reverse md:gap-20 my-14 md:flex-row ">


   <div className="flex items-center py-5 md:w-1/2 md:pb-20 md:pt-10 md:pl-10">
        <div className="relative rounded md:p-8">
          <div className="rounded-lg bg-white text-black w-full">
          <Image src={war1} />
          </div>
        </div>
      </div>





      <div className="flex items-center md:pb-20 md:pt-10 md:pr-10">
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
      </div>

    
    </div>
    </div>
    );
};

export default FristLandingAudio;




