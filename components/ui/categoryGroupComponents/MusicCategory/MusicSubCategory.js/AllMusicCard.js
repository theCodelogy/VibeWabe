import Image from "next/image";
import { FaCirclePlay } from "react-icons/fa6";
import Link from "next/link";

const AllMusicCard = ({AllmusicShows}) => {
    return (
        <div className="container mx-auto mb-16">
            <div className="grid xl:grid-cols-6 lg:grid-cols-4 md:grid-cols-2 grid-cols-2 gap-5">
                {
                    AllmusicShows.map(AllmusicShow=><>
                    <div key={AllmusicShow?._id} className="mb-20">
                        <div className='group relative rounded-lg lg:w-48 md:w-48 w-auto lg:h-48 md:h-48 h-56 mt-5 mx-5'>
                        <Link href={`/music/${AllmusicShow?._id}`}>
                            <Image className='w-full h-full rounded-lg mb-2 transition duration-300' src={AllmusicShow?.thambnail} width={200} height={200} alt='slice image' />

                            <div className='absolute text-3xl text-white rounded-lg -top-0 left-0  flex justify-center items-center lg:w-48 md:w-48 w-full lg:h-48 md:h-48 h-56 bg-black bg-opacity-55 opacity-0 group-hover:opacity-100 transition-opacity duration-300 '>
                                <FaCirclePlay className='cursor-pointer'></FaCirclePlay>
                            </div>
                            <h3 className='text-white hover:text-sky-400'>{AllmusicShow?.title}</h3>
                           </Link>
                            <p className='text-sm text-zinc-500'>{AllmusicShow?.singerName}</p>
                        </div>
                        </div>
                    </>)
                }

            </div>
        </div>
    );
};

export default AllMusicCard;