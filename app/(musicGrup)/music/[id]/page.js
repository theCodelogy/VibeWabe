import MixMusic from '@/components/ui/categoryGroupComponents/MusicCategory/MixMusic';
import BanglaMusic from '@/components/ui/categoryGroupComponents/PlayMusic/BanglaMusic';
import PlayMusic from '@/components/ui/categoryGroupComponents/PlayMusic/PlayMusic';
import PlayMusicList from '@/components/ui/categoryGroupComponents/PlayMusic/PlayMusicList';
import React from 'react';

const MusicDetails = () => {
    return (
        <div>
            {/* music open */}
            <PlayMusic></PlayMusic>
            {/* music list */}
            <PlayMusicList></PlayMusicList>
            {/* Recently play music */}
            <MixMusic></MixMusic>
            {/* Bangla music  */}
            <BanglaMusic></BanglaMusic>
        </div>
    );
};

export default MusicDetails;