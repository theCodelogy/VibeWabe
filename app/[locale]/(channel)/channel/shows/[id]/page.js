'use client'

import DynamicShowsBanner from "@/components/ui/ChannelPage/DynamicShowsBanner";
import MoreShows from "@/components/ui/ChannelPage/MoreShows";
import axios from "axios";


const page = async({params}) => {
     //shows
  const res1 = await axios.get(`http://localhost:5000/channel/${params.id}`)
  const allShows = res1.data;

  const res2 = await axios.get(`http://localhost:5000/channel?tags=${allShows.tags}`)
  const category = res2.data;


    return (
        <div>
            <div>
                <DynamicShowsBanner allShows={allShows} id={params.id}></DynamicShowsBanner>
            </div>
            <div>
                <MoreShows category={category} id={params.id}></MoreShows>
            </div>
        </div>
    );
};

export default page;