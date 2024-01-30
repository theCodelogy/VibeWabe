import Image from "next/image";
import React from "react";
import musicimg from "@/assets/music/card2.jpg";

const TrendingMusic = () => {
  return (
    <div className="my-14 container mx-auto px-10">
      <h1 className="text-2xl font-bold text-white py-3 border-b-2 border-white mb-6 ">
        Trending Songs
      </h1>

      <div className="border-2 p-5 rounded-md bg-zinc-800">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-20   text-white">
          <Image
            width={550}
            className="h-[450px] rounded-md"
            src={musicimg}
            alt="music image"
          />

          <div>
            <h1 className="text-2xl my-3 font-bold ">
              Title: Mere Zindagi Hai Tu
            </h1>
            <p className="text-lg font-normal leading-7">
              Artists: Jubin Nautiyal, Neeti Mohan{" "}
            </p>
            <p className="text-lg font-normal leading-7">
              Album: Satyameva Jayate 2
            </p>
            <p className="text-lg font-normal leading-7">Release Date: 2022</p>
            <div className="flex">
            <button className="bg-gradient-to-r from-red-600 to-zinc-500 text-white px-4 py-2 rounded-full mr-2">Watch Now</button>
            <button className="text-white border border-red-600 px-4 py-2 rounded-full">Add to List</button>
        </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrendingMusic;
