"use client";
import Link from "next/link";
import { useTranslation } from "react-i18next";


const NavLinks = () => {
  const {t} = useTranslation();
  const navigationLinks = [
    { href: "/video", label: "videos" },
    { href: "/music", label: "music" },
    { href: "/video/movies", label: "movies" },
    { href: "/video/series", label: "series" },
    { href: "/video/drama", label: "drama" },
  ];
  return (
    <>
      {navigationLinks.map((link, index) => (
        <li
          className="hover:scale-95  duration-200 ease-in-out transition-all text-white"
          key={index}
        >
          <Link href={link.href}>{t(link.label)}</Link>
        </li>
      ))}
    </>
  );
};

export default NavLinks;
