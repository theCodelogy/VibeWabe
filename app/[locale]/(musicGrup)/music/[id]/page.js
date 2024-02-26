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

    //all music
    const resl = await axios.get(`https://vibewabe-server.vercel.app/music?category=remix&sortBy=view&sort=-1&limit=20`)
    const allMusics = resl.data;
    //sad music
    const resa = await axios.get(`https://vibewabe-server.vercel.app/music?category=sad&sortBy=view&sort=-1&limit=20`)
    const sadMusics = resa.data;
    //sad music
    const classic = await axios.get(`https://vibewabe-server.vercel.app/music?category=classical&sortBy=view&sort=-1&limit=20`)
    const classicalMusics = classic.data;
    //Romantic music
    const resr = await axios.get(`https://vibewabe-server.vercel.app/music?category=Romantic&sortBy=view&sort=-1&limit=20`)
    const romanticMusics = resr.data;
    return (
        <div>
            {/* music open */}
            <PlayMusic musicPlay={musicPlay} id={params.id}></PlayMusic>
            {/* music coustomer review */}
            <MusicCoustomerReview id={params.id} category={musicPlay.language}></MusicCoustomerReview>
            {/* sad music list */}
            <PlayMusicList sadMusics={sadMusics} category={"sad"}></PlayMusicList>
            {/* classical music list */}
            <ClassicMusic classicalMusics={classicalMusics} category={"classical"}></ClassicMusic>
            {/* Recently play music */}
            <MixMusic romanticMusics={romanticMusics} category={"Romantic"}></MixMusic>
            {/* classical music  */}
            <BanglaMusic allMusics={allMusics} category={"remix"}></BanglaMusic>
        </div>
    );
};

export default MusicDetails;