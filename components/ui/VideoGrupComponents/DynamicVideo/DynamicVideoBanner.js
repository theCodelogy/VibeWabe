'use client'
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { AiOutlinePlus } from "react-icons/ai";
import { AiFillLike, AiFillDislike } from "react-icons/ai";
const DynamicVideoBanner = ({ video, id }) => {
  const { data: singleVideo = [], refetch } = useQuery({
    queryKey: [],
    queryFn: async () => {
      const res = await axios.get(`https://vibewabe-server.vercel.app/video/${id}`);
      return res.data;
    }
  });

  const [isLikeActive, setIsLikeActive] = useState(false);
  const [isDislikeActive, setIsDislikeActive] = useState(false);

  useEffect(() => {
    setIsLikeActive(singleVideo.like > 0);
    setIsDislikeActive(singleVideo.disLike > 0);
  }, [singleVideo.like, singleVideo.disLike]);

  // const handleCopyClick = () => {
  //   const codeElement = document.querySelector('.language-javascript code');
  //   const textArea = document.createElement('textarea');
  //   textArea.value = codeElement.textContent;
  //   document.body.appendChild(textArea);
  //   textArea.select();
  //   document.execCommand('copy');
  //   document.body.removeChild(textArea);
  //   toast.success('link copied to clipboard!');
  // };

  const handleLike = () => {
    const newLikeCount = isLikeActive ? singleVideo.like - 1 : singleVideo.like + 1 ;
    const newDislikeCount = isDislikeActive ? singleVideo.disLike - 1 : singleVideo.disLike;

    axios.patch(`https://vibewabe-server.vercel.app/video/${id}`, { like: newLikeCount, disLike: newDislikeCount })
      .then(res => {
        refetch();
        setIsLikeActive(!isLikeActive);
        if (isDislikeActive) setIsDislikeActive(false);
      });
  };

  const handleDislike = () => {
    const newDislikeCount = isDislikeActive ? singleVideo.disLike - 1 : singleVideo.disLike + 1;
    const newLikeCount = isLikeActive ? singleVideo.like - 1 : singleVideo.like;

    axios.patch(`https://vibewabe-server.vercel.app/video/${id}`, { disLike: newDislikeCount, like: newLikeCount })
      .then(res => {
        refetch();
        setIsDislikeActive(!isDislikeActive);
        if (isLikeActive) setIsLikeActive(false);
      });
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
      <div className="gap-12 flex p-4 md:p-6 items-center bg-[#212121] justify-between">
        <div>
          <h6 className="text-white text-xs md:text-lg">Starting from ৳60</h6>
          <p className="text-gray-400 text-xs md:text-sm">Enjoy premium experience without any ads</p>
        </div>
        {/*  onClick={handleCopyClick}  */}
        <button id="copyButton" className="btn bg-gradient-to-r from-red-500 to-yellow-500 text-white rounded-full focus:outline-none focus:ring focus:border-orange-400">
          Copy Link
          {/* <pre className="language-javascript">
            <code className="text-sm hidden">{video.url}</code>
          </pre> */}
        </button>
      </div>

      <main className="container mx-auto px-4 py-8">
        <div className="flex md:flex-row flex-col-reverse -mx-4">
          <div className="w-full lg:w-2/3 px-4">
            <h2 className="text-xl text-white  my-4 md:my-0 ">{video.title}</h2>
            <p className="text-[#a6a6a6] text-xs my-2">{video.date}</p>
            <p className="text-[#a6a6a6] my-4">{singleVideo.description}</p>
            <p className='text-[16px] text-[#a6a6a6]'>Genres: Educational, Romance, Comedy</p>
          </div>

          <div className="w-full lg:w-1/3 px-4">
            <div className="flex justify-around text-white">

              <button onClick={handleLike} className={`MuiButtonBase-root MuiIconButton-root${!isLikeActive ? 'text-black' : ' text-red-600'}`} tabIndex="0" type="button" aria-label="up vote">
                <div className='flex justify-center items-center'>
                  <AiFillLike />
                </div>
                <span>Like {singleVideo.like}</span>
              </button>

              <button onClick={handleDislike} className={`MuiButtonBase-root MuiIconButton-root${!isDislikeActive ? 'text-black' : ' text-red-600'}`} tabIndex="0" type="button" aria-label="down vote">
                <div className='flex justify-center items-center'>
                  <AiFillDislike />
                </div>
                <span>Dislike {singleVideo.disLike}</span>
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
