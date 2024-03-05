import AllMusicCard from "@/components/ui/categoryGroupComponents/MusicCategory/MusicSubCategory.js/AllMusicCard";
import AllMusicCategoryCard from "@/components/ui/categoryGroupComponents/MusicCategory/MusicSubCategory.js/AllMusicCategoryCard";
import AllMusicShowBanner from "@/components/ui/categoryGroupComponents/MusicCategory/MusicSubCategory.js/AllMusicShowBanner";
import axios from "axios";


const page = async({params}) => {
    const res = await axios.get(`https://vibewabe-server.vercel.app/music?language=${params.subCategory}`)
    const AllmusicShows = res.data;
    //category
    const ress = await axios.get(`https://vibewabe-server.vercel.app/music?category=${params.subCategory}`)
    const musicCategoryShows = ress.data;
    return (
        <div>
            <AllMusicShowBanner language={params.subCategory}></AllMusicShowBanner>
            <AllMusicCard AllmusicShows={AllmusicShows}></AllMusicCard>
            <AllMusicCategoryCard musicCategoryShows={musicCategoryShows}></AllMusicCategoryCard>
        </div>
    );
};

export default page;