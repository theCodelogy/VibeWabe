import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaStar } from "react-icons/fa";

const SearchVideoCard = ({ video }) => {
    return (
        <div>
        <Link href={`/video/${video._id}`}>
            <div className='flex gap-3 mt-1 md:mt-4 pb-1 px-3 border-b border-white cursor-pointer hover:bg-[#000000de] hover:text-gray-300 transition-all text-white'>

                <Image className=' w-[60px] h-[60px] rounded' src={video.thambnail} alt='image' width={50} height={50} />
                <div>
                    <h1 className='text-left text-xs md:text-sm  '>{video.title}</h1>
                    <h1 className='text-left text-[10px] md:text-xs my-[3px] '>Relis: {video.date} </h1>
                    <div className='flex gap-1'>
                        <h1 className='text-left text-[10px] md:text-xs '>Rating: {video.rating} </h1>
                        <p className=' text-[10px] md:text-xs text-red-500'><FaStar /> </p>
                    </div>
                </div>
            </div>
        </Link>
        </div>
    );
};

export default SearchVideoCard;