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
import { authContext } from "@/utils/AuthProvider";
import React, { useContext } from "react";

const Video = () => {
  return (
    <>
      <div>
        <MainBanner />
      <div className=" max-w-screen-xl mx-auto md:px-16 lg:px-24 py-5 px-4">
      <Upcomming />
        <Recomanded />
        <NewReleses />
        <KidsMovies />
        <ActionMovies />
        <BestSeries />
        <ThrillersMovies />
        <HorrorMovies />
      </div>
        
      </div>
    </>
  );
};

export default Video;