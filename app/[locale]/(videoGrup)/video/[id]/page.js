import CoustomerReview from "@/components/ui/CoustomerReview/CoustomerReview";
import DynamicVideoBanner from "@/components/ui/VideoGrupComponents/DynamicVideo/DynamicVideoBanner";
import MoreLikeThis from "@/components/ui/VideoGrupComponents/VideoDetails/MoreLikeThis";
import axios from "axios";

const movieDetailPage = async ({ params }) => {
  const res = await axios.get(`https://vibewabe-server.vercel.app/video/${params.id}`)
  const video = res.data

  const data = await axios.get(`https://vibewabe-server.vercel.app/video?category=${video.category}&tags=${video.tags}`)
  
const category = data.data

  return (
    <div className="max-w-7xl mx-auto">
      <DynamicVideoBanner video={video} id={params.id} />
      <CoustomerReview id={params.id} />
      {/* <VideoDetails /> */}
      <div className="text-white max-w-screen-xl mx-auto ">
            <h2 className="text-xl text-white  font-semibold my-4 md:my-10 ">Related {video.category}</h2>
          <MoreLikeThis category={category} id={params.id}/>
      </div>
      

    </div>
  );
};

export default movieDetailPage;
