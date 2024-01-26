"use client";
import Link from "next/link";

const navigationLinks = [
  { href: "/video", label: "Video" },
  { href: "/music", label: "Music" },
  { href: "/video/movies", label: "Movies" },
  { href: "/video/series", label: "Series" },
  { href: "/video/drama", label: "Drama" },
];

const NavLinks = () => {
  return (
    <>
      {navigationLinks.map((link, index) => (
        <li
          className="hover:scale-95  duration-200 ease-in-out transition-all text-white"
          key={index}
        >
          <Link href={link.href}>{link.label}</Link>
        </li>
      ))}
    </>
  );
};

export default NavLinks;
