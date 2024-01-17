"use client";
import Link from "next/link";

const navigationLinks = [
  { href: "/", label: "Home" },
  { href: "/category", label: "Category" },
  { href: "/myStuff", label: "My Stuff" },
];

const NavLinks = () => {
  return (
    <>
      {navigationLinks.map((link, index) => (
        <li
          className="hover:scale-95 duration-200 ease-in-out transition-all text-white"
          key={index}
        >
          <Link href={link.href}>{link.label}</Link>
        </li>
      ))}
    </>
  );
};

export default NavLinks;
