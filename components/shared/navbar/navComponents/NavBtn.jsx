"use client";
import LanguageChanger from "@/components/LanguageChanger/LanguageChanger";
import { authContext } from "@/utils/AuthProvider";
import Link from "next/link";
import { useContext, useState } from "react";
import { useTranslation } from "react-i18next";

const NavBtn = () => {
  const { user, signout } = useContext(authContext);
  const [showProfile, setShowProfile] = useState(false);
  const { t } = useTranslation();
  return (
    <>
      {user?.email ? (
        <>
          <LanguageChanger />
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
                <li>
                  <Link href={"/mystuff"}>My Stuff</Link>
                </li>
              </ul>
            )}
          </div>
          <button
            onClick={signout}
            className="bg-gradient-to-r from-red-600 to-orange-500 drop-shadow-md text-white transition-all hover:scale-95 ease-in-out duration-200 py-2 px-8 rounded-xl flex items-center justify-center"
            // className="bg-[#F29F05] drop-shadow-md text-white transition-all hover:scale-95 ease-in-out duration-200 py-2 px-8 rounded-xl flex items-center justify-center"
          >
            {t("Logout")}
          </button>
        </>
      ) : (
        <div className="flex sm:gap-5 lg:gap-8 uppercase">
          <LanguageChanger />
          <Link
            href={"/login"}
            className="bg-gradient-to-r from-red-600 to-orange-500 drop-shadow-md text-white transition-all hover:scale-95 ease-in-out duration-200 py-2 px-8 rounded-xl flex items-center justify-center"
          >
            {t("login")}
          </Link>
          <Link
            href={"/signUp"}
            className="text-white border border-bg-gradient-to-r from-red-600 to-orange-500 px-4 py-2 rounded-full"
          >
            {t("signup")}
          </Link>
        </div>
      )}
    </>
  );
};

export default NavBtn;
