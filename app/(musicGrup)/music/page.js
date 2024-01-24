import Card from '@/components/MusicPage/Card';
import TrendingMusic from '@/components/MusicPage/TrendingMusic';
import Card2 from '@/components/ui/MusicPage/Card2';
import MusicBanner from '@/components/ui/MusicPage/MusicBanner';
import MusicSlider from '@/components/ui/MusicPage/MusicSlider';
import MusicSlider2 from '@/components/ui/MusicPage/MusicSlider2';
import MusicCategory from '@/components/ui/categoryGroupComponents/MusicCategory/MusicCategory';
import NewMusicCard from '@/components/ui/categoryGroupComponents/MusicCategory/NewMusicCard';
import React from 'react';

const Musec = () => {
    return (
         <div className='text-white container mx-auto'>
         {/* music banner */}
             <MusicBanner></MusicBanner>
         {/* music slider */}
             <MusicSlider></MusicSlider>
         {/* music card */}
             <Card></Card>
            <TrendingMusic></TrendingMusic>
          {/* music slider 2*/}
             <MusicSlider2></MusicSlider2>
         {/* music card 2*/}
             <Card2></Card2>
         {/* music category */}
         <MusicCategory></MusicCategory>
         {/* Music card */}
         <div className='mb-20'>
            <NewMusicCard></NewMusicCard>
         </div>
     </div>
    );
};

export default Musec;