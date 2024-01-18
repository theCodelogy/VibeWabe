"use client";
import Link from "next/link";

const NavBtn = () => {
  return (
    <div className="flex sm:gap-5 lg:gap-8 uppercase">
      <Link
        href={"/login"}
        className="bg-[#6D28D9 bg-red-600 font-semibold text-lg drop-shadow-md text-white transition-all hover:scale-95 ease-in-out duration-200 py-2 px-8 rounded-xl flex items-center justify-center"
      >
        Login
      </Link>
      <Link
        href={"/signup"}
        className="transition-all hover:scale-95 ease-in-out duration-200 shadow-md border-2 border-red-500 font-semibold py-2 px-8 text-white rounded-xl flex items-center justify-center"
      >
        Sign Up
      </Link>
    </div>
  );
};

export default NavBtn;

NavBtn.js;
