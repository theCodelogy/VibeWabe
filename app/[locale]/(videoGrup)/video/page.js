import MainBanner from "@/components/ui/VideoGrupComponents/MainBanner/MainBanner";
import KidsMovies from "@/components/ui/VideoGrupComponents/videoHome/KidsMovies";
import NewReleses from "@/components/ui/VideoGrupComponents/videoHome/NewReleses";
import Recomanded from "@/components/ui/VideoGrupComponents/videoHome/Recomanded";
import Slider from "@/components/ui/cards/Slider";
import VideoTrailer from "@/components/ui/trailer/VideoTrailer";

const VideoPage = () => {
  return (
    <>
      <div>
        <MainBanner />
        <div className=" max-w-screen-xl mx-auto md:px-16 lg:px-24 py-5 px-4">
          <Recomanded />
          <NewReleses />
          <KidsMovies />
        </div>
        <VideoTrailer
          title={"   Peaky Blinders - Trailer vidoe"}
          description={
            " A SWAT agent is assigned into the dangerous world of international drug cartels and terrorism. His mission:destroy the operation from the inside out. Will he survive and succeed? "
          }
          genres={"Action, Drama"}
          src={"https://www.youtube.com/embed/Ruyl8_PT_y8"}
          year={"2022"}
        />
        <div className=" max-w-screen-xl mx-auto md:px-16 lg:px-24 py-5 px-4">
          {/* Movies */}
          <Slider category={"movie"} tags={"comedy"} title={"Comedy Movies"} />
          <Slider category={"movie"} tags={"kids"} title={"Kids Movies"} />
          <Slider
            category={"movie"}
            tags={"adventure"}
            title={"Adventure Movies"}
          />
          <Slider category={"movie"} tags={"horror"} title={"Horror Movies"} />
          {/* Series */}
          <Slider category={"series"} tags={"comedy"} title={"Comedy Series"} />
          <Slider category={"series"} tags={"kids"} title={"Kids Series"} />
          <Slider
            category={"series"}
            tags={"adventure"}
            title={"Adventure Series"}
          />
          <Slider category={"series"} tags={"horror"} title={"Horror Series"} />
          {/* Drama */}
          <Slider category={"drama"} tags={"comedy"} title={"Comedy Drama"} />
          <Slider
            category={"drama"}
            tags={"Romantic"}
            title={"Romantic Drama"}
          />
          <Slider category={"drama"} tags={"kids"} title={"Kids Drama"} />
          <Slider category={"drama"} tags={"horror"} title={"Horror Drama"} />
        </div>
      </div>
    </>
  );
};

export default VideoPage;
