import Card from "@/components/MusicPage/Card";
import HotArtists from "@/components/MusicPage/HotArtists";
import MusicBanner from "@/components/MusicPage/MusicBanner";
import TrendingMusic from "@/components/MusicPage/TrendingMusic";
import Card2 from "@/components/ui/MusicPage/Card2";
// import MusicBanner from "@/components/ui/MusicPage/MusicBanner";
import MusicSlider from "@/components/ui/MusicPage/MusicSlider";
import MusicSlider2 from "@/components/ui/MusicPage/MusicSlider2";
import MusicCategory from "@/components/ui/categoryGroupComponents/MusicCategory/MusicCategory";
import NewMusicCard from "@/components/ui/categoryGroupComponents/MusicCategory/NewMusicCard";
import axios from "axios";
import React from "react";

const Musec = async() => {
  const res = await axios.get(`https://vibewabe-server.vercel.app/music?category=Classical`)
  const musics = res.data
  return (
    <div className="text-white container mx-auto">
      <MusicBanner></MusicBanner>
      {/* <MusicBanner></MusicBanner> */}
      <HotArtists></HotArtists>
      {/* <MusicSlider></MusicSlider> */}
      {/* <Card></Card> */}
      {/* <TrendingMusic></TrendingMusic> */}
      <MusicCategory></MusicCategory>
      {/* <MusicSlider2></MusicSlider2> */}
      {/* <Card2></Card2> */}
      <div className="mb-20">
        <NewMusicCard musics={musics}></NewMusicCard>

      </div>
    </div>
  );
};

export default Musec;
