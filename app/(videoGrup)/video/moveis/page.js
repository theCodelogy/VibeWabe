import React from 'react';
import MovieBanner from '@/components/ui/VideoGrupComponents/movieCategory/movieBanner';
import Filter from '@/components/ui/VideoGrupComponents/movieCategory/Filter';
import MovieTrandingCard from '@/components/ui/VideoGrupComponents/movieCategory/MovieTrandingCard';
import MovieUpComingCard from '@/components/ui/VideoGrupComponents/movieCategory/MovieUpComingCard';

const Page = () => {
    return (
        <div>
            <MovieBanner />
            <Filter/>
            <MovieTrandingCard/>
            <MovieUpComingCard/>
        </div>
    );
};

export default Page;
