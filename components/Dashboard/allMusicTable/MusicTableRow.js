import axios from 'axios';
import Image from 'next/image';
import React from 'react';
import toast from 'react-hot-toast';
import Swal from 'sweetalert2';
import { MdEdit } from "react-icons/md";
import Link from 'next/link';
import { MdDelete } from "react-icons/md";


const MusicTableRow = ({ music, refetch, musicIndex }) => {

    // Make Music Recommended or UnRecommended
    const recommendedHendle = (id) => {
        if (music.recommended === false || !music.recommended) {
            axios.patch(`https://vibewabe-server.vercel.app/music/${id}`, { recommended: true })
                .then(res => {
                    if (res.data.modifiedCount) {
                        refetch()
                        toast.success('Succesfully Recommended!')
                    }
                })
                .catch(err => console.log(err.message))
        } else if (music.recommended === true) {
            {
                axios.patch(`https://vibewabe-server.vercel.app/music/${id}`, { recommended: false })
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

    // Make Music Featured or UnFeatured
    const featuredHandle = (id) => {
        if (music.featured === false || !music.featured) {
            axios.patch(`https://vibewabe-server.vercel.app/music/${id}`, { featured: true })
                .then(res => {
                    if (res.data.modifiedCount) {
                        refetch()
                        toast.success('Succesfully Featured!')
                    }
                })
                .catch(err => console.log(err.message))
        } else if (music.featured === true) {
            axios.patch(`https://vibewabe-server.vercel.app/music/${id}`, { featured: false })
                .then(res => {
                    if (res.data.modifiedCount) {
                        refetch()
                        toast.success('Succesfully UnFeatured!')
                    }
                })
                .catch(err => console.log(err.message))
        }
    }

    //  Delete Music
    const musicDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't  to delete this Music!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#0d9488",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`https://vibewabe-server.vercel.app/music/${id}`)
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
            <th className='font-light lg:font-medium text-xs md:text-sm'>{musicIndex + 1}</th>

            <td><Image className=' w-[30px] md:w-[40px] lg:w-[50px] h-[30px] md:h-[40px]  lg:h-[50px] rounded' src={music?.thambnail} alt='image' width={50} height={50} /></td>

            <td className='text-[10px] md:text-xs lg:text-sm font-light lg:font-medium'>{music.title?.length > 22 ? music.title.slice(0, 20) + '..' : music.title}</td>

            <td className='text-[10px] md:text-xs lg:text-sm font-light lg:font-medium'>{music.date}</td>

            <td className='text-[10px] md:text-xs lg:text-sm font-light lg:font-medium'>{music.category}</td>

            <td>
                <input onClick={() => recommendedHendle(music._id)} type="checkbox" className="toggle toggle-accent text-gray-400 toggle-xs lg:toggle-sm " checked={music.recommended === true ? true : false} />

            </td>
            <td>
                <input onClick={() => featuredHandle(music._id)} type="checkbox" className="toggle toggle-info text-gray-400 toggle-xs lg:toggle-sm " checked={music.featured === true ? true : false} />
            </td>
            <td>
                <Link href={`/dashboard/updateMusic/${music._id}`} className='text-lg lg:text-2xl cursor-pointer text-indigo-400 '><MdEdit /></Link>
            </td>
            <td>
                <span onClick={() => musicDelete(music._id)} className='  text-red-600   text-lg lg:text-2xl cursor-pointer'><MdDelete /></span>
            </td>
        </tr>
    );
};

export default MusicTableRow;