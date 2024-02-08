"use client";
import Image from "next/image";
import Marquee from "react-fast-marquee";

//images
import channel1 from '@/assets/channelImage/c1.png';
import channel2 from '@/assets/channelImage/c2.jpg';
import channel4 from '@/assets/channelImage/c4.jpg';
import channel5 from '@/assets/channelImage/c5.png';
import channel6 from '@/assets/channelImage/c6.jpg';
import channel7 from '@/assets/channelImage/c7.png';
import channel8 from '@/assets/channelImage/c8.png';
import channel9 from '@/assets/channelImage/c9.jpg';
import { useTranslation } from 'react-i18next';

const ExploreChannel = () => {
  const {t} = useTranslation();
  return (
    <div className="mt-20 container mx-auto">
      <div className="flex">
        <button className="bg-slate-700 text-white font-bold text-xl py-4 px-9 rounded-md">
          {t("channel:explorechannel")}
        </button>
        {/* channels logo */}
        <Marquee pauseOnHover={true} speed={100} className="text-white">
            <div className="grid grid-rows-1 grid-flow-col gap-10">
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
            
            </div>
        </Marquee>
      </div>
    </div>
  );
};

export default ExploreChannel;
