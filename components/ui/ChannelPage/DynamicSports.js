'use client'

import DynamicWatchBanner from "./DynamicWatchBanner";
import MoreSports from "./MoreSports";



const DynamicSports = ({allSport, id, category}) => {
    console.log(allSport, id, category)
    return (
        <div>
           <DynamicWatchBanner allSport={allSport} id={params.id}></DynamicWatchBanner> 
        <MoreSports category={category} id={params.id}></MoreSports>
        </div>
    );
};

export default DynamicSports;