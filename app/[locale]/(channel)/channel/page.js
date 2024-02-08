
import ChannelBanner2 from "@/components/ui/ChannelPage/ChannelBanner2";
import DailyNews from "@/components/ui/ChannelPage/DailyNews";
import ExploreChannel from "@/components/ui/ChannelPage/ExploreChannel";
import Shows from "@/components/ui/ChannelPage/Shows";
import Sports from "@/components/ui/ChannelPage/Sports";
import SportsExplore from "@/components/ui/ChannelPage/SportsExplore";

import Travel2 from "@/components/ui/ChannelPage/Travel2";

const channel = () => {
    return (
        <div>
            {/*  banner section */}
            <div>
                <ChannelBanner2></ChannelBanner2>
            </div>
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
            {/* travel section */}
            <div>
                <Travel2></Travel2>
            </div>
        
        </div>
    );
};

export default channel;