import Card from "@/components/MusicPage/Card";
import HotArtists from "@/components/MusicPage/HotArtists";
import TrendingMusic from "@/components/MusicPage/TrendingMusic";
import Card2 from "@/components/ui/MusicPage/Card2";
import MusicBanner from "@/components/ui/MusicPage/MusicBanner";
import MusicSlider from "@/components/ui/MusicPage/MusicSlider";
import MusicSlider2 from "@/components/ui/MusicPage/MusicSlider2";
import MusicCategory from "@/components/ui/categoryGroupComponents/MusicCategory/MusicCategory";
import NewMusicCard from "@/components/ui/categoryGroupComponents/MusicCategory/NewMusicCard";
import React from "react";

const Musec = () => {
  return (
    <div className="text-white container mx-auto">
      {/* <MusicBanner></MusicBanner> */}
      <HotArtists></HotArtists>
      <MusicSlider></MusicSlider>
      {/* <Card></Card> */}
      <TrendingMusic></TrendingMusic>
      <MusicCategory></MusicCategory>
      {/* <MusicSlider2></MusicSlider2> */}
      {/* <Card2></Card2> */}
      <div className="mb-20">
        <NewMusicCard></NewMusicCard>
      </div>
    </div>
  );
};

export default Musec;
