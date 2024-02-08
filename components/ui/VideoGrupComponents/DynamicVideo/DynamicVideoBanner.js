'use client'
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { AiOutlinePlus } from "react-icons/ai";
import { AiFillLike } from "react-icons/ai";
import { AiFillDislike } from "react-icons/ai";


const DynamicVideoBanner = ({video}) => {
  const handleCopyClick = () => {
    const codeElement = document.querySelector('.language-javascript code');
    const textArea = document.createElement('textarea');
    textArea.value = codeElement.textContent;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);
    toast.success('link copied to clipboard!');
  };


  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);

  const handleLike = () => {
    setLikes(likes + 1);
  };

  const handleDislike = () => {
    setDislikes(dislikes + 1);
  };

  return (
    <div className='max-w-screen-xl mx-auto'>
      <iframe
      src={video.url}
      title={video.title}
      width="100%"
      height="500"

      allowFullScreen
    />
      <div className="gap-12 flex p-4 md:p-6  items-center bg-[#212121] justify-between">
        <div>
          <h6 className="text-white text-xs md:text-lg">Starting from ৳60</h6>
          <p className="text-gray-400 text-xs md:text-sm">Enjoy premium experience without any ads</p>
        </div>
        <button  id="copyButton"
            onClick={handleCopyClick} className="btn bg-gradient-to-r from-red-600 to-zinc-500  text-white rounded-full focus:outline-none focus:ring focus:border-blue-300">
          Copy Link
          <pre className="language-javascript">
          <code className="text-sm hidden">{video.url}</code>
        </pre>
        </button>
      </div>


      <main className="container mx-auto px-4 py-8">
        <div className="flex md:flex-row flex-col-reverse -mx-4">
          <div className="w-full lg:w-2/3 px-4">
            <h2 className="text-xl text-white font-bold my-4 md:my-0 ">{video.title}</h2>
            <p className="text-[#a6a6a6] text-xs my-2">
             {video.date}
            </p>
            <p className="text-[#a6a6a6] my-4">
              {video.description}


            </p>

            <p className='text-[16px]  text-[#a6a6a6]'>Genres: Educational, Romance, Comedy</p>
          </div>



          <div className="w-full lg:w-1/3 px-4">
            <div className="flex justify-around text-white">
              <button onClick={handleLike} className="MuiButtonBase-root MuiIconButton-root" tabIndex="0" type="button" aria-label="up vote">

                <div className='flex justify-center items-center'>
                  <AiFillLike />
                </div>

                <span>Like {likes}</span>
              </button>

              <button onClick={handleDislike} type="button" aria-label="down vote">
                <div className='flex justify-center items-center'>
                  <AiFillDislike />
                </div>

                <span>Dislike {dislikes}</span>
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