"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTranslation } from "react-i18next";

const NavLinks = () => {
  const pathName = usePathname();
  const { t } = useTranslation();

  const navigationLinks = [
    { href: "/video", label: "Video" },
    { href: "/music", label: "Music" },
    {
      href: "/video/movie",
      label: "Movies",
      subcategories: [
        { href: "/video/movie/action", label: "Action" },
        { href: "/video/movie/comedy", label: "Comedy" },
        { href: "/video/movie/romance", label: "Romance" },
        { href: "/video/movie/sci-fi", label: "Sci-Fi" },
        { href: "/video/movie/thriller", label: "Thriller" },
        { href: "/video/movie/horror", label: "Horror" },
        { href: "/video/movie/adventure", label: "Adventure" },
      ],
    },
    {
      href: "/video/series",
      label: "Series",
      subcategories: [
        { href: "/video/series/action", label: "Action" },
        { href: "/video/series/comedy", label: "Comedy" },
        { href: "/video/series/romance", label: "Romance" },
        { href: "/video/series/sci-fi", label: "Sci-Fi" },
        { href: "/video/series/thriller", label: "Thriller" },
        { href: "/video/series/horror", label: "Horror" },
        { href: "/video/series/adventure", label: "Adventure" },
      ],
    },
    {
      href: "/video/drama",
      label: "Drama",
      subcategories: [
        { href: "/video/drama/action", label: "Action" },
        { href: "/video/drama/comedy", label: "Comedy" },
        { href: "/video/drama/romance", label: "Romance" },
        { href: "/video/drama/sci-fi", label: "Sci-Fi" },
        { href: "/video/drama/thriller", label: "Thriller" },
        { href: "/video/drama/horror", label: "Horror" },
        { href: "/video/drama/adventure", label: "Adventure" },
      ],
    },
    {
      href: "/channel",
      label: "Channel",
    },
  ];

  const isActive = (href) => {
    return pathName === href;
  };

  const isSubActive = (subHref) => {
    return pathName === subHref;
  };

  const isCategoryActive = (link) => {
    if (isActive(link.href)) {
      return true;
    }
    if (link.subcategories) {
      return link.subcategories.some((subLink) => isSubActive(subLink.href));
    }
    return false;
  };

  return (
    <>
      {navigationLinks.map((link, index) => (
        <li
          className="hover:scale-95 duration-200 ease-in-out transition-all text-white lg:text-base xl:text-lg"
          key={index}
        >
          <div className="dropdown dropdown-hover">
            <div tabIndex={0} role="button" className="m-1">
              <Link
                className={isCategoryActive(link) ? "underline" : ""}
                href={link.href}
              >
                <span className="cursor-pointer">{t(link.label)}</span>
              </Link>
            </div>
            {link.subcategories && (
              <ul
                tabIndex={0}
                className="dropdown-content z-[1] menu p-2 shadow bg-[#101726] rounded-box w-52"
              >
                {link.subcategories.map((subLink, subIndex) => (
                  <li key={subIndex}>
                    <Link
                      className={isSubActive(subLink.href) ? "underline" : ""}
                      href={subLink.href}
                    >
                      <span className="cursor-pointer">{t(subLink.label)}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </li>
      ))}
    </>
  );
};

export default NavLinks;
