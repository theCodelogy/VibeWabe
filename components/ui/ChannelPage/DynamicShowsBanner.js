'use client'

const DynamicShowsBanner = () => {
    return (
        <div className="max-w-screen-xl mx-auto opacity-70">
        <iframe
          className="mx-auto"
          width="100%"
          height="500"
          src="https://www.youtube.com/embed/jYszXiz_hus?si=nVYD2fX9pXeB9Jp_"
          title="YouTube video player"
          allowfullscreen
        ></iframe>
     
  
        <div className=" p-4 ">
          <div>
            <h6 className="text-white text-xs md:text-lg">
            Show पर आते ही शुरू हुई Kapil और Sharks की टांग खिंचाई | The Kapil Sharma Show S2
            </h6>
            <p className="text-gray-400 text-xs md:text-sm">
              Set India
            </p>
            <p className="text-[#a6a6a6] text-xs mt-2">Jan 30, 2023</p>
          </div>
         
        </div>
        <div className="w-full rounded-md px-4 bg-[#3c3c3c] py-1">
            <div className="text-[#a6a6a6] my-4 text-xs md:text-sm">
             <span className="font-bold">Description:</span> 
             <h2>Show Name: The Kapil Sharma Show Season 2 </h2>
             <h2>Star Cast: Kiku Sharda, Archana Puran Singh, Sumona Chakravarti, Krushna Abhishek, Bharti Singh </h2>
             <h2>Host: Kapil Sharma </h2>
             <h2>Producers: Kapil Sharma, Salman Khan, Deepak Dhar </h2>
             <h2>Guest: Vineeta Singh, Peyush Bansal, Namita Thapar, Anupam Mittal, Amit Jain and Aman Gupta </h2>

            </div>
            <h2 className="text-xs md:text-sm text-blue-500 my-4 md:my-0 ">
            Behance: https://www.behance.net/al7nd
            </h2>
          </div>
          
      </div>
    );
};

export default DynamicShowsBanner;