'use client'
import React from 'react';
import Video from '@/assets/video.webm'
import { AiOutlinePlus } from "react-icons/ai";
import { AiFillLike } from "react-icons/ai";
import { AiFillDislike } from "react-icons/ai";


const DynamicVideoBanner = () => {
    return (
        <div className='max-w-screen-xl mx-auto'>
             <video className="w-full h-[90vh] " controls>
      <source src={Video} type="video/mp4" />
      Your browser does not support the video tag.
    </video> 
    <div className="gap-12 flex p-4 md:p-6  items-center bg-[#212121] justify-between">
      <div>
        <h6 className="text-white text-xs md:text-lg">Starting from ৳50</h6>
        <p className="text-gray-400 text-xs md:text-sm">Enjoy premium experience without any ads</p>
      </div>
      <button className="btn bg-red-600 text-white rounded-full hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300">
        Remove Ads
      </button>
    </div>


    <main className="container mx-auto px-4 py-8">
      <div className="flex md:flex-row flex-col-reverse -mx-4">
        <div className="w-full lg:w-2/3 px-4">
          <h2 className="text-xl text-white font-bold my-4 md:my-0 ">Suspended Boyfriend</h2>
          <p className="text-[#a6a6a6] text-xs my-2">
          2023 • Single Drama • 40 Min 49 Sec
          </p>
          <p className="text-[#a6a6a6] my-4">
          Every time Shejan makes a mistake, he is punished by his girlfriend Ahona, an arrogant young woman. Despite being madly in love with Ahona, Shejan tol...


          </p>

          <p className='text-[16px]  text-[#a6a6a6]'>Genres: Educational, Romance, Comedy</p>
        </div>



        <div className="w-full lg:w-1/3 px-4">
          <div className="flex justify-around text-white">
      <button className="MuiButtonBase-root MuiIconButton-root" tabIndex="0" type="button" aria-label="up vote">
       
     <div className='flex justify-center items-center'>
     <AiFillLike />
     </div>

        <span >Like</span>
      </button>

      <button   type="button" aria-label="down vote">
      <div  className='flex justify-center items-center'>
      <AiFillDislike />
      </div>

        <span>disLike</span>
      </button>

      <button className="MuiButtonBase-root MuiIconButton-root jss2687" tabIndex="0" type="button" aria-label="add to favorites">
        <span className="MuiIconButton-label">
        <div className='flex items-center justify-center'><AiOutlinePlus /></div>
          <p className="MuiTypography-root MuiTypography-body1">My List</p>
        </span>
        <span className="MuiTouchRipple-root"></span>
      </button>

    </div>


        </div>
      </div>
    </main>







        </div>
    );
};

export default DynamicVideoBanner;