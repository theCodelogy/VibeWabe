'use client'
import React from 'react';
import { useTranslation } from "react-i18next";

const Filter = () => {
  const {t} = useTranslation();
    return (

       <div className='my-10'>
         <h1 className='text-center text-white text-xl font-semibold my-5'>{t("Movies:selectcat")}</h1>
        <div className='flex gap-4 justify-center items-center '>
          
            <li className="py-3 w-[25%] md:w-[20%] lg:w-[13%] flex-shrink-0 text-center hover:bg-gradient-to-r from-red-600 to-zinc-500  border border-gray-300 cursor-pointer duration-[.4s] text-sm flex justify-center text-white">
      Thriler Movie
    </li>
            <li className="py-3 bg-[] w-[25%] md:w-[20%] lg:w-[13%] flex-shrink-0 text-center hover:bg-gradient-to-r from-red-600 to-zinc-500 border border-gray-300 cursor-pointer duration-[.4s] text-sm flex justify-center text-white">
      Action Movie
    </li>
            <li className="py-3 w-[25%] md:w-[20%] lg:w-[13%] flex-shrink-0 text-center hover:bg-gradient-to-r from-red-600 to-zinc-500 border border-gray-300 cursor-pointer duration-[.4s] text-sm flex justify-center text-white">
            Movie
    </li>
         
        </div>
       </div>
    );
};

export default Filter;