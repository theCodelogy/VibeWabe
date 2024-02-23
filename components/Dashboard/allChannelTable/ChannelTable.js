'use client';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { AiOutlineSearch } from "react-icons/ai";
import { MdNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";
import { RxCross2 } from "react-icons/rx";
import ChannelTableRow from './ChannelTableRow';

const ChannelTable = () => {
    const [searchText, setSearchText] = useState('')
    const [category, setCategory] = useState('')
    const [language, setLanguage] = useState('')
    const [itemParPage, setItemParPage] = useState(15)
    const [currentPage, setCurrentPage] = useState(1)
    const [totalVideos, setTotalVieos] = useState();

    const { data: allVideos = [], refetch, isLoading } = useQuery({
        queryKey: [],
        queryFn: async () => {
            const res = await axios.get(`http://localhost:5000/channel?title=${searchText}&category=${category}&language=${language}&limit=${itemParPage}&page=${currentPage - 1}`)
            return res.data;
        }
    })

    useEffect(() => {
        axios.get(`http://localhost:5000/channel?title=${searchText}&category=${category}&language=${language}`)
            .then(res => setTotalVieos(res.data.length))
        refetch()

    }, [category, searchText, refetch, itemParPage, currentPage, allVideos, language])

    
    // Video search by title
    const searchHeandle = async e => {
        const value = await e.target.value
        setSearchText(value)
        setCurrentPage(1)
    }

    // Video search clear
    const clearHandle = () => {
        setSearchText('')
        refetch()
    }

    // video filter by category
    const filterHandle = async e => {
        const value = await e.target.value
        if (value === 'all') {
            setCategory('')
            setCurrentPage(1)
        } else {
            setCategory(value)
            setCurrentPage(1)
        }

    }

    // video filter by Language
    const languageFilter = async e => {
        const value = await e.target.value
        if (value === 'all') {
            setLanguage('')
            setCurrentPage(1)
        } else {
            setLanguage(value)
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
                <div className='flex items-center justify-center gap-3 mb-5 mt-3'>

                    <select onChange={filterHandle} defaultValue={'default'} className='px-3 md:px-4 lg:px-6 py-1 lg:py-2 rounded-sm bg-slate-700 text-white shadow-sm shadow-gray-500 text-xs lg:text-sm'>
                        <option disabled value={'default'}>Tag..</option>
                        <option value={'all'}>All</option>
                        <option value={'tv'}>TV</option>
                        <option value={'shows'}>Shows</option>
                        <option value={'cricket'}>Cricket</option>
                        <option value={'football'}>Football</option>
                        <option value={'podcast'}>Podcast</option>
                        <option value={'documentary'}>Documentary</option>
                    </select>

                    <select onChange={languageFilter} defaultValue={'default'} className='px-3 md:px-4 lg:px-6  py-1 lg:py-2 rounded-sm bg-slate-700 text-white shadow-sm shadow-gray-500 text-xs lg:text-sm'>
                        <option disabled value={'default'}>Language...</option>
                        <option value={'all'}>All</option>
                        <option value={'English'}>English</option>
                        <option value={'Bangla'}>Bangla</option>
                        <option value={'Hindi'}>Hindi</option>
                        <option value={'Arabic'}>Arabic</option>
                        <option value={'korean'}>korean</option>
                        <option value={'Spanish'}>Spanish</option>
                        <option value={'French'}>French</option>
                    </select>

                    <div className=" flex items-center justify-center">
                        <input onChange={searchHeandle} value={searchText} className=" w-[150px] md:w-[180px] lg:w-[250px] py-2 pl-3 lg:py-[9px] text-xs lg:text-sm rounded-full  bg-slate-700 text-white placeholder:text-white shadow-sm shadow-gray-500" placeholder="Search By Name..." type="text" name="search" id="" />
                        {
                            searchText ?
                                <RxCross2 onClick={clearHandle} className="text-white text-lg md:text-2xl font-bold -ml-6 md:-ml-10 cursor-pointer" /> :
                                <AiOutlineSearch className="text-white text-lg md:text-2xl font-bold -ml-6 md:-ml-10"></AiOutlineSearch>

                        }


                    </div>
                </div>
                <table className="table table-xs lg:table-sm bg-[#101726] text-white px-0 mx-0 w-full ">
                    <thead>
                        <tr className='text-gray-200 text-[10px] md:text-xs font-light '>
                            <th className='font-light lg:font-medium'>No:</th>
                            <th className='font-light lg:font-medium'>Thumbnail</th>
                            <th className='font-light lg:font-medium'>Title</th>
                            <th className='font-light lg:font-medium'>Date</th>
                            <th className='font-light lg:font-medium'>Tag</th>
                            <th className='font-light lg:font-medium'>Views</th>
                            <th className='font-light lg:font-medium'>Recom..</th>
                            <th className='font-light lg:font-medium'>Featured</th>
                            <th className='font-light lg:font-medium'>Update</th>
                            <th className='font-light lg:font-medium'>Delete</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            allVideos?.map((video, videoIndex) => <ChannelTableRow
                                key={video._id}
                                video={video}
                                refetch={refetch}
                                videoIndex={videoIndex}
                            />)
                        }

                    </tbody>
                    <tfoot>
                        <tr className='text-gray-200 text-[10px] md:text-xs font-light '>
                            <th className='font-light lg:font-medium'>No:</th>
                            <th className='font-light lg:font-medium'>Thumbnail</th>
                            <th className='font-light lg:font-medium'>Title</th>
                            <th className='font-light lg:font-medium'>Date</th>
                            <th className='font-light lg:font-medium'>Tag</th>
                            <th className='font-light lg:font-medium'>Views</th>
                            <th className='font-light lg:font-medium'>Recom..</th>
                            <th className='font-light lg:font-medium'>Featured</th>
                            <th className='font-light lg:font-medium'>Update</th>
                            <th className='font-light lg:font-medium'>Delete</th>
                        </tr>

                    </tfoot>
                </table>
                <div className='flex flex-row justify-center items-center my-8 gap-1 lg:gap-2'>
                    <button onClick={prevHandle}><GrFormPrevious className='text-3xl text-red-500' /></button>
                    {
                        pages.map(page => <button
                            className={`px-[6px] py-[2px]  text-white mx-1 rounded-sm text-xs md:text-sm ${currentPage == page ? 'bg-red-500' : 'bg-slate-600'} `}
                            onClick={() => setCurrentPage(page)}
                            key={page}
                        >{page}</button>)
                    }
                    <button onClick={nextHandle}><MdNavigateNext className='text-3xl text-red-500' /></button>
                    <select onChange={itemParPageHandle} defaultValue={'15'} className='px-1 lg:px-2 py-1 rounded bg-slate-700 text-white shadow-sm shadow-gray-500 text-xs lg:text-sm'>
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

export default ChannelTable;