'use client'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";



import { IoEyeOutline } from "react-icons/io5";

const Podcast = () => {
    return (
        <div className="container mx-auto px-5 mt-10 ">
            <h2 className="text-white text-xl font-bold mb-4">Podcast</h2>
            <h2 className="text-slate-300 text-2xl font-medium mb-10">Stay Updated With Vibewave Podcast</h2>
     
        <div className=" w-full lg:h-[380px] bg-gradient-to-r from-slate-800  to-zinc-900 opacity-80 mb-10">
            
            <div className="h-full">
            <Carousel
            showThumbs={false}
            autoPlay={true}
            interval={5000} 
            infiniteLoop={true}
            showStatus={false}
          >
           
                {/* slide1 */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-10">
                <div className=" col-span-1">
                
              <iframe  
              width="560" height="315" 
              src="https://www.youtube.com/embed/-i0YtNQrT-E?si=6I0bvkyKexBRvRXs" 
              title="YouTube video player" 
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              allowfullscreen></iframe>
                  
                </div>
                <div className="col-span-1 pl-4 ">
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
                <div className="col-span-1 pl-4">
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
                <div className="col-span-1 pl-4">
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
        {/* watch more */}
        <h2 className="text-xl font-bold text-slate-300 mb-10 mt-8">Watch More Podcasts</h2>
        <div className="flex flex-col lg:flex-row  justify-around gap-10 lg:gap-8 opacity-80">
           <div>
            <iframe
        className="mx-auto"
        width="100%"
        height="250"
        src="https://www.youtube.com/embed/-i0YtNQrT-E?si=6I0bvkyKexBRvRXs"
        title="YouTube video player"
        allowfullscreen
      ></iframe>
      
      <div className=" p-4 ">
        <div>
          <h6 className="text-white text-xs md:text-base">
          Reaction of Drama
          </h6>
          <p className="text-gray-400 text-xs md:text-sm">
            Welcome to Vibewave Channel!
          </p>
          <p className="text-[#a6a6a6] text-xs mt-2">Jan 30, 2023</p>
        </div>
       
      </div>
      </div>
       {/* second */}
      <div>
        <iframe
        className="mx-auto"
        width="100%"
        height="250"
        src="https://www.youtube.com/embed/-i0YtNQrT-E?si=6I0bvkyKexBRvRXs"
        title="YouTube video player"
        allowfullscreen
      ></iframe>
      <div className=" p-4 ">
        <div>
          <h6 className="text-white text-xs md:text-base">
          Reaction of Drama
          </h6>
          <p className="text-gray-400 text-xs md:text-sm">
          Welcome to Vibewave Channel!
          </p>
          <p className="text-[#a6a6a6] text-xs mt-2">Jan 30, 2023</p>
        </div>
       
      </div>
      </div>
      {/* third */}
      
      <div>
      
        <iframe
        className="mx-auto"
        width="100%"
        height="250"
        src="https://www.youtube.com/embed/-i0YtNQrT-E?si=6I0bvkyKexBRvRXs"
        title="YouTube video player"
        allowfullscreen
      ></iframe>
      
      <div className=" p-4 ">
        <div>
          <h6 className="text-white text-xs md:text-base">
          Reaction of Drama
          </h6>
          <p className="text-gray-400 text-xs md:text-sm">
          Welcome to Vibewave Channel!
          </p>
          <p className="text-[#a6a6a6] text-xs mt-2">Jan 30, 2023</p>
        </div>
       
      </div>
      </div>
      {/* fourth */}
      <div>
      
        <iframe
        className="mx-auto"
        width="100%"
        height="250"
        src="https://www.youtube.com/embed/-i0YtNQrT-E?si=6I0bvkyKexBRvRXs"
        title="YouTube video player"
        allowfullscreen
      ></iframe>
      
      <div className=" p-4 ">
        <div>
          <h6 className="text-white text-xs md:text-base">
          Reaction of Drama
          </h6>
          <p className="text-gray-400 text-xs md:text-sm">
          Welcome to Vibewave Channel!
          </p>
          <p className="text-[#a6a6a6] text-xs mt-2">Jan 30, 2023</p>
        </div>
       
      </div>
      </div>
            </div>
        </div>
    );
};

export default Podcast;