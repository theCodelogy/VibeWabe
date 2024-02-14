"use client";
import Link from "next/link";
import { FaUserGroup } from "react-icons/fa6";
import { BiSolidVideos } from "react-icons/bi";
import { MdLibraryMusic } from "react-icons/md";
import { BiSolidUserCircle } from "react-icons/bi";
import { IoLogOutOutline } from "react-icons/io5";
import { useContext } from "react";
import { authContext } from "@/utils/AuthProvider";

export default function DashboardLayout({ children }) {
  const { signout } = useContext(authContext);
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      {/* <div className="drawer-content flex flex-col items-center justify-center"> */}
      <div className="drawer-content p-10">
        {/* Page content here */}
        {children}
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <div className="drawer-side relative">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu p-4 w-60 bg-white min-h-full text-black relative">
          {/* Sidebar content here */}
          <li>
            <Link
              className="text-2xl font-bold flex justify-center"
              href={"/video"}
            >
              VibeWabe
            </Link>
          </li>
          <div className="divider"></div>
          <li>
            <Link href={"/dashboard/alreadyWatched"}>
              <BiSolidUserCircle />
              Profile
            </Link>
          </li>
          <li>
            <Link href={"/dashboard/allUsers"}>
              <FaUserGroup />
              All Users
            </Link>
          </li>
          <li>
            <Link href={"/dashboard/allVideos"}>
              <BiSolidVideos />
              All Videos
            </Link>
          </li>
          <li>
            <Link href={"/dashboard/allMusics"}>
              <MdLibraryMusic />
              All Musics
            </Link>
          </li>
          <li>
            <Link href={"/dashboard/videoUpload"}>Video Upload</Link>
          </li>
          <li>
            <Link href={"/dashboard/musicUpload"}>Music Upload</Link>
          </li>
          {/* Logout button */}
          <li className="absolute bottom-0 left-0 right-0 p-2">
            <button
              onClick={signout}
              className="bg-gradient-to-r from-red-600 to-orange-500 drop-shadow-md text-white transition-all hover:scale-95 ease-in-out duration-200 py-2 px-8 rounded-xl flex items-center justify-center"
            >
              <IoLogOutOutline className="text-2xl" /> LogOut
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}
