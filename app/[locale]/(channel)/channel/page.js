import Footer from "@/components/shared/footer/footer";
import Navbar from "@/components/shared/navbar/Navbar";
import ChannelBanner from "@/components/ui/ChannelPage/ChannelBanner";
import ChannelBanner2 from "@/components/ui/ChannelPage/ChannelBanner2";
import ChannelBanner3 from "@/components/ui/ChannelPage/ChannelBanner3";
import DailyNews from "@/components/ui/ChannelPage/DailyNews";
import ExploreChannel from "@/components/ui/ChannelPage/ExploreChannel";
import Podcast from "@/components/ui/ChannelPage/Podcast";
import Radio from "@/components/ui/ChannelPage/Radio";
import Shows from "@/components/ui/ChannelPage/Shows";
import Sports from "@/components/ui/ChannelPage/Sports";
import SportsExplore from "@/components/ui/ChannelPage/SportsExplore";

import Travel2 from "@/components/ui/ChannelPage/Travel2";

const channel = () => {
  return (
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
        <DailyNews></DailyNews>
      </div>
      {/* shows section */}
      <div>
        <Shows></Shows>
      </div>
      {/* sports section */}
      <div>
        <SportsExplore></SportsExplore>
      </div>
      <div>
        <Sports></Sports>
      </div>
      <div>
        <Podcast></Podcast>
      </div>
      <div>
        <Radio></Radio>
      </div>
      {/* travel section */}
      <div>
        <Travel2></Travel2>
      </div>
      <Footer />
    </div>
  );
};

export default channel;
