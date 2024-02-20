"use client";
import React from "react";
import Image from "next/image";
import war1 from "@/assets/5462433_2808319.jpg";
import war2 from "@/assets/war2.png";
import { useTranslation } from "react-i18next";

const FristLandingFeature = () => {
  const { t } = useTranslation();
  return (
    <div className="my-5 ">
      <section >
  <div class="container max-w-xl p-6 mx-auto space-y-12 lg:px-8 lg:max-w-7xl">
    <div>
      <h2 class="md:text-4xl text-xl font-semibold  text-white  text-center sm:text-5xl">Our Features</h2>
      <p class="max-w-3xl mx-auto mt-4 text-xl text-center text-gray-300 font-semibold md:text-[15px] ">Explore the latest features that enhance your learning experience and make it even more exciting.</p>
    </div>
    <div class="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
      <div>
        <div class="mt-4 space-y-12">
        <div class="flex">
            <div class="flex-shrink-0">
              <div class="flex items-center justify-center w-12 h-12 rounded-md text-gray-100">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                  class="lucide lucide-video">
                  <path d="m22 8-6 4 6 4V8Z"></path>
                  <rect width="14" height="12" x="2" y="6" rx="2" ry="2"></rect>
                </svg></div>
            </div>
            <div class="ml-4">
              <h4 class="text-lg font-medium leadi text-white ">Enhanced Video Streaming</h4>
              <p class="  mt-2  text-white">Experience seamless video integration with enhanced streaming capabilities, providing a better and more uninterrupted learning experience.</p>
            </div>
          </div>
          <div class="flex">
            <div class="flex-shrink-0">
              <div class="flex items-center justify-center w-12 h-12 rounded-md s text-gray-100">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                  class="lucide lucide-bookmark-plus">
                  <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"></path>
                  <line x1="12" x2="12" y1="7" y2="13"></line>
                  <line x1="15" x2="9" y1="10" y2="10"></line>
                </svg></div>
            </div>
            <div class="ml-4">
              <h4 class="text-lg font-medium leadi text-white ">Audio Streaming:</h4>
              <p class="  mt-2  text-white"> Dive into a diverse selection of music, podcasts, and audio content tailored to your tastes. Whether you are into chart-topping hits or niche genres, Vibeweb offers an audio experience that resonates with you.

</p>
            </div>
          </div>
        
          <div class="flex">
            <div class="flex-shrink-0">
              <div class="flex items-center justify-center w-12 h-12 rounded-md text-gray-100">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                  class="lucide lucide-file-question">
                  <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
                  <path d="M10 10.3c.2-.4.5-.8.9-1a2.1 2.1 0 0 1 2.6.4c.3.4.5.8.5 1.3 0 1.3-2 2-2 2"></path>
                  <path d="M12 17h.01"></path>
                </svg></div>
            </div>
            <div class="ml-4">
              <h4 class="text-lg font-medium leadi text-white ">Live TV Channels: </h4>
              <p class="  mt-2  text-white">ccess a variety of live TV channels spanning sports, news, entertainment, and more. Stay updated with real-time events and enjoy your favorite programs from the comfort of your screen.</p>
            </div>
          </div>
        </div>
      </div>
      <div aria-hidden="true" class="mt-10 lg:mt-0">
        <Image width="500" height="300" src={war1}/>
      </div>
    </div>
  </div>
</section>
    </div>
  );
};

export default FristLandingFeature;
