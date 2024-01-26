import Footer from "@/components/shared/footer/footer";
import DynamicVideoBanner from "@/components/ui/VideoGrupComponents/DynamicVideo/DynamicVideoBanner";
import VideoDetails from "@/components/ui/VideoGrupComponents/VideoDetails/VideoDetails";
import React from "react";

const movieDetailPage = () => {
  return (
    <div>
      <DynamicVideoBanner/>
      <VideoDetails />
      <Footer />
    </div>
  );
};

export default movieDetailPage;
