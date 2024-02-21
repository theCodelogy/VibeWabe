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
  //trending music
  const roman = await axios.get(`https://vibewabe-server.vercel.app/music?sortBy=view&sort=-1&limit=20`)
  const romantics = roman.data;
   //top rated music
   const topRet = await axios.get(`https://vibewabe-server.vercel.app/music?sortBy=rating&sort=-1&limit=20`)
   const TopRatedMusics = topRet.data;
  //sad music
  const sad = await axios.get(`https://vibewabe-server.vercel.app/music?recommended=true`)
  const sadMusic = sad.data;
  //hindi music
  const res = await axios.get(`https://vibewabe-server.vercel.app/music?language=hindi&sortBy=view&sort=-1&limit=20`)
  const hindi = res.data;
  //bangla music
  const ress = await axios.get(`https://vibewabe-server.vercel.app/music?language=bangla&sortBy=view&sort=-1&limit=20`)
  const bangla = ress.data;
  //english music
  const resh = await axios.get(`https://vibewabe-server.vercel.app/music?language=english&sortBy=view&sort=-1&limit=20`)
  const english = resh.data;
  //arabic music
  const arad = await axios.get(`https://vibewabe-server.vercel.app/music?language=arabic&sortBy=view&sort=-1&limit=20`)
  const arabic = arad.data;
  //arabic music
  const spani = await axios.get(`https://vibewabe-server.vercel.app/music?language=spanish&sortBy=view&sort=-1&limit=20`)
  const spanish = spani.data;
  return (
    <div className="text-white container mx-auto">
      <MusicBanner></MusicBanner>
      {/* <MusicBanner></MusicBanner> */}
      <HotArtists></HotArtists>
      {/* <MusicSlider></MusicSlider> */}
      {/* <Card></Card> */}
      {/* <TrendingMusic></TrendingMusic> */}
      <MusicCategory romantics={romantics}></MusicCategory>
      {/* <MusicSlider2></MusicSlider2> */}
      {/* <Card2></Card2> */}
      <div className="">
      
        <TopRatedMusic TopRatedMusics={TopRatedMusics}></TopRatedMusic>
      </div>
      
      <div className="mb-16">
      
        <BanglaMusicCard bangla={bangla} category={"bangla"}></BanglaMusicCard>
      </div>
      <div className="mb-20">
        <HindiMusicCard hindi={hindi} category={"hindi"}></HindiMusicCard>
      </div>
      <div className="mb-16">
        <NewReleaseMusic sadMusic={sadMusic}></NewReleaseMusic>
      </div>
      
      <div className="mb-16">
        <EnglishMuiscCard english={english} category={"english"}></EnglishMuiscCard>
      </div>
      <div className="mb-16">
        <ArabicMusicCard arabic={arabic} category={"arabic"}></ArabicMusicCard>
      </div>
      <div className="mb-16">
        <SpanishMusicCard spanish={spanish} category={"spanish"}></SpanishMusicCard>
      </div>
    </div>
  );
};

export default Musec;
