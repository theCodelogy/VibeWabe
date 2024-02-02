"use client";
import Filter from "@/components/ui/VideoGrupComponents/webSeries/Filter";
import SeriesBanner from "@/components/ui/VideoGrupComponents/webSeries/SeriesBanner";
import SeriesCard from "@/components/ui/VideoGrupComponents/webSeries/SeriesCard";
import UpComingCard from "@/components/ui/VideoGrupComponents/webSeries/UpComingCard";
import React from "react";
import Footer from "@/components/shared/footer/footer";
import SeriesComedy from "@/components/ui/VideoGrupComponents/webSeries/SeriesComedy";
import SeriesKids from "@/components/ui/VideoGrupComponents/webSeries/SeriesKids";
import SeriesAdventure from "@/components/ui/VideoGrupComponents/webSeries/SeriesAdventure";
import SeriesRomantic from "@/components/ui/VideoGrupComponents/webSeries/SeriesRomantic";
import SeriesHorror from "@/components/ui/VideoGrupComponents/webSeries/SeriesHorror";
const page = () => {
  return (
    <div>
      <SeriesBanner />
      <Filter />
      <SeriesCard />
      <UpComingCard />
      <SeriesComedy/>
      <SeriesKids/>
      <SeriesAdventure/>
      <SeriesRomantic/>
      <SeriesHorror/>
    </div>
  );
};

export default page;
