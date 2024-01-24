import Footer from "@/components/shared/footer/footer";
import MainBanner from "@/components/ui/VideoGrupComponents/MainBanner/MainBanner";
import ActionMovies from "@/components/ui/VideoGrupComponents/videoHome/ActionMovies";
import BestSeries from "@/components/ui/VideoGrupComponents/videoHome/BestSeries";
import HorrorMovies from "@/components/ui/VideoGrupComponents/videoHome/HorrorMovies";
import KidsMovies from "@/components/ui/VideoGrupComponents/videoHome/KidsMovies";
import NewReleses from "@/components/ui/VideoGrupComponents/videoHome/NewReleses";
import Recomanded from "@/components/ui/VideoGrupComponents/videoHome/Recomanded";
import ThrillersMovies from "@/components/ui/VideoGrupComponents/videoHome/ThrillersMovies";
import Upcomming from "@/components/ui/VideoGrupComponents/videoHome/Upcomming";
import React from "react";

const Video = () => {
  return (
    <>
      <div className="max-w-[1200px]  mx-auto px-6 ">
        <MainBanner />
        <Upcomming />
        <Recomanded />
        <NewReleses />
        <KidsMovies />
        <ActionMovies />
        <BestSeries />
        <ThrillersMovies />
        <HorrorMovies />
      </div>
      <Footer />
    </>
  );
};

export default Video;
