
import React from "react";
import MovieBanner from "@/components/ui/VideoGrupComponents/movieCategory/movieBanner";
import Filter from "@/components/ui/VideoGrupComponents/movieCategory/Filter";
import MovieTrandingCard from "@/components/ui/VideoGrupComponents/movieCategory/MovieTrandingCard";
import MovieUpComingCard from "@/components/ui/VideoGrupComponents/movieCategory/MovieUpComingCard";

import MovieTrailerOne from '@/components/ui/VideoGrupComponents/movieCategory/MovieTrailerOne';
import MovieComedy from "@/components/ui/VideoGrupComponents/movieCategory/MovieComedy";
import MovieKids from "@/components/ui/VideoGrupComponents/movieCategory/MovieKids";
import MovieAdventure from "@/components/ui/VideoGrupComponents/movieCategory/MovieAdventure";
import MovieHorror from "@/components/ui/VideoGrupComponents/movieCategory/MovieHorror";

const Page = () => {
  
    return (
        <div>
  
            <MovieBanner />
            <Filter/>
            <MovieTrandingCard/>
            <MovieUpComingCard/>
            <MovieComedy/>
            <MovieTrailerOne/>
            <MovieKids/>
            <MovieAdventure/>
            <MovieHorror/>
        </div>
    );
};
export default Page;

