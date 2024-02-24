"use client";
import { authContext } from "@/utils/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";
import { IoIosMusicalNotes } from "react-icons/io";

const MusicCoustomerReview = ({id, category}) => {
    const [musicCategory, setMusicCategory]=  useState([]);
    useEffect(() => {
        axios
          .get(`https://vibewabe-server.vercel.app/music?language=${category}`)
          .then((res) => {
            setMusicCategory(res.data);
            setLoading(false);
          })
          .catch((error) => {
            console.error("Error fetching data:", error);
            setLoading(false);
          });
      }, [category]);
    

    const { user } = useContext(authContext);
    const [currentTime, setCurrentTime] = useState(new Date());
  
    useEffect(() => {
      const timer = setInterval(() => {
        setCurrentTime(new Date());
      }, 1000);
  
      return () => clearInterval(timer);
    }, []);
  
    const formattedDate = currentTime.toLocaleDateString();
    // console.log(formattedDate)
  
    const [comments, setComment] = useState([]);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      axios
        .get(`https://vibewabe-server.vercel.app/MusicComment/individual/${id}`)
        .then((res) => {
          setComment(res.data);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching comments:", error);
          setLoading(false);
        });
    }, [id]);
  
    const handle = async (event) => {
      event.preventDefault();
      const from = event.target;
      const videoId = id;
      const email = user.email;
      const content = from.feedback.value;
      const time = formattedDate;
      from.reset();
  
      const allData = { videoId, email, content, time };
      console.log({ videoId, email, content, time });
  
      axios
        .post("https://vibewabe-server.vercel.app/MusicComment", allData)
        .then((res) => {
          console.log(res.data);
        });
    };
    return (
        <div>
            <div className="container mx-auto px-5">
                <div className="flex lg:flex-row flex-col gap-5  p-5 rounded-md">
                    <div className="flex-initial lg:w-[50%] w-full relative">
                    <div className="  rounded-lg  p-2 my-4 mx-6">
                        <form onSubmit={handle}>
                            <div className="w-full ">
                            <textarea
                                className="bg-gray-100 rounded border border-gray-400 leading-normal resize-none w-full h-20 py-2 px-3 font-medium placeholder-gray-700 focus:outline-none focus:bg-white"
                                name="feedback"
                                placeholder="Type Your Comment"
                                required
                            ></textarea>
                            </div>

                            <div className="w-full flex justify-end px-3">
                            <input
                                type="submit"
                                className="px-2.5 py-1.5 mb-7 mt-1 rounded-md text-white text-sm bg-gradient-to-r from-red-600 to-orange-500"
                                value="Post Comment"
                            />
                            </div>
                        </form>

                        <div className="flex border border-zinc-700 flex-col h-80 overflow-y-auto">
                            {loading ? (
                            <div className="p-3 ml-3 my-3 text-gray-400">Loading comments...</div>
                            ) : comments.length === 0 ? (
                            <div className="p-3 ml-3 my-3 text-gray-400">No comments yet.</div>
                            ) : (
                            comments.map((data) => (
                                <div key={data.videoId} className="rounded-md p-3 mx-3 my-3 bg-zinc-800">
                                <div className="flex gap-3 items-center">
                                    <h3 className="font-bold text-gray-100">{data.email}</h3>
                                    <p className="block text-sm text-gray-500">{data.time}</p>
                                </div>
                                <p className="text-gray-200 mt-2">{data.content}</p>
                                </div>
                            ))
                            )}
                        </div>
                        </div>
                    </div>
                    <div className="flex-initial lg:w-[50%] w-full">
                        <div className="w-full col-span-2 max-h-[500px] flex flex-col overflow-y-auto p-3 bg-[#191919] rounded-md">
                            <div className="">
                                {
                                    musicCategory.map(music => <div key={music?._id}>
                                        <Link href={`/music/${music?._id}`}>
                                            <div className='flex gap-4 rounded-md hover:bg-zinc-800 py-3 px-3 bg-zinc-950 border-b border-zinc-800 mb-3 transition duration-500'>
                                                <div className='group relative rounded-lg h-20 w-20'>
                                                    <Image className='w-full h-full rounded-lg mb-2 transition duration-300 object-cover' src={music?.thambnail} width={100} height={100} alt='slice image' />
                                                    <div className='absolute text-xl text-white rounded-lg -top-0 left-0  flex justify-center items-center h-20 w-20 bg-black bg-opacity-55 opacity-0 group-hover:opacity-100 transition-opacity duration-300 '>
                                                        <IoIosMusicalNotes className='cursor-pointer'></IoIosMusicalNotes>
                                                    </div>
                                                </div>
                                                <div className='text-white '>
                                                    <h3 className='hover:text-sky-400'>{music?.title}</h3>
                                                    <p className='text-xs text-zinc-400'>Singer- {music?.singerName}</p>
                                                    <p className='text-xs text-zinc-400'>Rating- {music?.rating}</p>
                                                </div>
                                            </div>
                                     </Link></div>)
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MusicCoustomerReview;