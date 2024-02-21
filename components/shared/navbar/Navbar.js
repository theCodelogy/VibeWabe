"use client";
import { useContext, useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import NavLinks from "./navComponents/NavLinks";
import NavBtn from "./navComponents/NavBtn";
import Link from "next/link";
import VideoSearch from "../Search/VideoSearch";
import logo from "../../../assets/logo/vibeWave1.png";
import Image from "next/image";
import { usePathname } from "next/navigation";
const Navbar = () => {
  const [menuIcon, setMenuIcon] = useState(false);
  const pathname = usePathname()
  return (
    <header className="px-[0.375rem] z-50 xl:px-0 w-full duration-200 ease-in sticky top-0 left-0 right-0 ">
      <nav className="h-[4.3rem] flex justify-between items-center px-6 dark:border-none bg-gradient-to-tr from-zinc-900 to-black dark:bg-[#301934] text-[#2f2f2f]">
        {/* logo */}
        <div className="lg:flex-1 h-full flex items-center">
          <Link href="/" className="flex items-center">
            <Image
              className="w-full h-full"
              height={60}
              width={60}
              src={logo}
              alt="logo"
            />
            <p className="text-2xl text-white font-bold">VibeWabe</p>
          </Link>
        </div>

        {/* large screen navigation */}
        <ul className="hidden md:flex gap-4 font-semibold text-lg lg:flex-1 xl:justify-center">
          <NavLinks />
        </ul>

        {/* Search component */}
        <div className="ml-4">
          {
            pathname.split('/')[1] === 'video' || pathname.split('/')[1] === 'music' ?
              <VideoSearch /> : ''
          }

        </div>
        <div className="hidden md:flex gap-6 items-center lg:flex-1 lg:justify-end">
          <NavBtn />
        </div>
        {/* Mobile screen navigation icon toggle */}
        <div
          onClick={() => setMenuIcon(!menuIcon)}
          className="flex md:hidden text-2xl dark:text-white"
        >
          {menuIcon ? <AiOutlineClose /> : <AiOutlineMenu />}
        </div>
        {/* Mobile screen navbar */}
        <div
          style={{
            boxShadow: "-5px -5px 9px #ffffff73,5px 5px 7px #5e687949",
          }}
          className={
            menuIcon
              ? "md:hidden absolute top-[4.8rem] right-0 bottom-0 left-0 flex justify-center h-[80vh] bg-[#FFFFFF1A] dark:bg-[#dddddd] text-white ease-in duration-300 text-center items-center rounded-tl-[50px] rounded-bl-[65px] rounded-tr-[65px] rounded-br-[50px] border-2 shadow-2xl backdrop-blur-3xl w-[95%] mx-auto"
              : "md:hidden absolute top-[4.3rem] right-0 left-[-105%] flex text-center justify-center w-full h-[80vh] dark:bg-[#f2a64d] text-white ease-in duration-300 items-center rounded-tl-[50px] rounded-bl-[65px] rounded-tr-[65px] rounded-br-[50px]"
          }
        >
          {/* Mobile screen navigation links */}
          <ul className="flex flex-col gap-3 mt-2 font-semibold text-2xl text-black">
            <NavLinks />
            <NavBtn />
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
