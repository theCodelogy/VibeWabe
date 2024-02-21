
import { GoPlus } from "react-icons/go";
import { BsThreeDots } from "react-icons/bs";

const PlayMusic = ({ musicPlay }) => {
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
                    <div className="flex justify-between lg:flex-row md:flex-row flex-col ">
                        <div>
                            <div className=" mt-5">
                                <h1 className='lg:text-3xl md:text-3xl text-2xl font-bold'>{musicPlay?.title}</h1>
                                <p>{musicPlay?.description}</p>
                                {/* <div className='flex gap-6'>
                                <button className='py-2 px-5 font-bold bg-[#f60404] text-white rounded-3xl'>Share</button>
                                <button className='p-3 font-extrabold text-[#f60404] bg-white rounded-full border-2 '><GoPlus /></button>
                                <button className='p-3 font-bold text-black bg-white rounded-full border-2 '><BsThreeDots /></button>
                                </div> */}
                                
                            </div>
                            <p className='text-sm font-normal leading-7 text-zinc-800'>Singer Name - {musicPlay?.releaseDate}</p>
                            <p>{musicPlay?.view} Views </p>

                            {/* <p className='text-sm font-normal leading-7 text-zinc-800'>Music Release Date - {musicPlay?.releaseDate}</p> */}
                            
                        </div>
                        <div className='flex gap-6 h-10 mt-5'>
                                <button className='py-2 px-5 font-bold bg-[#f60404] text-white rounded-3xl'>Share</button>
                                <button className='p-3 font-extrabold text-[#f60404] bg-white rounded-full border-2 '><GoPlus /></button>
                                <button className='p-3 font-bold text-black bg-white rounded-full border-2 '><BsThreeDots /></button>
                        </div>
                    </div>
                    <p className='text-sm font-normal leading-7 text-zinc-800 mt-6'>℗ 2024 Super VibeWabe Website Private Limited</p>
                </div>
            </div>
        </div>
    );
};

export default PlayMusic;