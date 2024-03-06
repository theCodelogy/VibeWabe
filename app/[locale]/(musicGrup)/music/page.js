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
import NewReleaseMusic from "@/components/ui/categoryGroupComponents/MusicCategory/NewReleaseMusic";
import ArabicMusicCard from "@/components/ui/categoryGroupComponents/MusicCategory/ArabicMusicCard";
import SpanishMusicCard from "@/components/ui/categoryGroupComponents/MusicCategory/SpanishMusicCard";
import Link from "next/link";
import useMusicFetch from "@/utils/hooks/useMusicFetch";
import TopRatedMusic from "@/components/ui/categoryGroupComponents/MusicCategory/TopRatedMusic";

const Musec = async() => {
  //sad music
  const sad = await axios.get(`https://vibewabe-server.vercel.app/music?recommended=true`)
  const sadMusic = sad.data;
  return (
    <div className="text-white container mx-auto">
      <MusicBanner></MusicBanner>
      {/* <MusicBanner></MusicBanner> */}
      {/* <MusicSlider></MusicSlider> */}
      {/* <Card></Card> */}
      {/* <TrendingMusic></TrendingMusic> */}
      {/* <MusicSlider2></MusicSlider2> */}
      {/* <Card2></Card2> */}
      
      
      <div className="mb-16">
      <MusicCategory></MusicCategory>
      </div>
      <div className="mb-16">
        <TopRatedMusic></TopRatedMusic>
      </div>
      <HotArtists></HotArtists>
      <div className="mb-16">
        <BanglaMusicCard category={"bangla"}></BanglaMusicCard>
      </div>
      <div className="mb-20">
        <HindiMusicCard category={"hindi"}></HindiMusicCard>
      </div>
      <div className="mb-16">
        <NewReleaseMusic sadMusic={sadMusic}></NewReleaseMusic>
      </div>
      
      <div className="mb-16">
        <EnglishMuiscCard category={"english"}></EnglishMuiscCard>
      </div>
      <div className="mb-16">
        <ArabicMusicCard category={"arabic"}></ArabicMusicCard>
      </div>
      <div className="mb-20">
        <SpanishMusicCard category={"spanish"}></SpanishMusicCard>
      </div>
    </div>
  );
};

export default Musec;
