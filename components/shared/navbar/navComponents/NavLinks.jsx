// "use client";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import { useTranslation } from "react-i18next";

// const NavLinks = () => {
//   const pathName = usePathname();
//   const { t } = useTranslation();
//   const navigationLinks = [
//     { href: "/video", label: "Video" },
//     { href: "/music", label: "Music" },
//     {
//       href: "/video/movies",
//       label: "Movies",
//       subcategories: [
//         { href: "/video/movies/action", label: "Action" },
//         { href: "/video/movies/comedy", label: "Comedy" },
//         { href: "/video/movies/romance", label: "Romance" },
//         { href: "/video/movies/sci-fi", label: "Sci-Fi" },
//         { href: "/video/movies/thriller", label: "Thriller" },
//         { href: "/video/movies/horror", label: "Horror" },
//         { href: "/video/movies/adventure", label: "Adventure" },
//       ],
//     },
//     {
//       href: "/video/series",
//       label: "Series",
//     },
//     {
//       href: "/video/drama",
//       label: "Drama",
//     },
//   ];
//   return (
//     <>
//       {navigationLinks.map((link, index) => (
//         <li
//           className="hover:scale-95  duration-200 ease-in-out transition-all text-white"
//           key={index}
//         >
//           <div className="dropdown dropdown-hover">
//             <div tabIndex={0} role="button" className="m-1">
//               <Link href={link.href}>{t(link.label)}</Link>
//             </div>
//             <ul
//               tabIndex={0}
//               className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
//             >
//               {subcategories &
//               (
//                 <li>
//                   <a>{link.subcategories.label}</a>
//                 </li>
//               )}
//             </ul>
//           </div>
//           {/* {pathName == "/" ? "" : <Link href={link.href}>{t(link.label)}</Link>} */}
//         </li>
//       ))}
//     </>
//   );
// };

// export default NavLinks;

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
      href: "/video/feedback",
      label: "Feedback",
    }
  ];

  return (
    <>
      {navigationLinks.map((link, index) => (
        <li
          className="hover:scale-95 duration-200 ease-in-out transition-all text-white"
          key={index}
        >
          <div className="dropdown dropdown-hover">
            <div tabIndex={0} role="button" className="m-1">
              <Link href={link.href}>
                <span className="cursor-pointer">{t(link.label)}</span>
              </Link>
            </div>
            {link?.subcategories && (
              <ul
                tabIndex={0}
                className="dropdown-content z-[1] menu p-2 shadow bg-[#101726] rounded-box w-52"
              >
                {link?.subcategories.map((subLink, subIndex) => (
                  <li key={subIndex}>
                    <Link
                      href={subLink.href}
                      className="hover:text-gray-800 px-2 py-2 cursor-pointer block"
                    >
                      {t(subLink.label)}
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
