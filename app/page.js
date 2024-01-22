
import FirstTrendingMovies from "@/components/FristLandingPage/FirstTrandingMovies";
import FristHomeBanner from "@/components/FristLandingPage/FristHomeBanner";
import FristLandingAudio from "@/components/FristLandingPage/FristLandingAudio";
import FristLandingFeature from "@/components/FristLandingPage/FristLandingFeature";
import Faq from "@/components/FristLandingPage/QuetionAns/Faq";
import LandPageFooter from "@/components/shared/footer/landFooter";
import Navbar from "@/components/shared/navbar/Navbar";



const HomePage = () => {
  return (
    <div className="bg-black">
      <Navbar />
      <FristHomeBanner/>
      <FristLandingFeature/>
      <FristLandingAudio/>
      <FirstTrendingMovies/>
      <Faq />
      <LandPageFooter />
    </div>
  );
};

export default HomePage;
