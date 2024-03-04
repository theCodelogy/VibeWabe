import AllMusicCard from "@/components/ui/categoryGroupComponents/MusicCategory/MusicSubCategory.js/AllMusicCard";
import AllMusicShowBanner from "@/components/ui/categoryGroupComponents/MusicCategory/MusicSubCategory.js/AllMusicShowBanner";
import axios from "axios";


const page = async({params}) => {
    const res = await axios.get(`https://vibewabe-server.vercel.app/music?language=${params.subCategory}`)
    const AllmusicShows = res.data;
    return (
        <div>
            <AllMusicShowBanner language={params.subCategory}></AllMusicShowBanner>
            <AllMusicCard AllmusicShows={AllmusicShows}></AllMusicCard>
        </div>
    );
};

export default page;