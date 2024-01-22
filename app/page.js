import FirstTrendingMovies from "@/components/FristLandingPage/FirstTrandingMovies";
import FristHomeBanner from "@/components/FristLandingPage/FristHomeBanner";
import FristLandingFeature from "@/components/FristLandingPage/FristLandingFeature";
import Faq from "@/components/FristLandingPage/QuetionAns/Faq";
import LandPageFooter from "@/components/shared/footer/landFooter";
import Navbar from "@/components/shared/navbar/Navbar";
import FirstMusicTypes from "./../components/FristLandingPage/FirstMusicTypes";

const HomePage = () => {
  return (
    <div className="bg-black">
      <Navbar />
      <FristHomeBanner />
      <FristLandingFeature />
      <FirstTrendingMovies />
      <FirstMusicTypes />
      <Faq />
      <LandPageFooter />
    </div>
  );
};

export default HomePage;
