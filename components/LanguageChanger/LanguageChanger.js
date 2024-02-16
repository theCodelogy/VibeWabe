"use client";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import { useTranslation } from "react-i18next";
import i18nConfig from "@/i18nConfig";
import logo from "../../assets/logo/multiLanguage.png";
import Image from "next/image";
import { GrLanguage } from "react-icons/gr";

export default function LanguageChanger() {
  const { i18n } = useTranslation();
  const currentLocale = i18n.language;
  const router = useRouter();
  const currentPathname = usePathname();

  const handleChange = (e) => {
    const newLocale = e.target.value;

    // set cookie for next-i18n-router
    const days = 30;
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    const expires = "; expires=" + date.toUTCString();
    document.cookie = `NEXT_LOCALE=${newLocale};expires=${expires};path=/`;

    // redirect to the new locale path
    if (
      currentLocale === i18nConfig.defaultLocale &&
      !i18nConfig.prefixDefault
    ) {
      router.push("/" + newLocale + currentPathname);
    } else {
      router.push(
        currentPathname.replace(`/${currentLocale}`, `/${newLocale}`)
      );
    }

    router.refresh();
  };

  return (
    <div className="flex items-center">
      {/* <Image src={logo} alt="multiLenguageIcon" height={27} width={27} /> */}
      {/* <Image src={logo} alt="Multi-language Image" width={27} height="auto" /> */}
      <GrLanguage className="text-gray-100 text-xl" />
      <select
        className="text-white font-semibold p-2 rounded-lg bg-black text-sm w-ful"
        onChange={handleChange}
        value={currentLocale}
      >
        <option value="en">English</option>
        <option value="bn">Bengali</option>
        <option value="ar">Arabic</option>
      </select>
    </div>
  );
}
