'use client'
import Filter from '@/components/ui/VideoGrupComponents/webSeries/Filter';
import SeriesBanner from '@/components/ui/VideoGrupComponents/webSeries/SeriesBanner';
import SeriesCard from '@/components/ui/VideoGrupComponents/webSeries/SeriesCard'
import UpComingCard from '@/components/ui/VideoGrupComponents/webSeries/UpComingCard';
import React from 'react';

const page = () => {
    return (
        <div>
        <SeriesBanner/>
        <Filter/>
        <SeriesCard/>
        <UpComingCard/>
   
        </div>
    );
};

export default page;