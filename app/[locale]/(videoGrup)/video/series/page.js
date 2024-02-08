import SeriesBanner from "@/components/ui/VideoGrupComponents/webSeries/SeriesBanner";
import SeriesCard from "@/components/ui/VideoGrupComponents/webSeries/SeriesCard";
import UpComingCard from "@/components/ui/VideoGrupComponents/webSeries/UpComingCard";
import Slider from "@/components/ui/cards/Slider";
import Filter from "@/components/ui/filter/Filter";
import VideoTrailer from "@/components/ui/trailer/VideoTrailer";
const SeriesPage = () => {
  return (
    <div>
      <SeriesBanner />
      <Filter categoryType="series" />
      <SeriesCard />
      <VideoTrailer
        title={"   Peaky Blinders - Trailer serise"}
        description={
          " A SWAT agent is assigned into the dangerous world of international drug cartels and terrorism. His mission:destroy the operation from the inside out. Will he survive and succeed? "
        }
        genres={"Action, Drama"}
        src={"https://www.youtube.com/embed/Ruyl8_PT_y8"}
        year={"2022"}
      />
      <UpComingCard />
      <Slider category={"series"} tags={"comedy"} title={"Comedy"} />
      <Slider category={"series"} tags={"kids"} title={"Kids"} />
      <Slider category={"series"} tags={"adventure"} title={"Adventure"} />
      <Slider category={"series"} tags={"romantic"} title={"Romantic"} />
      <Slider category={"series"} tags={"horror"} title={"Horror"} />
    </div>
  );
};

export default SeriesPage;
