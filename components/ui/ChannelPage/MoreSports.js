'use client'

const MoreSports = () => {
    return (
        <div className="max-w-screen-xl mx-auto mt-20 ">
            <h2 className="text-xl font-bold text-slate-300 mb-10">Watch More Matches</h2>
            <div className="flex  justify-around gap-8 pb-5 ">
            <iframe
        className="mx-auto"
        width="100%"
        height="250"
        src="https://www.youtube.com/embed/0fcwmBQloas?si=2k8CpeXTAwZpGPVT"
        title="YouTube video player"
        allowfullscreen
      ></iframe>
        <iframe
        className="mx-auto"
        width="100%"
        height="250"
        src="https://www.youtube.com/embed/0fcwmBQloas?si=2k8CpeXTAwZpGPVT"
        title="YouTube video player"
        allowfullscreen
      ></iframe>
        <iframe
        className="mx-auto"
        width="100%"
        height="250"
        src="https://www.youtube.com/embed/0fcwmBQloas?si=2k8CpeXTAwZpGPVT"
        title="YouTube video player"
        allowfullscreen
      ></iframe>
            </div>
        </div>
    );
};

export default MoreSports;