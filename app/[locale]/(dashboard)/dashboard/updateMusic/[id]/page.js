import MusicUpdateForm from '@/components/Dashboard/allMusicTable/MusicUpdateForm';
import React from 'react';

const page = async ({params}) => {
    
        const response = await fetch(`https://vibewabe-server.vercel.app/music/${params.id}?admin=true`,{ cache: 'no-store' });
        const data = await response.json();
    


    return (
        <div>
            <MusicUpdateForm music={data}/>
        </div>
    );
};

export default page;