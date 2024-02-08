"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTranslation } from "react-i18next";

const Filter = ({ categoryType }) => {
  const { t } = useTranslation();
  const pathname = usePathname();

  let filterLinks = [];

  if (categoryType === "drama") {
    filterLinks = [
      { href: "/video/drama", label: "All" },
      { href: "/video/drama/action", label: "Action" },
      { href: "/video/drama/comedy", label: "Comedy" },
      { href: "/video/drama/romance", label: "Romance" },
      { href: "/video/drama/sci-fi", label: "Sci-Fi" },
      { href: "/video/drama/thriller", label: "Thriller" },
      { href: "/video/drama/horror", label: "Horror" },
    ];
  } else if (categoryType === "movies") {
    filterLinks = [
      { href: "/video/movie", label: "All" },
      { href: "/video/movie/action", label: "Action" },
      { href: "/video/movie/comedy", label: "Comedy" },
      { href: "/video/movie/romance", label: "Romance" },
      { href: "/video/movie/sci-fi", label: "Sci-Fi" },
      { href: "/video/movie/thriller", label: "Thriller" },
      { href: "/video/movie/horror", label: "Horror" },
    ];
  } else if (categoryType === "series") {
    filterLinks = [
      { href: "/video/series", label: "All" },
      { href: "/video/series/action", label: "Action" },
      { href: "/video/series/comedy", label: "Comedy" },
      { href: "/video/series/romance", label: "Romance" },
      { href: "/video/series/sci-fi", label: "Sci-Fi" },
      { href: "/video/series/thriller", label: "Thriller" },
      { href: "/video/series/horror", label: "Horror" },
    ];
  }

  return (
    <div className="my-10">
      <h1 className="text-center text-white text-xl font-semibold my-5">
        {t("Movies:selectcat")}
      </h1>
      <div className="flex gap-4 justify-center items-center flex-wrap">
        {filterLinks.map((category, index) => (
          <Link
            href={category.href}
            key={index}
            className={`py-3 w-[25%] md:w-[20%] lg:w-[13%] flex-shrink-0 text-center hover:bg-gradient-to-r from-red-600 to-zinc-500 border border-gray-300 cursor-pointer duration-[.4s] text-sm flex justify-center text-white ${
              pathname === category.href
                ? "bg-gradient-to-r from-red-600 to-zinc-500"
                : ""
            }`}
          >
            {category.label}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Filter;
