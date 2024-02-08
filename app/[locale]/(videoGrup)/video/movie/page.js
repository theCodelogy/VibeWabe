import MovieTrandingCard from "@/components/ui/VideoGrupComponents/movieCategory/MovieTrandingCard";
import MovieBanner from "@/components/ui/VideoGrupComponents/movieCategory/movieBanner";
import VideoTrailer from "@/components/ui/trailer/VideoTrailer";
import Filter from "@/components/ui/filter/Filter";
import Slider from "@/components/ui/cards/Slider";

const MoviesPage = () => {
  return (
    <div>
      <MovieBanner />
      <Filter categoryType="movies" />
      <MovieTrandingCard />
      <Slider category="movie" tags="comedy" title={"Comedy"} />
      <VideoTrailer
        title={"   Peaky Blinders - Trailer movies"}
        description={
          " A SWAT agent is assigned into the dangerous world of international drug cartels and terrorism. His mission:destroy the operation from the inside out. Will he survive and succeed? "
        }
        genres={"Action, Drama"}
        src={"https://www.youtube.com/embed/Ruyl8_PT_y8"}
        year={"2022"}
      />
      <Slider category={"movie"} tags={"kids"} title={"Kids"} />
      <Slider category={"movie"} tags={"adventure"} title={"Adventure"} />
      <Slider category={"movie"} tags={"horror"} title={"Horror"} />
    </div>
  );
};
export default MoviesPage;
