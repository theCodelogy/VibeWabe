const FristHomeBanner = () => {
  return (
    <div>
      <div className="relative bg-gradient-to-r from-purple-600 to-blue-600 h-screen text-white overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://i.ibb.co/rFMNVWf/BD-en-20240108-popsignuptwoweeks-perspective-alpha-website-medium.jpg"
            alt="Background Image"
            className="object-cover object-center w-full h-full"
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>

        <div className="relative z-10 flex flex-col justify-center items-center h-full text-center">
          <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="text-center">
              <p className=" mx-auto mb-4 text-4xl font-bold  text-white text-2xl lg:text-6xl lg:leading-tight">
                Welcome to VibeWave Website
              </p>
              <h1 className="max-w-2xl mx-auto px-6 lg:text-xl text-white font-inter text-xs">
                You can join the recent trend of creating movie posters in the
                style of Disney Pixar by showcasing your creative skills through
                a
              </h1>
              <div className="px-8 sm:items-start sm:justify-center sm:px-0 sm:space-x-5 sm:flex mt-9">
                <a
                  href="#"
                  title=""
                  className="mb-3 sm:mb-0 inline-flex items-center justify-center w-full px-8 py-3 text-lg font-bold text-white transition-all duration-200 bg-red-600 border-2 border-transparent sm:w-auto rounded-xl hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                  role="button"
                >
                  Get Started
                </a>
                <a
                  href="#"
                  className="inline-flex items-center justify-center w-full px-8 py-3 text-lg font-bold text-gray-900 hover:text-white transition-all duration-200 bg-gray-100 border-2 border-gray-900 sm:w-auto rounded-xl hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                  role="button"
                >
                  Show Details
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FristHomeBanner;
