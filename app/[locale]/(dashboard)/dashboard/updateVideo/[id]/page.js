import VideoUpdateForm from '@/components/Dashboard/allVideosTable/VideoUpdateForm';
import React from 'react';

const page = async ({params}) => {
    const response = await fetch(`https://vibewabe-server.vercel.app/video/${params.id}?admin=true`,{ cache: 'no-store' });
    const data = await response.json();
    return (
        <div>
            <VideoUpdateForm video={data}/>
        </div>
    );
};

export default page;