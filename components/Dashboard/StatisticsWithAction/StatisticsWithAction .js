'use client'
import axios from "axios";
import React, { useEffect, useState } from "react";

const StatisticsWithAction = () => {
  const [users, setUsers] = useState([])
  useEffect(() =>{
    axios.get('https://vibewabe-server.vercel.app/user')
    .then(res => setUsers(res.data))
  },[])

  const [videos, setVideos] = useState([])
  useEffect(() =>{
    axios.get('https://vibewabe-server.vercel.app/video')
    .then(res => setVideos(res.data))
  },[])
  const [musics, setMusics] = useState([])
  useEffect(() =>{
    axios.get('https://vibewabe-server.vercel.app/music')
    .then(res => setMusics(res.data))
  },[])
 
  const [walet , setWalet] = useState([])
  const [total, setTotalPrice] = useState(0);

  useEffect(() => {
    axios.get('https://vibewabe-server.vercel.app/order')
      .then(response => {
        // Update the state with the fetched data
        setWalet(response.data);
        console.log(response.data)
      })
      
  }, []);

  useEffect(() => {
    // Calculate total price
    const totalPrice = walet.reduce((acc, item) => {
    
        return acc + item.price;
      
     
    }, 0);
    setTotalPrice(totalPrice);
  }, [walet]);

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:gap-8">
      {/* Card 1 */}
      <div className="flex flex-col overflow-hidden rounded-lg bg-gradient-to-r from-red-500 to-yellow-500 shadow-sm dark:bg-gray-800 dark:text-gray-100">
        {/* Body */}
        <div className="flex grow items-center justify-between p-5">
          <dl className="space-y-1">
            <dt className="text-2xl font-bold">{users.length}</dt>
            <dd className="text-sm font-semibold uppercase tracking-wider text-gray-300 dark:text-gray-400">
              Total user
            </dd>
          </dl>
          <div className="inline-flex items-center space-x-1 rounded-full bg-emerald-200 px-2 py-1 text-sm font-semibold leading-4 text-emerald-800">
            <svg
              className="hi-solid hi-arrow-circle-up inline-block size-4"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z"
                clipRule="evenodd"
              />
            </svg>
            <span>7.9%</span>
          </div>
        </div>
        {/* END Body */}

        {/* Action Link */}
        <a
          href="javascript:void(0)"
          className="block bg-gray-50 p-3 text-center text-sm font-medium text-blue-600 hover:bg-gray-100 hover:bg-opacity-75 hover:text-blue-700 active:bg-gray-50 dark:bg-gray-900/50 dark:text-blue-400 dark:hover:bg-gray-900/75 dark:hover:text-blue-300 dark:active:bg-gray-900/50"
        >
          View All user
        </a>
        {/* END Action Link */}
      </div>
      {/* END Card 1 */}

      {/* Card 2 */}
      <div className="flex flex-col overflow-hidden rounded-lg bg-gradient-to-r from-red-500 to-yellow-500 shadow-sm dark:bg-gray-800 dark:text-gray-100">
        {/* Body */}
        <div className="flex grow items-center justify-between p-5">
          <dl className="space-y-1">
            <dt className="text-2xl font-bold">{videos.length}</dt>
            <dd className="text-sm font-semibold uppercase tracking-wider text-gray-300 dark:text-gray-400">
              Total Video 
            </dd>
          </dl>
          <div className="inline-flex items-center space-x-1 rounded-full bg-rose-200 px-2 py-1 text-sm font-semibold leading-4 text-rose-800">
            <svg
              className="hi-solid hi-arrow-circle-down inline-block size-4"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z"
                clipRule="evenodd"
              />
            </svg>
            <span>6.9%</span>
          </div>
        </div>
        {/* END Body */}

        {/* Action Link */}
        <a
          href="javascript:void(0)"
          className="block bg-gray-50 p-3 text-center text-sm font-medium text-blue-600 hover:bg-gray-100 hover:bg-opacity-75 hover:text-blue-700 active:bg-gray-50 dark:bg-gray-900/50 dark:text-blue-400 dark:hover:bg-gray-900/75 dark:hover:text-blue-300 dark:active:bg-gray-900/50"
        >
          View all Video
        </a>
        {/* END Action Link */}
      </div>
      {/* END Card 2 */}
      {/* Card 2 */}
      <div className="flex flex-col overflow-hidden rounded-lg bg-gradient-to-r from-red-500 to-yellow-500 shadow-sm dark:bg-gray-800 dark:text-gray-100">
        {/* Body */}
        <div className="flex grow items-center justify-between p-5">
          <dl className="space-y-1">
            <dt className="text-2xl font-bold">{musics.length}</dt>
            <dd className="text-sm font-semibold uppercase tracking-wider text-gray-300 dark:text-gray-400">
              Total Audio 
            </dd>
          </dl>
          <div className="inline-flex items-center space-x-1 rounded-full bg-rose-200 px-2 py-1 text-sm font-semibold leading-4 text-rose-800">
            <svg
              className="hi-solid hi-arrow-circle-down inline-block size-4"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z"
                clipRule="evenodd"
              />
            </svg>
            <span>6.9%</span>
          </div>
        </div>
        {/* END Body */}

        {/* Action Link */}
        <a
          href="javascript:void(0)"
          className="block bg-gray-50 p-3 text-center text-sm font-medium text-blue-600 hover:bg-gray-100 hover:bg-opacity-75 hover:text-blue-700 active:bg-gray-50 dark:bg-gray-900/50 dark:text-blue-400 dark:hover:bg-gray-900/75 dark:hover:text-blue-300 dark:active:bg-gray-900/50"
        >
          View all Audio
        </a>
        {/* END Action Link */}
      </div>
      {/* END Card 2 */}

      {/* Card 3 */}
      <div className="flex flex-col overflow-hidden rounded-lg bg-gradient-to-r from-red-500 to-yellow-500 shadow-sm dark:bg-gray-800 dark:text-gray-100">
        {/* Body */}
        <div className="flex grow items-center justify-between p-5">
          <dl className="space-y-1">
            <dt className="text-2xl font-bold">${total}</dt>
            <dd className="text-sm font-semibold uppercase tracking-wider text-gray-300 dark:text-gray-400">
              Wallet
            </dd>
          </dl>
          <div className="inline-flex items-center space-x-1 rounded-full bg-emerald-200 px-2 py-1 text-sm font-semibold leading-4 text-emerald-800">
            <svg
              className="hi-solid hi-arrow-circle-up inline-block size-4"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z"
                clipRule="evenodd"
              />
            </svg>
            <span>5.6%</span>
          </div>
        </div>
        {/* END Body */}

        {/* Action Link */}
        <a
          href="javascript:void(0)"
          className="block bg-gray-50 p-3 text-center text-sm font-medium text-blue-600 hover:bg-gray-100 hover:bg-opacity-75 hover:text-blue-700 active:bg-gray-50 dark:bg-gray-900/50 dark:text-blue-400 dark:hover:bg-gray-900/75 dark:hover:text-blue-300 dark:active:bg-gray-900/50"
        >
          Check your Balance
        </a>
        {/* END Action Link */}
      </div>
      {/* END Card 3 */}
    </div>
    // END Statistics: Simple with Action
  );
};

export default StatisticsWithAction;
