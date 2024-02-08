const VideoTrailer = ({ title, year, genres, src, description }) => {
  return (
    <div className="sm:flex items-center max-w-screen-xl  ">
      <div className="sm:w-1/2 p-10">
        <div>
          <iframe
            className="w-full h-[100vh] md:h-[43vh]"
            src={src}
            title="YouTube video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          ></iframe>
        </div>
      </div>
      <div className="sm:w-1/2 p-5">
        <div>
          <div className="bg-cover bg-center relative">
            <div className="bg-gradient-to-r from-black to-transparent absolute top-0 left-0 w-full h-full opacity-75"></div>
            <div className=" p-4 rounded-md shadow-md relative z-10">
              <div className="mb-4">
                <h3 className="text-2xl font-semibold text-white mb-2">
                  {title}
                </h3>
              </div>
              <div className="mb-4">
                <h6 className="text-sm text-gray-600 mb-1">
                  {year} | {genres}
                </h6>
                <div className="flex items-center">
                  <button className="bg-gradient-to-r from-red-600 to-zinc-500 text-white px-4 py-2 rounded-full mr-2">
                    Rent ৳20
                  </button>
                </div>
              </div>
              <div className="mb-4">
                <h6 className="text-sm text-gray-600 mb-2">{description}</h6>
              </div>
              <div className="flex">
                <button className="bg-gradient-to-r from-red-600 to-zinc-500 text-white px-4 py-2 rounded-full mr-2">
                  Watch Now
                </button>
                <button className="text-white border border-red-600 px-4 py-2 rounded-full">
                  Add to List
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoTrailer;
