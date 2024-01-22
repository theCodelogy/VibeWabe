import MainBanner from '@/components/ui/VideoGrupComponents/MainBanner/MainBanner';
import Recomanded from '@/components/ui/VideoGrupComponents/videoHome/Recomanded';
import Upcomming from '@/components/ui/VideoGrupComponents/videoHome/Upcomming';
import React from 'react';

const Video = () => {
    return (
        <div className='max-w-[1200px]  mx-auto px-6 '>
            <MainBanner/>
            <Upcomming/>
            <Recomanded/>
        </div>
    );
};

export default Video;