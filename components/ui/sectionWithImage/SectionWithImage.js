import Image from "next/image";
import { useTranslation } from "react-i18next";

const SectionWithImage = ({ image1, image2, titleKey, textKey }) => {
  const { t } = useTranslation();
  return (
    <div className="my-5">
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <div className="relative flex flex-col items-center mx-auto lg:flex-row-reverse lg:max-w-5xl lg:mt-12 xl:max-w-6xl">
              <div className="w-full h-64 lg:w-1/2 lg:h-auto">
                <Image
                  src={image2}
                  alt="image"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="absolute md:top-0 mt-32 md:mt-50 lg:w-3/5 lg:left-0 lg:mt-20 lg:ml-20 xl:mt-8 xl:ml-24">
                <div className="flex flex-col p-12 md:px-16">
                  <Image
                    src={image1}
                    alt="image"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font text-xl md:text-2xl mb-4 font-medium text-white">
              {t(titleKey)}
            </h1>
            <p className="mb-8 leading-relaxed text-xs lg:text-xl text-white">
              {t(textKey)}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SectionWithImage;
