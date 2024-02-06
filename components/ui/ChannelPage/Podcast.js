'use client'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";



import { IoEyeOutline } from "react-icons/io5";

const Podcast = () => {
    return (
        <div className="container mx-auto px-5 mt-10 mb-20 ">
            <h2 className="text-white text-xl font-bold mb-4">Podcast</h2>
            <h2 className="text-slate-300 text-2xl font-medium mb-10">Stay Updated With Vibewave Podcast</h2>
     
        <div className=" w-full h-[380px] bg-gradient-to-r from-slate-800  to-zinc-900 opacity-80 ">
            
            <div className="h-full">
            <Carousel
            showThumbs={false}
            autoPlay={false}
            interval={5000} // set the interval in milliseconds (5 seconds)
            infiniteLoop={true}
            showStatus={false}
          >
           
                {/* slide1 */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <div className=" col-span-1">
                
              <iframe  
              width="560" height="315" 
              src="https://www.youtube.com/embed/-i0YtNQrT-E?si=6I0bvkyKexBRvRXs" 
              title="YouTube video player" 
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              allowfullscreen></iframe>
                  
                </div>
                <div className="col-span-1">
                   {/* right side */}
        <div className="flex flex-col text-white items-start h-[300px] justify-center ">
         <h2 className="py-1 px-2 text-white bg-red-600 text-left mb-2">Big Boss</h2>
         <h2  className="text-white font-bold text-xl text-left mb-2">Reaction of Drama</h2>
         <h2 className="text-white text-base font-medium text-left mb-2">Podcast</h2>
         <h2 className="text-slate-300 text-sm text-left mb-2 w-3/4">On todays episode of the podcast, Im joined by actor, comedian, Carpool Karaoke creator, and former host of The Late Late ...</h2>
         <h2 className="py-1 px-2 text-white bg-red-600 text-left mb-2 inline-flex items-center gap-1"><IoEyeOutline/>1.2k</h2>
        </div>
      </div>
                </div>


                  {/* slide2 */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <div className=" col-span-1">
                
              <iframe  
              width="560" height="315" 
              src="https://www.youtube.com/embed/-i0YtNQrT-E?si=6I0bvkyKexBRvRXs" 
              title="YouTube video player" 
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              allowfullscreen></iframe>
                  
                </div>
                <div className="col-span-1">
                   {/* right side */}
        <div className="flex flex-col text-white items-start h-[300px] justify-center ">
         <h2 className="py-1 px-2 text-white bg-red-600 text-left mb-2">Big Boss</h2>
         <h2  className="text-white font-bold text-xl text-left mb-2">Reaction of Drama</h2>
         <h2 className="text-white text-base font-medium text-left mb-2">Podcast</h2>
         <h2 className="text-slate-300 text-sm text-left mb-2 w-3/4">On todays episode of the podcast, Im joined by actor, comedian, Carpool Karaoke creator, and former host of The Late Late ...</h2>
         <h2 className="py-1 px-2 text-white bg-red-600 text-left mb-2 inline-flex items-center gap-1"><IoEyeOutline/>1.2k</h2>
        </div>
      </div>
                </div>
                  {/* slide3 */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <div className=" col-span-1">
                
              <iframe  
              width="560" height="315" 
              src="https://www.youtube.com/embed/-i0YtNQrT-E?si=6I0bvkyKexBRvRXs" 
              title="YouTube video player" 
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              allowfullscreen></iframe>
                  
                </div>
                <div className="col-span-1">
                   {/* right side */}
        <div className="flex flex-col text-white items-start h-[300px] justify-center ">
         <h2 className="py-1 px-2 text-white bg-red-600 text-left mb-2">Big Boss</h2>
         <h2  className="text-white font-bold text-xl text-left mb-2">Reaction of Drama</h2>
         <h2 className="text-white text-base font-medium text-left mb-2">Podcast</h2>
         <h2 className="text-slate-300 text-sm text-left mb-2 w-3/4">On todays episode of the podcast, Im joined by actor, comedian, Carpool Karaoke creator, and former host of The Late Late ...</h2>
         <h2 className="py-1 px-2 text-white bg-red-600 text-left mb-2 inline-flex items-center gap-1"><IoEyeOutline/>1.2k</h2>
        </div>
      </div>
                </div>
            </Carousel>
      </div>
     
     
        </div>
        </div>
    );
};

export default Podcast;