'use client'

import DynamicDocumentary from "@/components/ui/ChannelPage/DynamicDocumentary";
import MoreDocumentary from "@/components/ui/ChannelPage/MoreDocumentary";
import axios from "axios";

const page = async({params}) => {
        //documentary
  const res1 = await axios.get(`http://localhost:5000/channel/${params.id}`)
  const allDocumentary = res1.data;

  const res2 = await axios.get(`http://localhost:5000/channel?tags=${allDocumentary.tags}`)
  const category = res2.data;
    return (
        <div>
            <div>
                <DynamicDocumentary allDocumentary={allDocumentary} id={params.id}></DynamicDocumentary>
            </div>
            <div>
                <MoreDocumentary category={category} id={params.id}></MoreDocumentary>
            </div>
        </div>
    );
};

export default page;