'use client'

import DynamicNewsBanner from "@/components/ui/ChannelPage/DynamicNewsBanner";
import MoreNews from "@/components/ui/ChannelPage/MoreNews";
import axios from "axios";

const page =async({params}) => {
        //shows
  const res1 = await axios.get(`https://vibewabe-server.vercel.app/channel/${params.id}`)
  const allTv = res1.data;

  const res2 = await axios.get(`https://vibewabe-server.vercel.app/channel?tags=${allTv.tags}`)
  const category = res2.data;
    return (
        <div>
            <div>
            <DynamicNewsBanner allTv={allTv} id={params.id}></DynamicNewsBanner>
            </div>
            {/* second part */}
            <div>
            <MoreNews category={category} id={params.id}></MoreNews>
            </div>
        </div>
    );
};

export default page;