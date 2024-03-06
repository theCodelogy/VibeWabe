import DramaBanner from "@/components/ui/VideoGrupComponents/DramaCategory/DramaBanner";
import Filter from "@/components/ui/filter/Filter";
import Slider from "@/components/ui/cards/Slider";
import VideoTrailer from "@/components/ui/trailer/VideoTrailer";
const DramaPage = () => {
  return (
    <>
      <DramaBanner />
      <div className="max-w-screen-xl mx-auto ">
        <Filter categoryType="drama" />
        <Slider title={"Featured"} category="drama" isFeatured={true} />
        <VideoTrailer
          title={"   Peaky Blinders - Trailer drama"}
          description={
            " A SWAT agent is assigned into the dangerous world of international drug cartels and terrorism. His mission:destroy the operation from the inside out. Will he survive and succeed? "
          }
          genres={"Action, Drama"}
          src={"https://www.youtube.com/embed/Ruyl8_PT_y8"}
          year={"2022"}
        />
        <Slider category={"drama"} tags={"comedy"} title={"Comedy"} />
        <Slider category={"drama"} tags={"Romantic"} title={"Romantic"} />
        <Slider category={"drama"} tags={"kids"} title={"Kids"} />
        <Slider category={"drama"} tags={"horror"} title={"Horror"} />
      </div>
    </>
  );
};

export default DramaPage;
