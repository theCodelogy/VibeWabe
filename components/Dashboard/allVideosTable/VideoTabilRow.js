import axios from 'axios';
import Image from 'next/image';
import React from 'react';
import toast from 'react-hot-toast';
import Swal from 'sweetalert2';
import { MdDelete,MdEdit } from "react-icons/md";
import Link from 'next/link';


const VideoTabilRow = ({ video, refetch, videoIndex }) => {

// Make video Recommended
    const addRecommended = (id) => {
        axios.patch(`https://vibewabe-server.vercel.app/video/${id}`,{recommended:true})
            .then(res => {
                if(res.data.modifiedCount) {
                    refetch()
                    toast.success('Succesfully Recommended!')
                }
            })
            .catch(err => console.log(err.message))
}

// Remove video from Recommended
const removeRecommended = (id) => {
    axios.patch(`https://vibewabe-server.vercel.app/video/${id}`,{recommended:false})
        .then(res => {
            if(res.data.modifiedCount) {
                refetch()
                toast.success('Succesfully Removed!')
            }
        })
        .catch(err => console.log(err.message))
}

// Add video in fitured
const addFeatured = (id) => {
    axios.patch(`https://vibewabe-server.vercel.app/video/${id}`,{featured:true})
        .then(res => {
            if(res.data.modifiedCount) {
                refetch()
                toast.success('Succesfully Featured!')
            }
        })
        .catch(err => console.log(err.message))
}

// Remove video from Recommended
const removeFeatured = (id) => {
    axios.patch(`https://vibewabe-server.vercel.app/video/${id}`,{featured:false})
        .then(res => {
            if(res.data.modifiedCount) {
                refetch()
                toast.success('Succesfully Removed!')
            }
        })
        .catch(err => console.log(err.message))
}

// Video Delete
const videoDelete = (id)=>{
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
            axios.delete(`https://vibewabe-server.vercel.app/video/${id}`)
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
            <th>{videoIndex + 1}</th>
            <td><Image className=' w-[50px] h-[50px] rounded' src={video?.thambnail} alt='image' width={50} height={50} /></td>
            <td className='text-sm'>{video.title.length > 22 ? video.title.slice(0, 20) + '..' : video.title}</td>
            <td className='text-xs'>{video.date}</td>
            <td className='text-xs'>{video.category}</td>
            <td>
                {
                    video.recommended === true ?
                        <button onClick={()=>removeRecommended(video._id)} className='text-gray-100 text-xs px-2 py-1 rounded bg-green-600'>Remove</button>
                        : <button onClick={()=>addRecommended(video._id)} className='text-white text-xs px-2 py-1 rounded bg-blue-600 '>Make</button>
                }

            </td>
            <td>
                {
                    video.featured === true ?
                        <span onClick={()=>removeFeatured(video._id)} className='text-white text-xs px-2 py-1 rounded bg-purple-700 cursor-pointer '>Remove</span>
                        : <button onClick={()=>addFeatured(video._id)} className='text-gray-100 text-xs px-2 py-1 rounded bg-teal-600'>Make</button>
                }
            </td>
            <td>
                <Link href={`/dashboard/updateVideo/${video._id}`} className='text-2xl cursor-pointer text-indigo-400 '><MdEdit /></Link>
            </td> 
            <td>
                <span onClick={()=>videoDelete(video._id)} className='  text-red-600  text-2xl cursor-pointer'><MdDelete /></span>
            </td>
        </tr>
    );
};

export default VideoTabilRow;