import Card from "@/components/MusicPage/Card";
import HotArtists from "@/components/MusicPage/HotArtists";
import MusicBanner from "@/components/MusicPage/MusicBanner";
// import MusicBanner from "@/components/ui/MusicPage/MusicBanner";
import MusicCategory from "@/components/ui/categoryGroupComponents/MusicCategory/MusicCategory";
import axios from "axios";
import React from "react";
import HindiMusicCard from "@/components/ui/categoryGroupComponents/MusicCategory/HindiMusicCard";
import BanglaMusicCard from "@/components/ui/categoryGroupComponents/MusicCategory/BanglaMusicCard"
import EnglishMuiscCard from "@/components/ui/categoryGroupComponents/MusicCategory/EnglishMuiscCard"

const Musec = async() => {

  //hindi music
  const res = await axios.get(`https://vibewabe-server.vercel.app/music?language=hindi`)
  const hindi = res.data;
  //bangla music
  const ress = await axios.get(`https://vibewabe-server.vercel.app/music?language=bangla`)
  const bangla = ress.data;
  //english music
  const resh = await axios.get(`https://vibewabe-server.vercel.app/music?language=english`)
  const english = resh.data;
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
        <HindiMusicCard hindi={hindi}></HindiMusicCard>
      </div>
      <div className="mb-20">
        <BanglaMusicCard bangla={bangla}></BanglaMusicCard>
      </div>
      <div className="mb-20">
        <EnglishMuiscCard english={english}></EnglishMuiscCard>
      </div>
    </div>
  );
};

export default Musec;
