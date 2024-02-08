"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { useTranslation } from "react-i18next";

const filterLink = [
  { href: "/video/movies", label: "All" },
  { href: "/video/movie/action", label: "Action" },
  { href: "/video/movie/comedy", label: "Comedy" },
  { href: "/video/movie/romance", label: "Romance" },
  { href: "/video/movie/sci-fi", label: "Sci-Fi" },
  { href: "/video/movie/thriller", label: "Thriller" },
  { href: "/video/movie/horror", label: "Horror" },
];

const Filter = () => {
  const { t } = useTranslation();
  const pathname = usePathname();

  return (
    <div className="my-10">
      <h1 className="text-center text-white text-xl font-semibold my-5">
        {t("Movies:selectcat")}
      </h1>
      <div className="flex gap-4 justify-center items-center flex-wrap">
        {filterLink.map((category, index) => (
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
