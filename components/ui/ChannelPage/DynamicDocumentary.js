'use client'

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import { IoEyeOutline } from "react-icons/io5";

const DynamicDocumentary = ({allDocumentary, id}) => {
  console.log(allDocumentary, id)
    return (
        <div className="container mx-auto px-5 mt-10 mb-20 ">
            <div className="py-10 w-full lg:h-[380px] bg-gradient-to-r from-slate-800  to-zinc-900 opacity-80 mb-10">
            
            <div className="h-full">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-10">
                <div className=" col-span-1"> 
              <iframe  
              width="560" height="315" 
              src={allDocumentary?.url}
              title="YouTube video player" 
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              allowfullscreen></iframe>
                  
                </div>
                <div className="col-span-1 pl-4 ">
                   {/* right side */}
        <div className="flex flex-col text-white items-start h-[300px] justify-center ">
         <h2 className="py-1 px-2 text-white bg-red-600 text-left mb-2">{allDocumentary?.title}</h2>
         <h2  className="text-white font-bold text-xl text-left mb-2">{allDocumentary?.date}</h2>
         
         <h2 className="text-slate-300 text-sm text-left mb-2 w-3/4">{allDocumentary?.description} </h2>
         <h2 className="py-1 px-2 text-white bg-red-600 text-left mb-2 inline-flex items-center gap-1"><IoEyeOutline/>{allDocumentary?.view}</h2>
        </div>
      </div>
                </div>
      </div>
        </div>
            
        </div>
    );
};

export default DynamicDocumentary;