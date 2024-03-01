'use client'
import Image from "next/image";
import Marquee from "react-fast-marquee";
//images
import channel1 from '@/assets/channelImage/sp1.png';
import channel2 from '@/assets/channelImage/sp2.png';
import channel4 from '@/assets/channelImage/sp3.jpg';
import channel5 from '@/assets/channelImage/sp4.png';
import channel6 from '@/assets/channelImage/sp5.jpg';
import channel7 from '@/assets/channelImage/sp6.png';
import channel8 from '@/assets/channelImage/sp3.jpg';
import channel9 from '@/assets/channelImage/sp4.png';
import { useTranslation } from 'react-i18next';

const SportsExplore = () => {
  const {t} = useTranslation();
    return (
        <div className="mt-20 container mx-auto">
        <div className="flex">
          <button className="bg-slate-700 text-white font-bold text-xl py-1 px-4 rounded-md">
           {t("channel:exploresports")}
          </button>
          {/* channels logo */}
          <Marquee pauseOnHover={true} speed={100} direction="right"  className="bg-[#8b33a1]">
              {/* <div className="grid grid-rows-1 grid-flow-col gap-9">
              <div className="w-[80ppx] h-[80px]">
              <Image className='w-full h-full rounded-lg mb-2  bg-contain' src={channel1} alt='slice image'/>
              </div>
              <div className="w-[80ppx] h-[80px]">
              <Image className='w-full h-full rounded-lg mb-2  bg-contain' src={channel2} alt='slice image'/>
              </div>
              <div className="w-[80ppx] h-[80px]">
              <Image className='w-full h-full rounded-lg mb-2  bg-contain' src={channel6} alt='slice image'/>
              </div>
              <div className="w-[80ppx] h-[80px]">
              <Image className='w-full h-full rounded-lg mb-2  bg-contain' src={channel5} alt='slice image'/>
              </div>
              <div  className="w-[80ppx] h-[80px]">
              <Image className='w-full h-full rounded-lg mb-2  bg-contain' src={channel4} alt='slice image'/>
              </div>
              <div  className="w-[80ppx] h-[80px]">
              <Image className='w-full h-full rounded-lg mb-2  bg-contain' src={channel7} alt='slice image'/>
              </div>
              <div  className="w-[80ppx] h-[80px]">
              <Image className='w-full h-full rounded-lg mb-2  bg-contain' src={channel8} alt='slice image'/>
              </div>
              <div  className="w-[80ppx] h-[80px]">
              <Image className='w-full h-full rounded-lg mb-2  bg-contain' src={channel9} alt='slice image'/>
              </div>
              <div  className="w-[80ppx] h-[80px]">
              <Image className='w-full h-full rounded-lg mb-2  bg-contain' src={channel8} alt='slice image'/>
              </div>
              </div> */}
              <div className="flex gap-10 text-white">
            <div className=" h-[20px] text-center text-xl font-bold flex justify-center items-center">
           #StarSports
            </div>
            <div className=" h-[20px] text-center text-xl font-bold flex justify-center items-center">
            #Sony3
            </div>
            <div className=" h-[20px] text-center text-xl font-bold flex justify-center items-center">
            #StarSports
            </div>
            <div className=" h-[20px] text-center text-xl font-bold flex justify-center items-center">
            #Sony3
            </div>
            <div className=" h-[20px] text-center text-xl font-bold flex justify-center items-center">
            #StarSports
            </div>
            <div className=" h-[20px] text-center text-xl font-bold flex justify-center items-center">
            #Sony3
            </div>
            <div className=" h-[20px] text-center text-xl font-bold flex justify-center items-center">
            #StarSports
            </div>
        
            
            </div>
          </Marquee>
        </div>
      </div>
    );
};

export default SportsExplore;