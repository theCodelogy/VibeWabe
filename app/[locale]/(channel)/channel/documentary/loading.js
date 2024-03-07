'use client'
import React from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';


export default function loading() {
    return (
        <div className="min-h-screen bg-white">
        <div className="skeleton w-full h-[400px]"></div>
         <div className="max-w-4xl mx-auto px-4 py-8">
           <div className="animate-pulse flex gap-4 justify-center items-center">
             <div className="h-4 bg-gray-300 rounded w-2/3"></div>
             <div className="h-4 bg-gray-300 rounded"></div>
             <div className="h-4 bg-gray-300 rounded"></div>
             <div className="h-4 bg-gray-300 rounded w-1/2"></div>
             <div className="h-4 bg-gray-300 rounded"></div>
             <div className="h-4 bg-gray-300 rounded"></div>
             <div className="h-4 bg-gray-300 rounded w-3/4"></div>
           </div>
   
           <div className="animate-pulse grid grid-cols-1 md:grid-cols-3 my-10 gap-10 ">
   
           <div className="py-4 rounded shadow-md w-60 sm:w-80 animate-pulse bg-gray-50">
         <div className="flex p-4 space-x-4 sm:px-8">
           <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gray-300"></div>
           <div className="flex-1 py-2 space-y-4">
             <div className="w-full h-3 rounded bg-gray-300"></div>
             <div className="w-5/6 h-3 rounded bg-gray-300"></div>
           </div>
         </div>
         <div className="p-4 space-y-4 sm:px-8">
           <div className="w-full h-4 rounded bg-gray-300"></div>
           <div className="w-full h-4 rounded bg-gray-300"></div>
           <div className="w-3/4 h-4 rounded bg-gray-300"></div>
         </div>
       </div>
   
           <div className="py-4 rounded shadow-md w-60 sm:w-80 animate-pulse bg-gray-50">
         <div className="flex p-4 space-x-4 sm:px-8">
           <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gray-300"></div>
           <div className="flex-1 py-2 space-y-4">
             <div className="w-full h-3 rounded bg-gray-300"></div>
             <div className="w-5/6 h-3 rounded bg-gray-300"></div>
           </div>
         </div>
         <div className="p-4 space-y-4 sm:px-8">
           <div className="w-full h-4 rounded bg-gray-300"></div>
           <div className="w-full h-4 rounded bg-gray-300"></div>
           <div className="w-3/4 h-4 rounded bg-gray-300"></div>
         </div>
       </div>
   
           <div className="py-4 rounded shadow-md w-60 sm:w-80 animate-pulse bg-gray-50">
         <div className="flex p-4 space-x-4 sm:px-8">
           <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gray-300"></div>
           <div className="flex-1 py-2 space-y-4">
             <div className="w-full h-3 rounded bg-gray-300"></div>
             <div className="w-5/6 h-3 rounded bg-gray-300"></div>
           </div>
         </div>
         <div className="p-4 space-y-4 sm:px-8">
           <div className="w-full h-4 rounded bg-gray-300"></div>
           <div className="w-full h-4 rounded bg-gray-300"></div>
           <div className="w-3/4 h-4 rounded bg-gray-300"></div>
         </div>
       </div>
           <div className="py-4 rounded shadow-md w-60 sm:w-80 animate-pulse bg-gray-50">
         <div className="flex p-4 space-x-4 sm:px-8">
           <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gray-300"></div>
           <div className="flex-1 py-2 space-y-4">
             <div className="w-full h-3 rounded bg-gray-300"></div>
             <div className="w-5/6 h-3 rounded bg-gray-300"></div>
           </div>
         </div>
         <div className="p-4 space-y-4 sm:px-8">
           <div className="w-full h-4 rounded bg-gray-300"></div>
           <div className="w-full h-4 rounded bg-gray-300"></div>
           <div className="w-3/4 h-4 rounded bg-gray-300"></div>
         </div>
       </div>
           <div className="py-4 rounded shadow-md w-60 sm:w-80 animate-pulse bg-gray-50">
         <div className="flex p-4 space-x-4 sm:px-8">
           <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gray-300"></div>
           <div className="flex-1 py-2 space-y-4">
             <div className="w-full h-3 rounded bg-gray-300"></div>
             <div className="w-5/6 h-3 rounded bg-gray-300"></div>
           </div>
         </div>
         <div className="p-4 space-y-4 sm:px-8">
           <div className="w-full h-4 rounded bg-gray-300"></div>
           <div className="w-full h-4 rounded bg-gray-300"></div>
           <div className="w-3/4 h-4 rounded bg-gray-300"></div>
         </div>
       </div>
           <div className="py-4 rounded shadow-md w-60 sm:w-80 animate-pulse bg-gray-50">
         <div className="flex p-4 space-x-4 sm:px-8">
           <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gray-300"></div>
           <div className="flex-1 py-2 space-y-4">
             <div className="w-full h-3 rounded bg-gray-300"></div>
             <div className="w-5/6 h-3 rounded bg-gray-300"></div>
           </div>
         </div>
         <div className="p-4 space-y-4 sm:px-8">
           <div className="w-full h-4 rounded bg-gray-300"></div>
           <div className="w-full h-4 rounded bg-gray-300"></div>
           <div className="w-3/4 h-4 rounded bg-gray-300"></div>
         </div>
       </div>
   
            
           </div>
         </div>
       </div>
    );
};

