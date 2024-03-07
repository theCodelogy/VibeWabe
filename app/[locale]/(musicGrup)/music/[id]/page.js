import MixMusic from '@/components/ui/categoryGroupComponents/MusicCategory/MixMusic';
import BanglaMusic from '@/components/ui/categoryGroupComponents/PlayMusic/BanglaMusic';
import ClassicMusic from '@/components/ui/categoryGroupComponents/PlayMusic/ClassicMusic';
import MusicCoustomerReview from '@/components/ui/categoryGroupComponents/PlayMusic/MusicCoustomerReview';
import PlayMusic from '@/components/ui/categoryGroupComponents/PlayMusic/PlayMusic';
import PlayMusicList from '@/components/ui/categoryGroupComponents/PlayMusic/PlayMusicList';
import axios from 'axios';
import React from 'react';

const MusicDetails = async({params}) => {
    const res = await axios.get(`https://vibewabe-server.vercel.app/music/${params.id}`)
    const musicPlay = res.data;
    return (
        <div>
            {/* music open */}
            <PlayMusic musicPlay={musicPlay} id={params.id}></PlayMusic>
            {/* music coustomer review */}
            <MusicCoustomerReview id={params.id} category={musicPlay.language}></MusicCoustomerReview>
            {/* sad music list */}
            <PlayMusicList category={"sad"}></PlayMusicList>
            {/* classical music list */}
            <ClassicMusic category={"classical"}></ClassicMusic>
            {/* Recently play music */}
            <MixMusic category={"Romantic"}></MixMusic>
            {/* classical music  */}
            <BanglaMusic category={"remix"}></BanglaMusic>
        </div>
    );
};

export default MusicDetails;