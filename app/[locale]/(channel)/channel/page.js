'use client'
import Footer from "@/components/shared/footer/footer";
import Navbar from "@/components/shared/navbar/Navbar";
import ChannelBanner from "@/components/ui/ChannelPage/ChannelBanner";
import ChannelBanner2 from "@/components/ui/ChannelPage/ChannelBanner2";
import ChannelBanner3 from "@/components/ui/ChannelPage/ChannelBanner3";
import DailyNews from "@/components/ui/ChannelPage/DailyNews";
import ExploreChannel from "@/components/ui/ChannelPage/ExploreChannel";
import Podcast from "@/components/ui/ChannelPage/Podcast";
import UniqueAudio from "@/components/ui/ChannelPage/UniqueAudio";
import Radio from "@/components/ui/ChannelPage/Radio";
import Shows from "@/components/ui/ChannelPage/Shows";
import Sports from "@/components/ui/ChannelPage/Sports";
import SportsExplore from "@/components/ui/ChannelPage/SportsExplore";

import Travel2 from "@/components/ui/ChannelPage/Travel2";
import axios from "axios";
import PrivateByUserRole from "@/utils/PraivetRoute/PrivateByUserRole";
import PrivateRoute from "@/utils/PraivetRoute/PraivetRoute";

const channel = async() => {
  //shows
  const res1 = await axios.get(`https://vibewabe-server.vercel.app/channel?tags=shows`)
  const allShows = res1.data;
  //tv
  const res2 = await axios.get(`https://vibewabe-server.vercel.app/channel?tags=tv`)
  const allTv = res2.data;
  //podcast
  const res3 = await axios.get(`https://vibewabe-server.vercel.app/channel?tags=podcast`)
  const allPodcast = res3.data;
  //sports
  const res4 = await axios.get(`https://vibewabe-server.vercel.app/channel?tags=football`)
  const allFootball = res4.data;
  const res5 = await axios.get(`https://vibewabe-server.vercel.app/channel?tags=cricket`)
  const allCricket = res5.data;
  //documentary
  const res6 = await axios.get(`https://vibewabe-server.vercel.app/channel?tags=documentary`)
  const allDocumentary = res6.data;
  return (
    <PrivateRoute>
    <PrivateByUserRole>
    <div>
      <Navbar />
      {/*  banner section */}
      <div>
        <ChannelBanner3></ChannelBanner3>
      </div>
      {/* <div>
                <ChannelBanner></ChannelBanner>
            </div> */}
      {/* channel section */}
      <div>
        <ExploreChannel></ExploreChannel>
      </div>
      {/* news section */}
      <div>
        <DailyNews allTv={allTv}></DailyNews>
      </div>
      {/* shows section */}
      <div>
        <Shows allShows={allShows}></Shows>
      </div>
      {/* sports section */}
      <div>
        <SportsExplore></SportsExplore>
      </div>
      <div>
        <Sports allFootball={allFootball} allCricket={allCricket}></Sports>
      </div>
      <div>
        <Podcast allPodcast={allPodcast}></Podcast>
      </div>
      <div>
        <UniqueAudio></UniqueAudio>
      </div>
      {/* <div>
        <Radio></Radio>
      </div> */}
      {/* travel section */}
      <div>
        <Travel2 allDocumentary={allDocumentary}></Travel2>
      </div>
      <Footer />
    </div>
    </PrivateByUserRole>
    </PrivateRoute>
  );
};

export default channel;
