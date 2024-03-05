// "use client";
// import LanguageChanger from "@/components/LanguageChanger/LanguageChanger";
// import { authContext } from "@/utils/AuthProvider";
// import Link from "next/link";
// import { useContext, useState } from "react";
// import { useTranslation } from "react-i18next";

// const NavBtn = () => {
//   const { user, signout } = useContext(authContext);
//   const [showProfile, setShowProfile] = useState(false);
//   const { t } = useTranslation();
//   return (
//     <>
//       {user?.email ? (
//         <>
//           <LanguageChanger />
//           <div
//             onClick={() => {
//               setShowProfile(!showProfile);
//             }}
//             className="dropdown dropdown-end"
//           >
//             <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
//               <div className="w-10 rounded-full">
//                 <img
//                   src={
//                     user?.photoURL
//                       ? user?.photoURL
//                       : "https://i.ibb.co/vcQZhpc/1921098.png"
//                   }
//                 />
//               </div>
//             </label>
//             {showProfile && (
//               <ul
//                 tabIndex={0}
//                 className="mt-3 z-[1] p-3 shadow menu menu-sm dropdown-content bg-base-100 rounded-box space-y-2"
//               >
//                 <li>
//                   <p>{user?.displayName}</p>
//                 </li>
//                 <li>
//                   <p>{user?.email}</p>
//                 </li>
//                 <li>
//                   <Link href={"/dashboard/profile"}>Dashboard</Link>
//                 </li>
//                 <li>
//                   <Link href={"/mystuff"}>My Stuff</Link>
//                 </li>
//               </ul>
//             )}
//           </div>
//           <button
//             onClick={signout}
//             className="bg-gradient-to-r from-red-600 to-orange-500 drop-shadow-md text-white transition-all hover:scale-95 ease-in-out duration-200 py-2 px-8 rounded-xl flex items-center justify-center"
//             // className="bg-[#F29F05] drop-shadow-md text-white transition-all hover:scale-95 ease-in-out duration-200 py-2 px-8 rounded-xl flex items-center justify-center"
//           >
//             {t("Logout")}
//           </button>
//         </>
//       ) : (
//         <div className="flex sm:gap-5 lg:gap-8 uppercase">
//           <LanguageChanger />
//           <Link
//             href={"/login"}
//             className="bg-gradient-to-r from-red-600 to-orange-500 drop-shadow-md text-white transition-all hover:scale-95 ease-in-out duration-200 py-2 px-8 rounded-xl flex items-center justify-center"
//           >
//             {t("login")}
//           </Link>
//           <Link
//             href={"/signUp"}
//             className="text-white border border-bg-gradient-to-r from-red-600 to-orange-500 px-4 py-2 rounded-full"
//           >
//             {t("signup")}
//           </Link>
//         </div>
//       )}
//     </>
//   );
// };

// export default NavBtn;

"use client";
import { useEffect, useRef } from "react";
import LanguageChanger from "@/components/LanguageChanger/LanguageChanger";
import { authContext } from "@/utils/AuthProvider";
import Link from "next/link";
import { MdOutlineFeedback } from "react-icons/md";
import { useContext, useState } from "react";
import { useTranslation } from "react-i18next";
import { IoLogOutOutline } from "react-icons/io5";
import { AnimatePresence, motion } from "framer-motion";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { LuHistory } from "react-icons/lu";
import { MdPlaylistAdd } from "react-icons/md";
import { IoIosNotifications } from "react-icons/io";
import axios from "axios";
import Notification from "@/components/ui/Notification/Notification";
import { usePathname } from "next/navigation";

const NavBtn = () => {
  const pathname = usePathname();
  const { user, signout, isLoading } = useContext(authContext);
  const [showProfile, setShowProfile] = useState(false);
  const { t } = useTranslation();
  const dropdownRef = useRef(null);

  // get current user from database
  const [currentUser, setCurrentUser] = useState("");
  useEffect(() => {
    axios
      .get(`https://vibewabe-server.vercel.app/user/${user?.email}`)
      .then((res) => setCurrentUser(res.data));
  }, [user]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowProfile(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      {user?.email ? (
        <>
          <LanguageChanger />
          {/* notification component */}
          {pathname.split("/")[1] === "video" ||
          pathname.split("/")[1] === "music" ||
          pathname.split("/")[1] === "channel" ? (
            <Notification />
          ) : (
            ""
          )}

          <div ref={dropdownRef} className="dropdown dropdown-end">
            <label
              onClick={() => {
                setShowProfile(!showProfile);
              }}
              tabIndex={0}
              className="btn btn-ghost btn-circle avatar"
            >
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
            <AnimatePresence>
              {showProfile && (
                <motion.ul
                  initial={{ scaleY: 0 }}
                  animate={{
                    scaleY: 1,
                    transition: { duration: 0.2, ease: [0.12, 0, 0.39, 0] },
                  }}
                  exit={{
                    scaleY: 0,
                    transition: { duration: 0.2, ease: [0.22, 1, 0.36, 1] },
                  }}
                  tabIndex={0}
                  className="mt-3 z-[1] p-3 shadow menu menu-sm dropdown-content bg-base-100 rounded-box space-y-2"
                >
                  <div className="flex gap-3">
                    <div className="w-10 rounded-full overflow-hidden">
                      <img
                        className="w-full h-full"
                        src={
                          user?.photoURL
                            ? user?.photoURL
                            : "https://i.ibb.co/vcQZhpc/1921098.png"
                        }
                      />
                    </div>
                    <div>
                      <p className="font-bold">{user?.displayName}</p>
                      <p>{user?.email}</p>
                    </div>
                  </div>
                  <div className="divider"></div>

                  {/* show dashboard by admin role */}
                  {currentUser?.admin === true ? (
                    <li>
                      <Link href={"/dashboard/profile"}>
                        <MdOutlineSpaceDashboard />
                        Dashboard
                      </Link>
                    </li>
                  ) : (
                    ""
                  )}

                  <li>
                    <Link href={"/mystuff"}>
                      <LuHistory />
                      WatchLists
                    </Link>
                  </li>
                  <li>
                    <Link href={"/watched"}>
                      <MdPlaylistAdd />
                      PlayLists
                    </Link>
                  </li>
                  <li>
                    <Link href={"/feedback"}>
                      {" "}
                      <MdOutlineFeedback />
                      Feedback
                    </Link>
                  </li>
                  <li>
                    <button
                      onClick={signout}
                      className="bg-gradient-to-r from-red-600 to-orange-500 drop-shadow-md text-white transition-all hover:scale-95 ease-in-out duration-200 py-2 px-8 rounded-xl flex items-center justify-center"
                    >
                      <IoLogOutOutline className="text-2xl" />
                      {t("Logout")}
                    </button>
                  </li>
                </motion.ul>
              )}
            </AnimatePresence>
          </div>
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
