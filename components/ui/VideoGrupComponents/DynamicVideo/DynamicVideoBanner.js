'use client'
import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { authContext } from '@/utils/AuthProvider';
import { useQuery } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { AiOutlinePlus } from 'react-icons/ai';
import { AiFillLike, AiFillDislike } from 'react-icons/ai';
import { AiFillEye } from 'react-icons/ai';

const DynamicVideoBanner = ({ video, id }) => {
  const { user } = useContext(authContext);
  const { data: singleVideo = [], refetch } = useQuery({
    queryKey: [],
    queryFn: async () => {
      const res = await axios.get(`https://vibewabe-server.vercel.app/video/${id}`);
      return res.data;
    },
  });

  const [likeCount, setLikeCount] = useState(0);
  const [isLikeActive, setIsLikeActive] = useState(false);
  const [isDislikeActive, setIsDislikeActive] = useState(false);

  useEffect(() => {
    setLikeCount(singleVideo.like);
    setIsLikeActive(Array.isArray(singleVideo.likes) && singleVideo.likes.includes(user.email));
    setIsDislikeActive(Array.isArray(singleVideo.dislikes) && singleVideo.dislikes.includes(user.email));
  }, [singleVideo.like, singleVideo.likes, singleVideo.dislikes, user.email]);
  

  const handleLike = () => {
    const currentLikes = singleVideo.likes || []; // Initialize likes as empty array if undefined
    const newLikes = isLikeActive ? currentLikes.filter(email => email !== user.email) : [...currentLikes, user.email];
    const newDislikes = isDislikeActive ? singleVideo.dislikes.filter(email => email !== user.email) : singleVideo.dislikes;
  
    axios.patch(`https://vibewabe-server.vercel.app/video/${id}`, { likes: newLikes, dislikes: newDislikes })
      .then(res => {
        refetch();
        setIsLikeActive(!isLikeActive);
        setIsDislikeActive(false);
        toast.success(isLikeActive ? 'You unliked the video' : 'You liked the video');
      })
      .catch(error => {
        console.error('Error:', error);
        toast.error('Failed to update like status');
      });
  };
  

  const handleDislike = () => {
    const currentDislikes = singleVideo.dislikes || []; // Initialize dislikes as empty array if undefined
    const newDislikes = isDislikeActive ? currentDislikes.filter(email => email !== user.email) : [...currentDislikes, user.email];
    const newLikes = isLikeActive ? singleVideo.likes.filter(email => email !== user.email) : singleVideo.likes;
  
    axios.patch(`https://vibewabe-server.vercel.app/video/${id}`, { likes: newLikes, dislikes: newDislikes })
      .then(res => {
        refetch();
        setIsLikeActive(false);
        setIsDislikeActive(!isDislikeActive);
        toast.success(isDislikeActive ? 'You removed your dislike' : 'You disliked the video');
      })
      .catch(error => {
        console.error('Error:', error);
        toast.error('Failed to update dislike status');
      });
  };
  

  const handleList = () => {
    const title = singleVideo.title;
    const email = user.email;
    const date = new Date();
    const thumbnail = singleVideo.thumbnail;
    const videoId = singleVideo._id;
    const description = singleVideo.description;
    const allData = { title, thumbnail, videoId, email, date, description };

    axios.post('https://vibewabe-server.vercel.app/videoPlaylist', allData)
      .then(res => {
        toast.success('Added to my list');
        console.log(res.data);
      })
      .catch(error => {
        console.error('Error:', error);
        toast.error('Failed to add to my list');
      });
  };

  return (
    <div>
      <div className='max-w-screen-xl mx-auto'>
        <iframe src={video.url} title={video.title} width='100%' height='500' allowFullScreen />
        <div className='gap-12 flex p-4 md:p-6 items-center bg-[#212121] justify-between'>
          <div>
            <h6 className='text-white text-xs md:text-lg'>Starting from ৳60</h6>
            <p className='text-gray-400 text-xs md:text-sm'>Enjoy premium experience without any ads</p>
          </div>
          <button className='MuiButtonBase-root text-white MuiIconButton-root jss2687' tabIndex='0' type='button' aria-label='add to favorites'>
            <span className='MuiIconButton-label'>
              <div onClick={handleList} className='cursor-pointer flex items-center justify-center'>
                <AiOutlinePlus />
              </div>
              <p className='MuiTypography-root MuiTypography-body1'>My List</p>
            </span>
            <span className='MuiTouchRipple-root'></span>
          </button>
        </div>

        <main className='container mx-auto px-4 py-8'>
          <div className='flex md:flex-row flex-col-reverse -mx-4'>
            <div className='w-full lg:w-2/3 px-4'>
              <h2 className='text-xl text-white  my-4 md:my-0 '>{video.title}</h2>
              <p className='text-[#a6a6a6] text-xs my-2'>{video.date}</p>
              <p className='text-[#a6a6a6] my-4'>{singleVideo.description}</p>
              <p className='text-[16px] text-[#a6a6a6]'>Genres: Educational, Romance, Comedy</p>
            </div>
            <div className='w-full lg:w-1/3 px-4'>
              <div className='flex justify-around text-white'>
                <button
                  onClick={handleLike}
                  className={`MuiButtonBase-root MuiIconButton-root${!isLikeActive ? 'text-black' : ' text-red-600'}`}
                  tabIndex='0'
                  type='button'
                  aria-label='up vote'>
                  <div className='flex justify-center items-center'>
                    <AiFillLike />
                  </div>
                  <span>Like {singleVideo.likes ? singleVideo.likes.length : 0}</span>
                </button>
                <button
                  onClick={handleDislike}
                  className={`MuiButtonBase-root MuiIconButton-root${!isDislikeActive ? 'text-black' : ' text-red-600'}`}
                  tabIndex='0'
                  type='button'
                  aria-label='down vote'>
                  <div className='flex justify-center items-center'>
                    <AiFillDislike />
                  </div>
                  <span>Dislike  {singleVideo.dislikes ? singleVideo.dislikes.length : 0}</span>
                </button>
                <button className='MuiButtonBase-root MuiIconButton-root jss2687' tabIndex='0' type='button' aria-label='add to favorites'>
                  <span className='MuiIconButton-label'>
                    <div className='cursor-pointer flex items-center justify-center'>
                      <AiFillEye />
                    </div>
                    <p className='MuiTypography-root MuiTypography-body1'>{video.view}</p>
                  </span>
                  <span className='MuiTouchRipple-root'></span>
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default DynamicVideoBanner;
