'use client'
import DynamicSports from "@/components/ui/ChannelPage/DynamicSports";
import axios from "axios";


const page = async({params}) => {
        //sports
  const res1 = await axios.get(`http://localhost:5000/channel/${params.id}`)
  const allSport = res1.data;

  const res2 = await axios.get(`http://localhost:5000/channel?tags=${allSport.tags}`)
  const category = res2.data;
    return (
        <div className="text-white">
           
            <DynamicSports allSport={allSport} id={params.id} category={category}></DynamicSports>
        </div>
    );
};

export default page;