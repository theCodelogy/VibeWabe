import FirstMusicTypes from "@/components/FristLandingPage/FirstMusicTypes";
import FirstTrendingMovies from "@/components/FristLandingPage/FirstTrandingMovies";
import FristHomeBanner from "@/components/FristLandingPage/FristHomeBanner";
import FristLandingAudio from "@/components/FristLandingPage/FristLandingAudio";
import FristLandingFeature from "@/components/FristLandingPage/FristLandingFeature";
import Faq from "@/components/FristLandingPage/QuetionAns/Faq";
import LandPageFooter from "@/components/shared/footer/landFooter";
import Navbar from "@/components/shared/navbar/Navbar";
import initTranslations from "../i18n";
import TranslationsProvider from "@/components/TranslationProvider";
import ReviewCard from "@/components/ReviewCrad/ReviewCard";
export default async function HomePage({ params: { locale } }) {
  const i18NameSpaces = ["common", "mystuff", "landing"];
  const { t, resources } = await initTranslations(locale, i18NameSpaces);
  return (
    <TranslationsProvider
      resources={resources}
      locale={locale}
      namespaces={i18NameSpaces}
    >
      <div className="">
        <Navbar />
        <FristHomeBanner />
        <FirstMusicTypes />
        <FristLandingFeature />
        <FristLandingAudio />
        <FirstTrendingMovies />
        <Faq />
        <ReviewCard />
        <LandPageFooter />
      </div>
    </TranslationsProvider>
    
  );
}
