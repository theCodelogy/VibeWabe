// import StuffBanner from "@/components/ui/CategoryGroupComponents/MyStuffPage/StuffBanner";
// import Watched from "@/components/ui/CategoryGroupComponents/MyStuffPage/Watched";

import StuffBanner from "@/components/ui/categoryGroupComponents/MyStuffPage/StuffBanner";
import Watched from "@/components/ui/categoryGroupComponents/MyStuffPage/Watched";

export default async function MyStuff () {
  
  return (
    <>
      <div>
        <h1>HI</h1>
        <StuffBanner></StuffBanner>
        <div>
          <Watched></Watched>
        </div>
      </div>
    </>
  );
};
