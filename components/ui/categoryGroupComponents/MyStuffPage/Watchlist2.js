"use client";

import Image from "next/image";
import { ImCross } from "react-icons/im";
import { GiPlayButton } from "react-icons/gi";
//images
import image1 from "@/assets/WatchlistImage/w-1.webp";
import image2 from "@/assets/WatchlistImage/w-2.webp";
import image3 from "@/assets/WatchlistImage/w-3.webp";
import image4 from "@/assets/WatchlistImage/w-4.webp";
import { authContext } from "@/utils/AuthProvider";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";

const Watchlist2 = () => {
  const {user} = useContext(authContext)
  const [lists , setLists] = useState([])

  useEffect(() =>{
    axios.get(`https://vibewabe-server.vercel.app/videoHistory/${user?.email}`)
    .then(res => setLists(res.data))
  },[user])
  return (
    <div className="container mx-auto pt-10 px-20">
      <div className="flex justify-between items-center border-b border-zinc-500">
        <div>
          <h1 className="text-xl font-bold text-white py-5  ">Watchlist</h1>
        </div>

        <div>
          <button class="bg-gradient-to-r from-red-500 to-yellow-500 py-2 px-2 rounded-md text-white font-medium">
            Clear History
          </button>
        </div>
      </div>
      {/* main section starts from here */}
      <div className="mt-5 opacity-70">
        {/* section one */}
       {lists.map(list => <section key={list._id} className="md:flex md:justify-between items-center mb-6 border-b md:border-b-0 border-slate-600">
          <div className="flex items-center gap-5">
            <Link href={`/video/${list?._id}`} className="relative overflow-hidden w-[200px] h-[80px] md:w-[120px] md:h-[120px] rounded-sm hover:scale-110">
              <Image
                src={list.thambnail}
                alt="banner"
                className="object-cover object-center w-full h-full"
                width={200}
                height={200}
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <GiPlayButton className="text-red-700 text-3xl transition duration-300 transform hover:text-white" />
              </div>
            </Link>

            <div className="text-white">
              <h2 className="text-base md:text-xl  hover:text-red-600 font-semibold my-2">
                {list.title}
              </h2>
              <p className="text-zinc-400 text-sm md:text-base">
              {list.description}
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1">
            <p className="text-zinc-400 font-semibold my-2">18 Hours Ago </p>
            <ImCross className="text-red-700 hover:text-white text-lg place-self-start md:place-self-end mb-3 md:mb-0" />
          </div>
        </section> ) }

      

        
      </div>
    </div>
  );
};

export default Watchlist2;
