'use client'
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { AiOutlineSearch } from "react-icons/ai";
import { MdNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";
import { RxCross2 } from "react-icons/rx";
import UserTableRow from './UserTableRow';



const UserTable = () => {
    const [searchText, setSearchText] = useState('')
    const [itemParPage, setItemParPage] = useState(15)
    const [currentPage, setCurrentPage] = useState(1)
    const [totalVideos, setTotalVieos] = useState()
    const [role, setRole]=useState('')



    const { data: allUsers = [], refetch, isLoading } = useQuery({
        queryKey: [],
        queryFn: async () => {
            const res = await axios.get(`https://vibewabe-server.vercel.app/user?name=${searchText}&role=${role}&limit=${itemParPage}&page=${currentPage - 1}`)
            return res.data;
        }
    })

    useEffect(() => {
        axios.get(`https://vibewabe-server.vercel.app/user?name=${searchText}&role=${role}`)
            .then(res => setTotalVieos(res.data.length))
        refetch()

    }, [ searchText, refetch, itemParPage, currentPage, allUsers,role])




    // user search by name
    const searchHeandle = async e => {
        const value = await e.target.value
        setSearchText(value)
        setCurrentPage(1)
    }

    // user search clear
    const clearHandle = () => {
        setSearchText('')
        refetch()
    }

    // user filter by user role
    const filterHandle = async e => {
        const value = await e.target.value
        if (value === 'all') {
            setRole('')
            setCurrentPage(1)
        } else {
            setRole(value)
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
                        <option disabled value={'default'}>User Type..</option>
                        <option value={'all'}>All</option>
                        <option value={'subscriber'}>Subscriber</option>
                        <option value={'freeTrail'}>Free Trail</option>
                        <option value={'musicUser'}>Music User</option>
                        <option value={'videoUser'}>Video User</option>
                        <option value={'videoPlusMusic'}>Video Plus Music</option>
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
                            <th className='font-light lg:font-medium'>Name</th>
                            <th className='font-light lg:font-medium'>Email</th>
                            <th className='font-light lg:font-medium'>User Type</th>
                            <th className='font-light lg:font-medium'>Admin</th>
                            <th className='font-light lg:font-medium'>Delete</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            allUsers?.map((user, userIndex) => <UserTableRow
                                key={user._id}
                                user={user}
                                refetch={refetch}
                                userIndex={userIndex}
                            />)
                        }

                    </tbody>
                    <tfoot>
                        <tr className='text-gray-200 text-[10px] md:text-xs font-light '>
                            <th className='font-light lg:font-medium'>No:</th>
                            <th className='font-light lg:font-medium'>Name</th>
                            <th className='font-light lg:font-medium'>Email</th>
                            <th className='font-light lg:font-medium'>User Type</th>
                            <th className='font-light lg:font-medium'>Admin</th>
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

export default UserTable;