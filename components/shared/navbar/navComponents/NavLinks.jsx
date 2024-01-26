"use client";
import Link from "next/link";
import { useTranslation } from "react-i18next";


const NavLinks = () => {
  const {t} = useTranslation();
  const navigationLinks = [
    { href: "/video", label: "Video" },
    { href: "/music", label: "Music" },
    { href: "/video/movies", label: "Movies" },
    { href: "/video/series", label: "Series" },
    { href: "/video/drama", label: "Drama" },
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
