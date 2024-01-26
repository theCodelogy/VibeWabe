"use client";
import { authContext } from "@/utils/AuthProvider";
import Link from "next/link";
import { useContext, useState } from "react";

const NavBtn = () => {
  const { user, signout } = useContext(authContext);
  const [showProfile, setShowProfile] = useState(false);
  return (
    <>
      {user?.email ? (
        <>
          <div
            onClick={() => {
              setShowProfile(!showProfile);
            }}
            className="dropdown dropdown-end"
          >
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img
                  src={
                    user?.photoURL
                      ? user?.photoURL
                      : "https://i.ibb.co/vcQZhpc/1921098.png"
                  }
                />
              </div>
            </label>
            {showProfile && (
              <ul
                tabIndex={0}
                className="mt-3 z-[1] p-3 shadow menu menu-sm dropdown-content bg-base-100 rounded-box space-y-2"
              >
                <li>
                  <p>{user?.displayName}</p>
                </li>
                <li>
                  <p>{user?.email}</p>
                </li>
                <li>
                  <Link href={"/dashboard/profile"}>Dashboard</Link>
                </li>
              </ul>
            )}
          </div>
          <button
            onClick={signout}
            className="bg-[#6D28D9 bg-blue-500 font-semibold text-lg drop-shadow-md text-white transition-all hover:scale-95 ease-in-out duration-200 py-2 px-8 rounded-xl flex items-center justify-center"
            // className="bg-[#F29F05] drop-shadow-md text-white transition-all hover:scale-95 ease-in-out duration-200 py-2 px-8 rounded-xl flex items-center justify-center"
          >
            Logout
          </button>
        </>
      ) : (
        <div className="flex sm:gap-5 lg:gap-8 uppercase">
          <Link
            href={"/login"}
            className="bg-[#6D28D9 bg-blue-500 drop-shadow-md text-white transition-all hover:scale-95 ease-in-out duration-200 py-2 px-8 rounded-xl flex items-center justify-center"
          >
            Login
          </Link>
          <Link
            href={"/signUp"}
            className="text-white border border-blue-500 px-4 py-2 rounded-full"
          >
            Sign Up
          </Link>
        </div>
      )}
    </>
  );
};

export default NavBtn;
