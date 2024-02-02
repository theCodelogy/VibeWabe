import VideoUpdateForm from '@/components/Dashboard/allVideosTable/VideoUpdateForm';
import React from 'react';

const page = ({params}) => {
    return (
        <div>
            <VideoUpdateForm id={params.id}/>
        </div>
    );
};

export default page;