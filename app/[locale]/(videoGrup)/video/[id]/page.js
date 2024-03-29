import Footer from "@/components/shared/footer/footer";
import DynamicVideoBanner from "@/components/ui/VideoGrupComponents/DynamicVideo/DynamicVideoBanner";
import VideoDetails from "@/components/ui/VideoGrupComponents/VideoDetails/VideoDetails";
import axios from "axios";
import React from "react";


const movieDetailPage = async ({params}) => {
 const res = await axios.get(`https://vibewabe-server.vercel.app/video/${params.id}`)
const video = res.data
  return (
    <div>
      <DynamicVideoBanner video={video} />
      <VideoDetails />
      <Footer />
    </div>
  );
};

export default movieDetailPage;
