'use client'

const DynamicShowsBanner = ({allShows, id}) => {
  console.log(allShows, id)
    return (
        <div className="max-w-screen-xl mx-auto opacity-70">
        <iframe
          className="mx-auto"
          width="100%"
          height="500"
          src={allShows?.url}
          title="YouTube video player"
          allowfullscreen
        ></iframe>
     
  
        <div className=" p-4 ">
          <div>
            <h6 className="text-white text-xs md:text-lg">
            {allShows?.title}
            </h6>
            <p className="text-gray-400 text-xs md:text-sm">
              Set India
            </p>
            <p className="text-[#a6a6a6] text-xs mt-2">{allShows?.date}</p>
          </div>
         
        </div>
        <div className="w-full rounded-md px-4 bg-[#3c3c3c] py-1">
            <div className="text-[#a6a6a6] my-4 text-xs md:text-sm">
             <span className="font-bold">Description:</span> 
             <h2>Show Name: {allShows?.title} </h2>
             <h2>Producers: Kapil Sharma, Salman Khan, Deepak Dhar </h2>
             <h2>Views: {allShows?.views} </h2>

            </div>
            <h2 className="text-xs md:text-sm text-blue-500 my-4 md:my-0 ">
            Behance: https://www.behance.net/al7nd
            </h2>
          </div>
          
      </div>
    );
};

export default DynamicShowsBanner;