'use client';
import axios from 'axios';
import Image from 'next/image';
import React from 'react';
import toast from 'react-hot-toast';
import Swal from 'sweetalert2';
import {  MdEdit } from "react-icons/md";
import Link from 'next/link';
import { MdDelete } from "react-icons/md";

const ChannelTableRow = ({ video, refetch, videoIndex }) => {

    // Make video Recommended or UnRecommended
    const recommendedHendle = (id) => {
        if (video.recommended === false||!video.recommended) {
            axios.patch(`https://vibewabe-server.vercel.app/channel/${id}`, { recommended: true })
                .then(res => {
                    if (res.data.modifiedCount) {
                        refetch()
                        toast.success('Succesfully Recommended!')
                    }
                })
                .catch(err => console.log(err.message))
        } else if (video.recommended === true) {
            {
                axios.patch(`https://vibewabe-server.vercel.app/channel/${id}`, { recommended: false })
                    .then(res => {
                        if (res.data.modifiedCount) {
                            refetch()
                            toast.success('Succesfully UnRecommended!')
                        }
                    })
                    .catch(err => console.log(err.message))
            }
        }
    }

    // Make video Featured or UnFeatured
    const featuredHandle = (id) => {
        if (video.featured === false||!video.featured) {
            axios.patch(`https://vibewabe-server.vercel.app/channel/${id}`, { featured: true })
                .then(res => {
                    if (res.data.modifiedCount) {
                        refetch()
                        toast.success('Succesfully Featured!')
                    }
                })
                .catch(err => console.log(err.message))
        } else if (video.featured === true) {
            axios.patch(`https://vibewabe-server.vercel.app/channel/${id}`, { featured: false })
                .then(res => {
                    if (res.data.modifiedCount) {
                        refetch()
                        toast.success('Succesfully UnFeatured!')
                    }
                })
                .catch(err => console.log(err.message))
        }
    }

    // Video Delete
    const videoDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't  to delete this Video!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#0d9488",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`https://vibewabe-server.vercel.app/channel/${id}`)
                    .then(res => {
                        if (res.data.deletedCount) {
                            refetch()
                            toast.success('Succesfully Deleted!')
                        }
                    })
                    .catch(err => console.log(err.message))
            }
        });
    }
    return (
        <tr>
        <th className='font-light lg:font-medium text-xs md:text-sm'>{videoIndex + 1}</th>
        <td><Image className=' w-[30px] md:w-[40px] lg:w-[50px] h-[30px] md:h-[40px]  lg:h-[50px] rounded' src={video?.thumbnail} alt='image' width={50} height={50} /></td>
        <td className='text-[10px] md:text-xs lg:text-sm font-light lg:font-medium'>{video.title?.length > 22 ? video.title.slice(0, 20) + '..' : video.title}</td>
        <td className='text-[10px] md:text-xs lg:text-sm font-light lg:font-medium'>{video.date}</td>
        <td className='text-[10px] md:text-xs lg:text-sm font-light lg:font-medium'>{video.tags}</td>
        <td className='text-[10px] md:text-xs lg:text-sm font-light lg:font-medium'>{video.views}</td>
        <td>
        
            <input onClick={() => recommendedHendle(video._id)} type="checkbox" className="toggle toggle-accent text-gray-400 toggle-xs lg:toggle-sm " checked={video.recommended === true ? true : false} />

        </td>
        <td>
            <input onClick={() => featuredHandle(video._id)} type="checkbox" className="toggle toggle-info text-gray-400 toggle-xs lg:toggle-sm " checked={video.featured === true ? true : false} />
        </td>
        <td>
            <Link href={`/dashboard/updateVideo/${video._id}`} className='text-lg lg:text-2xl cursor-pointer text-indigo-400 '><MdEdit /></Link>
        </td>
        <td>
            <span onClick={() => videoDelete(video._id)} className='  text-red-600   text-lg lg:text-2xl cursor-pointer'><MdDelete /></span>
        </td>
    </tr>
    );
};

export default ChannelTableRow;