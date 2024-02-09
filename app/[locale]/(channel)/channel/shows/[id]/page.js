'use client'

import DynamicShowsBanner from "@/components/ui/ChannelPage/DynamicShowsBanner";
import MoreShows from "@/components/ui/ChannelPage/MoreShows";

const page = () => {
    return (
        <div>
            <div>
                <DynamicShowsBanner></DynamicShowsBanner>
            </div>
            <div>
                <MoreShows></MoreShows>
            </div>
        </div>
    );
};

export default page;