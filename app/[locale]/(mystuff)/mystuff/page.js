// import StuffBanner from "@/components/ui/CategoryGroupComponents/MyStuffPage/StuffBanner";
// import Watched from "@/components/ui/CategoryGroupComponents/MyStuffPage/Watched";

import StuffBanner from "@/components/ui/categoryGroupComponents/MyStuffPage/StuffBanner";
import Watched from "@/components/ui/categoryGroupComponents/MyStuffPage/Watched";
import Watchlist2 from "@/components/ui/categoryGroupComponents/MyStuffPage/Watchlist2";

export default async function MyStuff () {
  
  return (
    <>
      <div>
        {/* <StuffBanner></StuffBanner> */}
        <Watchlist2></Watchlist2>
        {/* <div>
          <Watched></Watched>
        </div> */}
      </div>
    </>
  );
};
