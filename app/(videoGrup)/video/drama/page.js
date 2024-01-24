import DramaBanner from '@/components/ui/VideoGrupComponents/DramaCategory/DramaBanner';
import DramaTrandingCard from '@/components/ui/VideoGrupComponents/DramaCategory/DramaTrandingCard'
import DramaUpcomingCard from '@/components/ui/VideoGrupComponents/DramaCategory/DramaUpcomingCard';
import Filter from '@/components/ui/VideoGrupComponents/DramaCategory/Filter';
import React from 'react';

const page = () => {
    return (
        <div>
            <DramaBanner/>
            <Filter/>
            <DramaTrandingCard/>
            <DramaUpcomingCard/>
        </div>
    );
};

export default page;