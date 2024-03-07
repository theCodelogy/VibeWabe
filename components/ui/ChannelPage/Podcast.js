'use client'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { IoEyeOutline } from "react-icons/io5";
import { useTranslation } from "react-i18next";


const Podcast = ({allPodcast}) => {
  const { t } = useTranslation();
    return (
        <div className="container mx-auto px-5 mt-20 ">
            <h2 className="text-white text-xl font-bold mb-4"> {t("channel:podcast")}</h2>
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
            {
                allPodcast.slice(3, 7).map(data =>  <div key={data?._id} className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-10">
                <div className=" col-span-1">
                
              <iframe  
              width="560" height="315" 
              src={data?.url}
              title="YouTube video player" 
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              allowfullscreen></iframe>
                  
                </div>
                <div className="col-span-1 pl-4 ">
                   {/* right side */}
        <div className="flex flex-col text-white items-start h-[300px] justify-center ">
         <h2 className="py-1 px-2 text-white bg-red-600 text-left mb-2">{data?.tags}</h2>
         <h2  className="text-white font-bold text-xl text-left mb-2">{data?.title}</h2>
         <h2 className="text-white text-base font-medium text-left mb-2">{data?.language}</h2>
         <h2 className="text-slate-300 text-sm text-left mb-2 w-3/4">{data?.description}</h2>
         <h2 className="py-1 px-2 text-white bg-red-600 text-left mb-2 inline-flex items-center gap-1"><IoEyeOutline/>{data?.view}</h2>
        </div>
      </div>
                </div>)
              }
            </Carousel>
      </div>
        </div>
        {/* watch more */}
        <h2 className="text-xl font-bold text-slate-300 mb-10 mt-8">{t("channel:watch")}</h2>
        <div className="flex flex-col lg:flex-row  justify-around gap-10 lg:gap-8 opacity-80">
          {
             allPodcast.slice(2, 6).map(data =>   <div key={data?._id}>
              <iframe
          className="mx-auto"
          width="100%"
          height="250"
          src={data?.url}
          title="YouTube video player"
          allowfullscreen
        ></iframe>
        
        <div className=" p-4 ">
          <div>
            <h6 className="text-white text-xs md:text-base">
            {data?.title}
            </h6>
            <p className="text-gray-400 text-xs md:text-sm">
              Welcome to Vibewave Channel!
            </p>
            <p className="text-[#a6a6a6] text-xs mt-2">{data?.date}</p>
          </div>
         
        </div>
        </div>)
          }
         
       
            </div>
        </div>
    );
};

export default Podcast;