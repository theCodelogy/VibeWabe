"use client";

import Image from "next/image";
import picture1 from "@/assets/channelImage/picture1.jpg";
import { FaArrowRightLong } from "react-icons/fa6";
import Link from "next/link";

const uniqueAudio = () => {
  return (
    <div className="container mx-auto px-5 mt-20">
    <div className=" lg:px-20 bg-[#303030]">
      <section className="grid grid-cols-1 lg:grid-cols-2 items-center">
        {/* left div */}
        <div className="relative w-[300px] lg:w-[450px] h-550px]">
          {/* image div */}
          <div  className="relative w-[100%] h-[100%]">
            <Image
              src={picture1}
              alt="banner"
              className="object-cover object-center w-full h-full"
            />
            {/* text div */}
            <div className="absolute bottom-0 right-0 lg:-right-7 w-[200px] lg:w-[314px] h-[160px] border border-[#1D1D1D] bg-[#1D1D1D]" >
              <h3 className="text-base lg:text-2xl font-bold text-white w-[80px] h-[50px] lg:w-[170px] lg:h-[84px] mx-auto mt-6">
                Empower Your Mind With Video Delights
              </h3>
            </div>
          </div>
        </div>

        {/* right div */}
        <div className=" w-[300px] lg:w-[484px] h-[559px] flex items-center ml-5 lg:ml-0">
            <div>
            <h3 className="text-white uppercase font-semibold mb-2">Huge Collection</h3>
            <h1 className="text-white text-base lg:text-3xl uppercase font-bold mb-4">Unique Content For Your Pleasure</h1>
            <p className="text-slate-300 text-base font-medium mb-6">You can watch your favorite contents from here. You can also find your favorite tv shows, channels and podcasts.</p>

            {/* button div */}
            {/* <div className="flex gap-7">
                <button className="px-5 lg:px-7 py-3 bg-[#34B478] text-white uppercase inline-flex items-center gap-4 font-semibold">Radio <FaArrowRightLong className=""/></button>
                <Link href={`channel/shows/65d60f5e92a0525478d866ec`}>
                <button className="px-5 lg:px-7 py-3 bg-[#784CCB] text-white uppercase inline-flex items-center gap-4 font-semibold">Podcasts <FaArrowRightLong className=""/></button>
                </Link>
            </div> */}
            </div>

        </div>
      </section>
    </div>
    </div>
  );
};

export default uniqueAudio;
