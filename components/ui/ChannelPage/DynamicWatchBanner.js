"use client";

import { Span } from "next/dist/trace";

const DynamicWatchBanner = () => {
  return (
    <div className="max-w-screen-xl mx-auto opacity-70">
      <iframe
        className="mx-auto"
        width="100%"
        height="500"
        src="https://www.youtube.com/embed/0fcwmBQloas?si=2k8CpeXTAwZpGPVT"
        title="YouTube video player"
        allowfullscreen
      ></iframe>

      <div className=" p-4 ">
        <div>
          <h6 className="text-white text-xs md:text-lg">
            Messi, Ronaldo, Neymar & Mbappe Showing Their Class in 2023
          </h6>
          <p className="text-gray-400 text-xs md:text-sm">
            Welcome to Alsido Football!
          </p>
          <p className="text-[#a6a6a6] text-xs mt-2">Jan 30, 2023</p>
        </div>
       
      </div>
      <div className="w-full rounded-md px-4 bg-[#3c3c3c] py-1">
          <p className="text-[#a6a6a6] my-4 text-xs md:text-sm">
           <span className="font-bold">Description:</span> This content is both in Transformative and Educational nature. Video
            is in compliance with Content Quality section of YPP Policies as the
            editing adds creative value which makes the content unique.This content is both in Transformative and Educational nature. Video
            is in compliance with Content Quality section of YPP Policies as the
            editing adds creative value which makes the content unique.
          </p>
          <h2 className="text-xs md:text-sm text-blue-500 my-4 md:my-0 ">
          Behance: https://www.behance.net/al7nd
          </h2>
        </div>
        
    </div>
  );
};

export default DynamicWatchBanner;
