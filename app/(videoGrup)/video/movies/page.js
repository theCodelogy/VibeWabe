import React from 'react';
import MovieBanner from '@/components/ui/VideoGrupComponents/movieCategory/movieBanner';
import Filter from '@/components/ui/VideoGrupComponents/movieCategory/Filter';
import MovieTrandingCard from '@/components/ui/VideoGrupComponents/movieCategory/MovieTrandingCard';
import MovieUpComingCard from '@/components/ui/VideoGrupComponents/movieCategory/MovieUpComingCard';
import Footer from "@/components/shared/footer/footer";
import MovieTrailerOne from '@/components/ui/VideoGrupComponents/movieCategory/MovieTrailerOne';
const Page = () => {
    return (
        <div>
            <MovieBanner />
            <Filter/>
            <MovieTrandingCard/>
            <MovieTrailerOne/>
            <MovieUpComingCard/>
            <Footer/>
        </div>
    );
};

export default Page;
