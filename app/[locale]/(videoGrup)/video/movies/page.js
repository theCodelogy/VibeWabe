import React from "react";
import MovieBanner from "@/components/ui/VideoGrupComponents/movieCategory/movieBanner";
import Filter from "@/components/ui/VideoGrupComponents/movieCategory/Filter";
import MovieTrandingCard from "@/components/ui/VideoGrupComponents/movieCategory/MovieTrandingCard";
import MovieUpComingCard from "@/components/ui/VideoGrupComponents/movieCategory/MovieUpComingCard";

import MovieTrailerOne from "@/components/ui/VideoGrupComponents/movieCategory/MovieTrailerOne";
import ComedyMovies from "@/components/ui/VideoGrupComponents/movieCategory/ComedyMovies";
const Page = () => {
  return (
    <div>
      <MovieBanner />
      <Filter />
      <MovieTrandingCard />
      <MovieTrailerOne />
      <MovieUpComingCard />
      <ComedyMovies />
    </div>
  );
};
export default Page;
