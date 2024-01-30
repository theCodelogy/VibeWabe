import React from 'react';
import Video from '@/assets/PeakyBlinder.webm'
const MovieTrailerOne = () => {
    return (
        <div>
            

{/* <div className="p-6">
      <div className="mx-auto">
        <div className="relative z-20 rounded-lg shadow-xl overflow-hidden lg:grid lg:grid-cols-2 lg:gap-4"
          style={{ backgroundImage: 'linear-gradient(to left bottom, #f87171, #f55979, #ee4085, #e12896, #cb18a9, #bd12b5, #aa16c1, #921fce, #881ed5, #7d1fdc, #6e21e3, #5c24eb)' }}>
          <div className="pt-10 pb-12 px-6 sm:pt-16 sm:px-8 lg:py-16 lg:pr-0">
            <div className="lg:self-center">
              <h2 className="text-3xl leading-9 font-extrabold text-white sm:text-4xl sm:leading-10">
                <span className="block">This is a title for your call to action card</span>
              </h2>
              <p className="mt-4 text-base leading-6 text-white">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              <p className="mt-4 text-base leading-6 text-dark-blue-800"></p>
              <a href="#" target="_blank" style={{ backgroundColor: '#000' }}
                className="mt-8 border border-transparent rounded-md shadow px-6 py-3 inline-flex items-center text-base leading-6 font-medium text-white transition duration-150 ease-in-out">
                Get started
              </a>
              <a href="#" target="_blank" className="ml-4 mt-8 text-white font-bold text-sm underline">
                Learn more
              </a>
            </div>
          </div>
          <div className="relative pb-3/5 -mt-6 md:pb-1/2">
            <Image className="absolute inset-0 w-full h-full transform translate-x-6 translate-y-6 rounded-md object-cover object-left-top sm:translate-x-10 lg:translate-y-20"
              src={image}
              alt="Background" />
          </div>
        </div>
      </div>
    </div> */}


<div className="sm:flex items-center max-w-screen-xl  ">
      <div className="sm:w-1/2 p-10">
        <div>
 
        <video className="w-full h-[43vh] " controls>
      <source src={Video} type="video/mp4" />
     
    </video> 


        </div>
      </div>
      <div className="sm:w-1/2 p-5">
      <div>

<div className="bg-cover bg-center relative" >
    <div className="bg-gradient-to-r from-black to-transparent absolute top-0 left-0 w-full h-full opacity-75"></div>
    <div className=" p-4 rounded-md shadow-md relative z-10">
        <div className="mb-4">
            <h3 className="text-2xl font-semibold text-white mb-2">Peaky Blinders - Trailer</h3>
        </div>
        <div className="mb-4">
            <h6 className="text-sm text-gray-600 mb-1">2022 | Action, Drama</h6>
            <div className="flex items-center">
                <button className="bg-gradient-to-r from-red-600 to-zinc-500 text-white px-4 py-2 rounded-full mr-2">Rent ৳20</button>
            </div>
        </div>
        <div className="mb-4">
            <h6 className="text-sm text-gray-600 mb-2">
                A SWAT agent is assigned into the dangerous world of international drug cartels and terrorism. His mission: destroy the operation from the inside out. Will he survive and succeed?
            </h6>
        </div>
        <div className="flex">
            <button className="bg-gradient-to-r from-red-600 to-zinc-500 text-white px-4 py-2 rounded-full mr-2">Watch Now</button>
            <button className="text-white  border-red-600 px-4 py-2 rounded-full">Add to List</button>
        </div>
    </div>
</div>



</div>
      </div>
    </div>


    
        </div>
    );
};

export default MovieTrailerOne;
