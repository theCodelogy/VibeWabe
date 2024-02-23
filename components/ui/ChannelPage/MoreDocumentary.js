'use client'

const MoreDocumentary = ({category, id}) => {
  const filter = category.filter(data=>data._id !== id)
    return (
        <div className="container mx-auto px-5 mt-10 pb-10 ">
            <h2 className="text-xl font-bold text-slate-300 mb-10 mt-8">Watch More Documentaries</h2>
        <div className="flex flex-col lg:flex-row  justify-around gap-10 lg:gap-8 ">
          {
            filter.slice(3, 7).map(data =>  <div key={data?._id}>
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
            {data?.description.slice(0, 50)}
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

export default MoreDocumentary;