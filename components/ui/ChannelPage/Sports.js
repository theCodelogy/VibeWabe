"use client";
import Image from "next/image";
import { TbPoint } from "react-icons/tb";

//images
import sports1 from "@/assets/channelImage/sports1.jpg";
import sports2 from "@/assets/channelImage/sports2.webp";
import channel1 from "@/assets/channelImage/sp6.png";
import channel5 from "@/assets/channelImage/sp4.png";
import channel3 from "@/assets/channelImage/sp3.jpg";
import flag1 from "@/assets/channelImage/flag1.png";
import flag2 from "@/assets/channelImage/flag2.png";
import flag3 from "@/assets/channelImage/flag3.webp";
import flag4 from "@/assets/channelImage/flag4.webp";
import { useTranslation } from "react-i18next";
import { PiGameControllerDuotone } from "react-icons/pi";
import { IoEyeOutline } from "react-icons/io5";
import Link from "next/link";

const Sports = () => {
  const { t } = useTranslation();
  return (
    <div className="px-5 container mx-auto mt-20">
      <h2 className="text-white text-xl font-bold">
        {t("channel:latestsports")}
      </h2>
      <div className="  mt-5 grid grid-cols-1 lg:grid-cols-5 gap-10">
        {/* left section */}
        <div className="mt-10 col-span-5 md:col-span-2 bg-zinc-700 rounded-md ">
          <h2 className="text-xl text-zinc-300 mb-2 mt-2 ml-3">
            Football Matches
          </h2>
          <div className="border border-slate-500  w-3/4 mx-auto rounded-3xl bg-slate-800 hover:bg-sky-900 mb-2">
            <div className="flex gap-6 items-center justify-center py-1 ">
              <Image
                className="w-[40px]  h-[40px]  rounded-full transition duration-300  transform hover:scale-105"
                src={channel5}
                alt="slice image"
              />
              <div className="flex gap-4 text-zinc-400">
                <h2 className="text-sm">Liverpool</h2>
                <PiGameControllerDuotone className="text-white text-xl" />
                <h2 className="text-sm ">Chelsea</h2>
                <Link href={`channel/sports/id`}>
                <button
                  
                  className="text-xs rounded-lg px-1 hover:text-white bg-gradient-to-r from-red-600 to-blue-600"
                >
                  View
                </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="border border-slate-500  w-3/4 mx-auto rounded-3xl bg-slate-800 hover:bg-sky-900 mb-2">
            <div className="flex gap-6 items-center justify-center py-1">
              <Image
                className="w-[40px]  h-[40px]  rounded-full transition duration-300  transform hover:scale-105"
                src={channel1}
                alt="slice image"
              />
              <div className="flex gap-4 text-zinc-400">
                <h2 className="text-sm">Liverpool</h2>
                <PiGameControllerDuotone className="text-white text-xl" />
                <h2 className="text-sm ">Chelsea</h2>
                <Link href={`channel/sports/id`}>
                <button className="text-xs rounded-lg px-1 hover:text-white bg-gradient-to-r from-red-600 to-zinc-600">
                  View
                </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="border border-slate-500  w-3/4 mx-auto rounded-3xl bg-slate-800 hover:bg-sky-900 mb-2">
            <div className="flex gap-6 items-center justify-center py-1">
              <Image
                className="w-[40px]  h-[40px]  rounded-full transition duration-300  transform hover:scale-105"
                src={channel3}
                alt="slice image"
              />
              <div className="flex gap-4 text-zinc-400">
                <h2 className="text-sm">Liverpool</h2>
                <PiGameControllerDuotone className="text-white text-xl" />
                <h2 className="text-sm ">Chelsea</h2>
                <Link href={`channel/sports/id`}>
                <button className="text-xs rounded-lg px-1 hover:text-white bg-gradient-to-r from-red-600 to-zinc-600">
                  View
                </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="border border-slate-500  w-3/4 mx-auto rounded-3xl bg-slate-800 hover:bg-sky-900 mb-2">
            <div className="flex gap-6 items-center justify-center py-1">
              <Image
                className="w-[40px]  h-[40px]  rounded-full transition duration-300  transform hover:scale-105"
                src={channel5}
                alt="slice image"
              />
              <div className="flex gap-4 text-zinc-400">
                <h2 className="text-sm">Liverpool</h2>
                <PiGameControllerDuotone className="text-white text-xl" />
                <h2 className="text-sm ">Chelsea</h2>
                <Link href={`channel/sports/id`}>
                <button className="text-xs rounded-lg px-1 hover:text-white bg-gradient-to-r from-red-600 to-zinc-600">
                  View
                </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="border border-slate-500  w-3/4 mx-auto rounded-3xl bg-slate-800 hover:bg-sky-900 mb-2">
            <div className="flex gap-6 items-center justify-center py-1">
              <Image
                className="w-[40px]  h-[40px]  rounded-full transition duration-300  transform hover:scale-105"
                src={channel1}
                alt="slice image"
              />
              <div className="flex gap-4 text-zinc-400">
                <h2 className="text-sm">Liverpool</h2>
                <PiGameControllerDuotone className="text-white text-xl" />
                <h2 className="text-sm ">Chelsea</h2>
                <Link href={`channel/sports/id`}>
                <button className="text-xs rounded-lg px-1 hover:text-white bg-gradient-to-r from-red-600 to-zinc-600">
                  View
                </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="mb-6 border border-slate-500  w-3/4 mx-auto rounded-3xl bg-slate-800 hover:bg-sky-900">
            <div className="flex gap-6 items-center justify-center py-1">
              <Image
                className="w-[40px]  h-[40px]  rounded-full transition duration-300  transform hover:scale-105"
                src={channel3}
                alt="slice image"
              />
              <div className="flex gap-4 text-zinc-400">
                <h2 className="text-sm">Liverpool</h2>
                <PiGameControllerDuotone className="text-white text-xl" />
                <h2 className="text-sm ">Chelsea</h2>
                <Link href={`channel/sports/id`}>
                <button className="text-xs rounded-lg px-1 hover:text-white bg-gradient-to-r from-red-600 to-zinc-600">
                  View
                </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* right section */}
        <div className="col-span-5 md:col-span-3  gap-2 mt-10 bg-zinc-700  rounded-md">
          <h2 className="text-xl text-zinc-300 mb-2 mt-2 ml-3">
            Cricket Matches
          </h2>
          <div className="bg-gradient-to-r from-red-600 to-blue-600">
            <h2 className="mb-2 text-center text-white">Todays Matches</h2>
          </div>

          {/* first div */}
          <div className="hover:bg-sky-900 border border-zinc-500 py-1 px-3 grid grid-cols-1 md:grid-cols-3 items-center justify-around">
            {/* left div */}
            <div className="text-zinc-500 my-1 flex  items-center gap-6">
              <Image
                className="w-[80px]  h-[80px]  rounded-lg mb-2 transition duration-300  transform hover:scale-105"
                src={channel3}
                alt="slice image"
              />
              <h2 className="mb-2 text-center text-slate-300">
                2 February <br /> 2024
              </h2>
            </div>

            {/* middle */}
            <div className="text-slate-300">
              <h3 className="mb-2 text-sm">ACC Challenger Cup</h3>
              <div className="flex gap-3 items-center">
                <Image
                  className="w-[30px]  h-[30px]  mb-2 transition duration-300  transform hover:scale-105"
                  src={flag1}
                  alt="slice image"
                />
                <h3 className="text-sm">Australia</h3>
                <h4 className="text-sm">3:00pm</h4>
              </div>
              <div className="flex gap-3 items-center">
                <Image
                  className="w-[30px]  h-[30px]  mb-2 transition duration-300  transform hover:scale-105"
                  src={flag2}
                  alt="slice image"
                />
                <h3 className="text-sm">Zimbabwe</h3>
                <Link href={`channel/sports/id`}>
                <button className="text-xs rounded-lg px-1 hover:text-white bg-gradient-to-r from-red-600 to-zinc-600">
                  View
                </button>
                </Link>
              </div>
            </div>
            {/* right div */}
            <div className="text-slate-300">
              <h3 className="mb-2 text-sm">ACC Challenger Cup</h3>
              <div className="flex gap-3 items-center">
                <Image
                  className="w-[30px]  h-[30px]  mb-2 transition duration-300  transform hover:scale-105"
                  src={flag3}
                  alt="slice image"
                />
                <h3 className="text-sm">Japan</h3>
                <h4 className="text-sm">8:00pm</h4>
              </div>
              <div className="flex gap-3 items-center">
                <Image
                  className="w-[30px]  h-[30px]  mb-2 transition duration-300  transform hover:scale-105"
                  src={flag4}
                  alt="slice image"
                />
                <h3 className="text-sm">India</h3>
                <Link href={`channel/sports/id`}>
                <button className="text-xs rounded-lg px-1 hover:text-white bg-gradient-to-r from-red-600 to-zinc-600">
                  View
                </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="bg-gradient-to-r from-red-600 to-zinc-600">
            <h2 className="mb-2 mt-4 text-center text-white">
              Tomorrows Matches
            </h2>
          </div>
          {/* second div */}
          <div className="hover:bg-sky-900 mt-4 border border-zinc-500 py-1 px-3 grid grid-cols-1 md:grid-cols-3 items-center justify-around">
            {/* left div */}
            <div className="text-zinc-500 my-1 flex  items-center gap-6">
              <Image
                className="w-[80px]  h-[80px]  rounded-lg mb-2 transition duration-300  transform hover:scale-105"
                src={channel5}
                alt="slice image"
              />
              <h2 className="mb-2 text-center text-slate-300">
                3 February <br /> 2024
              </h2>
            </div>

            {/* middle */}
            <div className="text-slate-300">
              <h3 className="mb-2 text-sm">ACC Challenger Cup</h3>
              <div className="flex gap-3 items-center">
                <Image
                  className="w-[30px]  h-[30px]  mb-2 transition duration-300  transform hover:scale-105"
                  src={flag1}
                  alt="slice image"
                />
                <h3 className="text-sm">Australia</h3>
                <h4 className="text-sm">3:00pm</h4>
              </div>
              <div className="flex gap-3 items-center">
                <Image
                  className="w-[30px]  h-[30px]  mb-2 transition duration-300  transform hover:scale-105"
                  src={flag2}
                  alt="slice image"
                />
                <h3 className="text-sm">Zimbabwe</h3>
                <Link href={`channel/sports/id`}>
                <button className="text-xs rounded-lg px-1 hover:text-white bg-gradient-to-r from-red-600 to-zinc-600">
                  View
                </button>
                </Link>
              </div>
            </div>
            {/* right div */}
            <div className="text-slate-300">
              <h3 className="mb-2 text-sm">ACC Challenger Cup</h3>
              <div className="flex gap-3 items-center">
                <Image
                  className="w-[30px]  h-[30px]  mb-2 transition duration-300  transform hover:scale-105"
                  src={flag3}
                  alt="slice image"
                />
                <h3 className="text-sm">Japan</h3>
                <h4 className="text-sm">8:00pm</h4>
              </div>
              <div className="flex gap-3 items-center">
                <Image
                  className="w-[30px]  h-[30px]  mb-2 transition duration-300  transform hover:scale-105"
                  src={flag4}
                  alt="slice image"
                />
                <h3 className="text-sm">India</h3>
                <Link href={`channel/sports/id`}>
                <button className="text-xs rounded-lg px-1 hover:text-white bg-gradient-to-r from-red-600 to-zinc-600">
                  View
                </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sports;
