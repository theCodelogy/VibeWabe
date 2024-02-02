'use client'
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import VideoTabilRow from './VideoTabilRow';
import { AiOutlineSearch } from "react-icons/ai";
import { MdNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";


const VideoTabil = () => {
    const [searchText, setSearchText] = useState('')
    const [category, setCategoty] = useState('')
    const [itemParPage, setItemParPage] = useState(15)
    const [currentPage, setCurrentPage] = useState(1)
    const [totalVideos, setTotalVieos] = useState()



    const { data: allVideos = [], refetch, isLoading } = useQuery({
        queryKey: [],
        queryFn: async () => {
            const res = await axios.get(`https://vibewabe-server.vercel.app/video?title=${searchText}&category=${category}&limit=${itemParPage}&page=${currentPage-1}`)
            return res.data;
        }
    })

    useEffect(() => {
        axios.get(`https://vibewabe-server.vercel.app/video?title=${searchText}&category=${category}`)
            .then(res => setTotalVieos(res.data.length))
        refetch()

    }, [category, searchText, refetch, itemParPage, currentPage, allVideos])




    // Video search by title
    const searchHeandle = async e => {
        const value = await e.target.value
        setSearchText(value)
        setCurrentPage(1)
    }

    // video filter by category
    const filterHandle = async e => {
        const value = await e.target.value
        if (value === 'all') {
            setCategoty('')
            setCurrentPage(1)
        } else {
            setCategoty(value)
            setCurrentPage(1)
        }

    }

    // Pagination
    const pageNumber = Math.ceil(totalVideos / itemParPage)
    const pages = []
    for (let i = 1; i <= pageNumber; i++) {
        pages.push(i)
    }

// Video parpage Handle
    const itemParPageHandle = e => {
        setItemParPage(parseInt(e.target.value))
        setCurrentPage(1)
    }

// previous Hendle
    const prevHandle = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1)

        }
    }

// Nest Hendle
    const nextHandle = () => {
        if (currentPage < pages.length) {
            setCurrentPage(currentPage + 1)

        }
    }
    return (
        <div>
            <div className="overflow-x-auto">
                <div className='flex items-center justify-center gap-10 mb-5 mt-3'>
                    <select onChange={filterHandle} className='px-10 py-2 rounded bg-slate-700 text-white shadow-sm shadow-gray-500'>
                        <option value={'all'}>All</option>
                        <option value={'drama'}>Drama</option>
                        <option value={'movie'}>Movie</option>
                        <option value={'series'}>Series</option>
                    </select>
                    <div className=" flex items-center justify-center">
                        <input onChange={searchHeandle} className=" w-[150px] md:w-[180px] lg:w-[250px] py-2 pl-3 lg:py-[9px] text-xs md:text-sm rounded-full  bg-slate-700 text-white placeholder:text-white shadow-sm shadow-gray-500" placeholder="Search By Name..." type="text" name="search" id="" />
                        <AiOutlineSearch className="text-white text-lg md:text-2xl font-bold -ml-6 md:-ml-10"></AiOutlineSearch>
                    </div>
                </div>
                <table className="table table-md bg-[#101726] text-white ">
                    <thead>
                        <tr className='text-gray-200'>
                            <th>No:</th>
                            <th>Thambnail</th>
                            <th>Title</th>
                            <th>Date</th>
                            <th>Category</th>
                            <th>Recommended</th>
                            <th>Featured</th>
                            <th>Update</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            allVideos?.map((video, videoIndex) => <VideoTabilRow
                                key={video._id}
                                video={video}
                                refetch={refetch}
                                videoIndex={videoIndex}
                            />)
                        }

                    </tbody>
                    <tfoot>
                        <tr className='text-gray-200'>
                            <th>No:</th>
                            <th>Thambnail</th>
                            <th>Title</th>
                            <th>Date</th>
                            <th>Category</th>
                            <th>Recommended</th>
                            <th>Featured</th>
                            <th>Update</th>
                            <th>Delete</th>
                        </tr>

                    </tfoot>
                </table>
                <div className='flex flex-row justify-center items-center mt-8 gap-2'>
                    <button onClick={prevHandle}><GrFormPrevious className='text-3xl text-red-500' /></button>
                    {
                        pages.map(page => <button
                            className={`px-[6px] py-[2px]  text-white mx-1 rounded-sm text-sm ${currentPage == page ? 'bg-red-500' : 'bg-slate-600'} `}
                            onClick={() => setCurrentPage(page)}
                            key={page}
                        >{page}</button>)
                    }
                    <button onClick={nextHandle}><MdNavigateNext className='text-3xl text-red-500' /></button>
                    <select onChange={itemParPageHandle} defaultValue={'15'} className='px-2 py-1 rounded bg-slate-700 text-white shadow-sm shadow-gray-500'>
                        <option value={'10'}>10</option>
                        <option value={'15'}>15</option>
                        <option value={'20'}>20</option>
                        <option value={'30'}>30</option>
                        <option value={'40'}>40</option>
                        <option value={'50'}>50</option>
                    </select>
                </div>
            </div>
        </div>
    );
};

export default VideoTabil;