'use client'
import Filter from '@/components/ui/VideoGrupComponents/webSeries/Filter';
import SeriesBanner from '@/components/ui/VideoGrupComponents/webSeries/SeriesBanner';
import SeriesCard from '@/components/ui/VideoGrupComponents/webSeries/SeriesCard'
import UpComingCard from '@/components/ui/VideoGrupComponents/webSeries/UpComingCard';
import React from 'react';
import Footer from "@/components/shared/footer/footer";
const page = () => {
    return (
        <div>
        <SeriesBanner/>
        <Filter/>
        <SeriesCard/>
        <UpComingCard/>
        <Footer/>
   
        </div>
    );
};

export default page;