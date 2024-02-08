import MixMusic from '@/components/ui/categoryGroupComponents/MusicCategory/MixMusic';
import BanglaMusic from '@/components/ui/categoryGroupComponents/PlayMusic/BanglaMusic';
import PlayMusic from '@/components/ui/categoryGroupComponents/PlayMusic/PlayMusic';
import PlayMusicList from '@/components/ui/categoryGroupComponents/PlayMusic/PlayMusicList';
import axios from 'axios';
import React from 'react';

const MusicDetails = async({params}) => {
    console.log(params)
    const res = await axios.get(`https://vibewabe-server.vercel.app/music/${params.id}`)
    const musicPlay = res.data;

    //all music
    const resl = await axios.get(`https://vibewabe-server.vercel.app/music?category=sad`)
    const allMusics = resl.data;
    //Romantic music
    const resr = await axios.get(`https://vibewabe-server.vercel.app/music?category=Romantic`)
    const romanticMusics = resr.data;
    return (
        <div>
            {/* music open */}
            <PlayMusic musicPlay={musicPlay}></PlayMusic>
            {/* music list */}
            <PlayMusicList></PlayMusicList>
            {/* Recently play music */}
            <MixMusic romanticMusics={romanticMusics}></MixMusic>
            {/* Bangla music  */}
            <BanglaMusic allMusics={allMusics}></BanglaMusic>
        </div>
    );
};

export default MusicDetails;