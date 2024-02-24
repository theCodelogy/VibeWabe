'use client'
import { GoPlus } from "react-icons/go";
import { BsThreeDots } from "react-icons/bs";
import { AiFillDislike, AiFillEye, AiFillLike } from "react-icons/ai";
import axios from "axios";
import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";

const PlayMusic = ({ musicPlay, id }) => {

    const { data: singleVideo = [], refetch } = useQuery({
        queryKey: [],
        queryFn: async () => {
          const res = await axios.get(`https://vibewabe-server.vercel.app/music/${id}`);
          return res.data;
        }
      });

    const [isLikeActive, setIsLikeActive] = useState(false);
    const [isDislikeActive, setIsDislikeActive] = useState(false);
  
    useEffect(() => {
      setIsLikeActive(singleVideo.like > 0);
      setIsDislikeActive(singleVideo.disLike > 0);
    }, [singleVideo.like, singleVideo.disLike]);

    const handleLike = () => {
        const newLikeCount = isLikeActive ? singleVideo.like - 1 : singleVideo.like + 1 ;
        const newDislikeCount = isDislikeActive ? singleVideo.disLike - 1 : singleVideo.disLike;
    
        axios.patch(`https://vibewabe-server.vercel.app/music/${id}`, { like: newLikeCount, disLike: newDislikeCount })
          .then(res => {
            refetch();
            setIsLikeActive(!isLikeActive);
            if (isDislikeActive) setIsDislikeActive(false);
          });
      };
    
      const handleDislike = () => {
        const newDislikeCount = isDislikeActive ? singleVideo.disLike - 1 : singleVideo.disLike + 1;
        const newLikeCount = isLikeActive ? singleVideo.like - 1 : singleVideo.like;
    
        axios.patch(`https://vibewabe-server.vercel.app/music/${id}`, { disLike: newDislikeCount, like: newLikeCount })
          .then(res => {
            refetch();
            setIsDislikeActive(!isDislikeActive);
            if (isLikeActive) setIsLikeActive(false);
          });
      };
    return (
        <div>
            <div key={musicPlay._id} className='my-14 container mx-auto px-10'>
                <div className='border-2 p-10 rounded-md bg-white opacity-80'>
                    <iframe
                    className="w-full h-[20vh]"
                        src={musicPlay?.url}
                        title={musicPlay?.thambnail}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    />
                    <div className="flex justify-between lg:flex-row md:flex-row flex-col gap-10">
                        <div>
                            <div className=" mt-5">
                                <h1 className='lg:text-3xl md:text-3xl text-2xl font-bold'>{musicPlay?.title}</h1>
                                <p className="w-10/12">{musicPlay?.description}</p>
                                
                            </div>
                            <p className='text-sm font-normal leading-7 text-zinc-800'>Singer Name - {musicPlay?.releaseDate}</p>

                            {/* <p className='text-sm font-normal leading-7 text-zinc-800'>Music Release Date - {musicPlay?.releaseDate}</p> */}
                            
                        </div>
                        <div className='flex h-10  mt-5'>
                        <button onClick={handleLike} className={`MuiButtonBase-root MuiIconButton-root${!isLikeActive ? 'text-black' : ' text-red-600'}`} tabIndex="0" type="button" aria-label="up vote">
                            <div className='flex justify-center items-center w-24'>
                            <AiFillLike className="mb-1"/>
                            </div>
                            <p className="">Like {singleVideo.like}</p>
                        </button>

                        <button onClick={handleDislike} className={`MuiButtonBase-root MuiIconButton-root${!isDislikeActive ? 'text-black' : ' text-red-600'}`} tabIndex="0" type="button" aria-label="down vote">
                            <div className='flex justify-center items-center w-24'>
                            <AiFillDislike className="mb-1"/>
                            </div>
                            <span className="flex justify-center">Dislike {singleVideo.disLike}</span>
                        </button>
                        <button className="MuiButtonBase-root MuiIconButton-root jss2687" tabIndex="0" type="button" aria-label="add to favorites">
                            <span className="MuiIconButton-label">
                            <div  className='cursor-pointer flex items-center justify-center'><AiFillEye />
                                </div>
                            <p className="MuiTypography-root MuiTypography-body1 pt-1 flex justify-center w-24">View {musicPlay?.view}</p>
                            </span>
                        </button>
                        </div>
                    </div>
                    <p className='text-sm font-normal leading-7 text-zinc-800 mt-6'>℗ 2024 Super VibeWabe Website Private Limited</p>
                </div>
            </div>
        </div>
    );
};

export default PlayMusic;