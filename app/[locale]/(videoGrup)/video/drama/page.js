import DramaBanner from "@/components/ui/VideoGrupComponents/DramaCategory/DramaBanner";
import DramaTrandingCard from "@/components/ui/VideoGrupComponents/DramaCategory/DramaTrandingCard";
import DramaUpcomingCard from "@/components/ui/VideoGrupComponents/DramaCategory/DramaUpcomingCard";
import Filter from "@/components/ui/VideoGrupComponents/DramaCategory/Filter";
import React from "react";
import Footer from "@/components/shared/footer/footer";
import DramaComedy from "@/components/ui/VideoGrupComponents/DramaCategory/DramaComedy";
import DramaRomantic from "@/components/ui/VideoGrupComponents/DramaCategory/DramaRomantic";
import DramaKids from "@/components/ui/VideoGrupComponents/DramaCategory/DramaKids";
import DramaHorror from "@/components/ui/VideoGrupComponents/DramaCategory/DramaHorror";
const page = () => {
  return (
    <div>
      <DramaBanner />
      <Filter />
      <DramaTrandingCard />
      <DramaUpcomingCard />
      <DramaComedy/>
      <DramaRomantic/>
      <DramaKids/>
      <DramaHorror/>
    </div>
  );
};

export default page;
