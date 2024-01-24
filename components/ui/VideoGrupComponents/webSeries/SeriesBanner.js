"use client";
import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";
import imageOne from "@/assets/Series-Image/wp7640384.webp";
import imageTwo from "@/assets/Series-Image/635895019246814711-panda2.webp";
import imageThree from "@/assets/Series-Image/avatar-3_xgXR5ks.webp";

const SeriesBanner = () => {
  return (
    <div>
      <div className="relative">
        <Carousel
          showThumbs={false}
          autoPlay={true}
          interval={5000} // set the interval in milliseconds (5 seconds)
          infiniteLoop={true}
          showStatus={false}
        >
          {/* slide One */}
          <div className="h-[600px] relative">
            <Image
              className="bg-cover w-full h-full"
              src={imageOne}
              alt=""
            />
            <div className="absolute inset-0 flex flex-col items-start justify-end bg-gradient-to-tl from-black via-transparent to-black p-8 opacity-100 transition-opacity duration-300">
              <section>
                <div className="relative items-center w-full px-5 py-12 mx-auto md:px-12 lg:px-16 max-w-7xl lg:py-24">
                  <div className="w-full md:w-1/2 lg:pr-32">
                    <h2 className="text-4xl lg:text-5xl text-center md:text-left text-white leading-tight font-medium">Peaky Blinders</h2>
                    <h3 className="mt-6 md:mt-10 text-md lg:text-xl text-center md:text-left text-gray-200 font-light tracking-wider leading-relaxed">
                      Join Thomas Razor and the Blades as they navigate post-war chaos, seeking redemption and power in the heart of the city's shadows. Loyalties will be tested, and secrets will unfold in this gripping crime drama.
                    </h3>
                    <div className="mt-10 flex flex-col sm:flex-row justify-center md:justify-start">
                      <button className="w-full sm:w-40 px-4 py-3 rounded font-semibold text-md bg-red-600 text-white border-2 border-red-700">Watch Now</button>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
          {/* end slide One */}

          {/* slide Two */}
          <div className="h-[600px] relative">
            <Image
              className="bg-cover w-full h-full"
              src={imageTwo}
              alt=""
            />
            <div className="absolute inset-0 flex flex-col items-start justify-end bg-gradient-to-tl from-black via-transparent to-black p-8 opacity-100 transition-opacity duration-300">
              <section>
                <div className="relative items-center w-full px-5 py-12 mx-auto md:px-12 lg:px-16 max-w-7xl lg:py-24">
                  <div className="w-full md:w-1/2 lg:pr-32">
                    <h2 className="text-4xl lg:text-5xl text-center md:text-left text-white leading-tight font-medium">Pandas Quest</h2>
                    <h3 className="mt-6 md:mt-10 text-md lg:text-xl text-center md:text-left text-white font-light tracking-wider leading-relaxed">
                      Po faces a new threat when an ancient villain reawakens. To save the Valley of Peace, he must master a forgotten martial arts technique with unexpected allies....
                    </h3>
                    <div className="mt-10 flex flex-col sm:flex-row justify-center md:justify-start">
                      <button className="w-full sm:w-40 px-4 py-3 rounded font-semibold text-md bg-red-600 text-white border-2 border-red-700">Watched Now</button>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
          {/* end slide Two */}

          {/* slide Three */}
          <div className="h-[600px] relative">
            <Image
              className="bg-cover w-full h-full"
              src={imageThree}
              alt=""
            />
            <div className="absolute inset-0 flex flex-col items-start justify-end bg-gradient-to-tl from-black via-transparent to-black p-8 opacity-100 transition-opacity duration-300">
              <section>
                <div className="relative items-center w-full px-5 py-12 mx-auto md:px-12 lg:px-16 max-w-7xl lg:py-24">
                  <div className="w-full md:w-1/2 lg:pr-32">
                    <h2 className="text-4xl lg:text-5xl text-center md:text-left text-white leading-tight font-medium">Beyond the Horizon</h2>
                    <h3 className="mt-6 md:mt-10 text-md lg:text-xl text-center md:text-left text-white font-light tracking-wider leading-relaxed">
                      Explore an uncharted alien world with a team of intrepid explorers in Beyond the Horizon. As they navigate lush landscapes and ethical dilemmas, the film unravels a visually stunning and emotionally charged sci-fi adventure.
                    </h3>
                    <div className="mt-10 flex flex-col sm:flex-row justify-center md:justify-start">
                      <button className="w-full sm:w-40 px-4 py-3 rounded font-semibold text-md bg-red-600 text-white border-2 border-red-700">Watched Now</button>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
          {/* end slide Three */}
        </Carousel>
      </div>
    </div>
  );
};

export default SeriesBanner;
