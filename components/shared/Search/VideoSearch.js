'use client'
import { AiOutlineSearch } from "react-icons/ai";
import { useEffect, useState } from "react";
import axios from "axios";
import SearchVideoCard from "./SearchVideoCard";



const VideoSearch= () => {
    const [videos, setVideos] = useState([])
    const [searchText, setSearchText] = useState("")
    const [limit, setLimit] = useState()
    const [hidden, setHidden] = useState(true)



    useEffect(() => {

        axios.get(`https://vibewabe-server.vercel.app/video?title=${searchText}&limit=5`)
            .then(data => {
                if(searchText){
                    setVideos(data.data)
                    setHidden(false)
                }
            })
    }, [searchText,limit])

    const searchInputHandle = async e => {
      const value = await e.target.value
        setSearchText(value)
        if(value===''){
            setVideos([])
            setHidden(true)
        }
       
        
        
    }

   
    
    

    return (
        <div className="relative">

            <div className="text-center relative z-20">
                <div className=" flex items-center justify-center">
                    <input onChange={searchInputHandle} className=" w-[150px] md:w-[180px] lg:w-[250px] py-2 pl-3 lg:py-[9px] text-xs md:text-sm rounded-full  bg-white text-gray-800 shadow-xl placeholder:text-gray-800" placeholder="Search By Name..." type="text" name="search" id="" />
                    <AiOutlineSearch className="text-red-500 text-lg md:text-2xl font-bold -ml-6 md:-ml-10"></AiOutlineSearch>
                </div>

                <div className={`bg-[#0b101b] absolute top-10 left-0 ${hidden?'hidden':''} w-[200px]  md:w-[400px] pt-5 rounded shadow-lg transition-all shadow-[#c0c0c04f]`}>
                    {
                        videos?.map(video=><SearchVideoCard key={video._id} video={video}/>)
                    }
                </div>

            </div>

        </div>


    );
};

export default VideoSearch;