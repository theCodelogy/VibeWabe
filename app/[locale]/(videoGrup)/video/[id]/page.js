import CoustomerReview from "@/components/ui/CoustomerReview/CoustomerReview";
import DynamicVideoBanner from "@/components/ui/VideoGrupComponents/DynamicVideo/DynamicVideoBanner";
import VideoDetails from "@/components/ui/VideoGrupComponents/VideoDetails/VideoDetails";
import axios from "axios";

const movieDetailPage = async ({ params }) => {
  const res = await axios.get(
    `https://vibewabe-server.vercel.app/video/${params.id}`
  );
  const video = res.data;
  return (
    <div className="max-w-7xl mx-auto">
      <DynamicVideoBanner video={video} id={params.id} />
      <CoustomerReview id={params.id} />
      <VideoDetails />
    </div>
  );
};

export default movieDetailPage;
