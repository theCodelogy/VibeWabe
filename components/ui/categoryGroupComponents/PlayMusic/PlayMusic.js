import Image from "next/image";
import musicImg1 from '@/assets/Musics/CategoryImg/newupload6.jpg'
import { FaCirclePlay } from "react-icons/fa6";
import { GoPlus } from "react-icons/go";
import { BsThreeDots } from "react-icons/bs";

const PlayMusic = () => {
    return (
        <div>
        <div className='my-14 container mx-auto px-10'>
           <div className='border-2 p-10 rounded-md bg-white opacity-80'>
                <div className='grid grid-cols-1 md:grid-cols-2  gap-20   text-white'>
                    <Image width={550} className='h-[450px] rounded-md' src={musicImg1} alt='music image' />
                    <div>
                        <div className="flex gap-5 items-center mb-6 text-black">
                            <FaCirclePlay className='cursor-pointer text-5xl'></FaCirclePlay>
                            <div >
                                <h1 className='lg:text-3xl md:text-3xl text-2xl font-bold'>Worry sans toy - popular song</h1>
                                <p>Music owner by - Tanim</p>
                            </div>
                        </div>
                        
                        <p className='text-sm font-normal leading-7 text-zinc-800'>by Mitraz  ·  1 Song  ·  388,271 Plays  ·  2:51 </p>
                        <p className='text-sm font-normal leading-7 text-zinc-800'>℗ 2024 Super VibeWabe Website Private Limited</p>
                        <div className='flex gap-6 mt-6'>
                            <button className='py-2 px-5 font-bold bg-[#f60404] rounded-3xl'>Share</button>
                            <button className='p-3 font-extrabold text-[#f60404] bg-white rounded-full border-2 '><GoPlus /></button>
                            <button className='p-3 font-bold text-black bg-white rounded-full border-2 '><BsThreeDots /></button>
                        </div>
                    </div>
                </div>
           </div>
        </div>
        </div>
    );
};

export default PlayMusic;