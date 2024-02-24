"use client";
// import banner1 from '@/assets/Musics/CategoryImg/Categorybanner11.jpg'
import banner1 from '@/assets/Musics/Screenshot 2024-02-11 220328.png'
import Image from 'next/image';
import Link from "next/link";
import { IoIosMusicalNotes } from 'react-icons/io';

const NewReleaseMusic = ({ sadMusic }) => {
    return (
        <div>
            <div className="container mx-auto px-5">
                <div className="flex lg:flex-row flex-col gap-5 bg-black p-5 rounded-md">
                    <div className="flex-initial lg:w-[50%] w-full relative">
                        <Image className='w-full h-full rounded-lg mb-2 transition duration-300 object-cover' src={banner1} width={550} height={600} alt='slice image' />
                        <div className="absolute inset-0 lg:mx-20 md:mx-14 mx-7 flex flex-col justify-center items-center">
                            <section className="bg-black bg-opacity-50 lg:p-20 md:p-10 p-5">
                                <div>
                                    <h1 className="text-center lg:text-4xl md:text-2xl text-xl font-bold text-white">Recommended <span className='text-orange-500'>Music</span></h1>
                                    <p className='text-center px-7 pt-2 text-zinc-400'>If you are an artist, a label, a shop, or you organize music festivals - we made recommended music for you.
                                    </p>
                                </div>
                            </section>
                        </div>
                    </div>
                    <div className="flex-initial lg:w-[50%] w-full">
                        <div className="w-full col-span-2 max-h-[500px] flex flex-col overflow-y-auto p-3 bg-[#191919] rounded-md">
                            <div className="">
                                {
                                    sadMusic.map(music => <div key={music?._id}>
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

export default NewReleaseMusic;