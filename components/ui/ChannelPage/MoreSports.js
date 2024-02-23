'use client'

import Link from "next/link";

const MoreSports = ({category, id}) => {
  const filter = category.filter(data=>data._id !== id)
    return (
        <div className="max-w-screen-xl mx-auto mt-20 opacity-70">
            <h2 className="text-xl font-bold text-slate-300 mb-10">Watch More Matches</h2>
            <div className="flex flex-col lg:flex-row  justify-around gap-10 lg:gap-8 pb-5 ">
              {
                 filter.slice(3, 7).map(data =>   <div key={data?._id}>
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
                <h6 className="text-white text-xs md:text-lg">
                {data?.title}
                </h6>
                <p className="text-gray-400 text-xs md:text-sm">
                  Welcome to Alsido Football!
                </p>
                <p className="text-[#a6a6a6] text-xs mt-2">{data?.date}</p>
                <Link href={`${data?._id}`}> 
         <button className="bg-red-500 text-white rounded-md px-1 mt-2">watch</button> </Link>
              </div>
             
            </div>
            </div>)
              }
         
       {/* second */}
      {/* <div>
        <iframe
        className="mx-auto"
        width="100%"
        height="250"
        src="https://www.youtube.com/embed/0fcwmBQloas?si=2k8CpeXTAwZpGPVT"
        title="YouTube video player"
        allowfullscreen
      ></iframe>
      <div className=" p-4 ">
        <div>
          <h6 className="text-white text-xs md:text-lg">
            Messi, Ronaldo, Neymar & Mbappe Showing Their Class in 2023
          </h6>
          <p className="text-gray-400 text-xs md:text-sm">
            Welcome to Alsido Football!
          </p>
          <p className="text-[#a6a6a6] text-xs mt-2">Jan 30, 2023</p>
        </div>
       
      </div>
      </div> */}
      {/* third */}

      {/* <div>
      
        <iframe
        className="mx-auto"
        width="100%"
        height="250"
        src="https://www.youtube.com/embed/0fcwmBQloas?si=2k8CpeXTAwZpGPVT"
        title="YouTube video player"
        allowfullscreen
      ></iframe>
      
      <div className=" p-4 ">
        <div>
          <h6 className="text-white text-xs md:text-lg">
            Messi, Ronaldo, Neymar & Mbappe Showing Their Class in 2023
          </h6>
          <p className="text-gray-400 text-xs md:text-sm">
            Welcome to Alsido Football!
          </p>
          <p className="text-[#a6a6a6] text-xs mt-2">Jan 30, 2023</p>
        </div>
       
      </div>
      </div> */}
            </div>
        </div>
    );
};

export default MoreSports;