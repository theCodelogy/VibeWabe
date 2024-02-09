'use client'

import DynamicNewsBanner from "@/components/ui/ChannelPage/DynamicNewsBanner";
import MoreNews from "@/components/ui/ChannelPage/MoreNews";

const page = () => {
    return (
        <div>
            <div>
            <DynamicNewsBanner></DynamicNewsBanner>
            </div>
            {/* second part */}
            <div>
            <MoreNews></MoreNews>
            </div>
        </div>
    );
};

export default page;