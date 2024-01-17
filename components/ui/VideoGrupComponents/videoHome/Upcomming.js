import Image from 'next/image';
import React from 'react';
import upimg from '@/assets/comingsoon.jpg'

const Upcomming = () => {
    return (
        <div className='my-14'>
            <h1 className='text-2xl font-bold text-white py-3 border-b-2 border-white mb-6 '>Upcoming Movies</h1>

            <div className='grid grid-cols-1 md:grid-cols-2 items-center gap-7  text-white'>

                <Image width={550} className='h-[450px]' src={upimg} alt='upcomming image' />

                <div>
                    <h1 className='text-2xl my-3 font-bold '>Title: Aladdin 2019 Movie</h1>
                    <p className='text-lg font-normal leading-7'>Details:  movie typefaces with the glitter and glamour of Hollywood movie typefaces with the glitter and glamour of Hollywood movie typefaces with the glitter</p>
                    <div className='flex gap-6 mt-6'>
                        <button className='py-3 px-5 font-bold bg-[#f60404]'>Watch Now</button>
                        <button className='py-3 px-5 font-bold text-[#f60404] bg-white'>Add to list</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Upcomming;