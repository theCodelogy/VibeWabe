import axios from 'axios';
import React from 'react';
import toast from 'react-hot-toast';
import Swal from 'sweetalert2';
import Link from 'next/link';
import { MdDelete } from "react-icons/md";


const UserTableRow = ({ user, refetch, userIndex }) => {

    // Make video Recommended or UnRecommended
    const adminHendle = (id) => {
        if (user.admin === false || !user.admin) {
            axios.patch(`http://localhost:5000/user/${id}`, { admin: true })
                .then(res => {
                    if (res.data.modifiedCount) {
                        refetch()
                        toast.success('Succesfully make admin!')
                    }
                })
                .catch(err => console.log(err.message))
        } else if (user.admin === true) {
            {
                axios.patch(`http://localhost:5000/user/${id}`, { admin: false })
                    .then(res => {
                        if (res.data.modifiedCount) {
                            refetch()
                            toast.success('Succesfully Remove Admin!')
                        }
                    })
                    .catch(err => console.log(err.message))
            }
        }
    }

    

    // Video Delete
    const userDelete = (email) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't  to delete this user!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#0d9488",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`https://vibewabe-server.vercel.app/user/${email}`)
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
            <th className='font-light lg:font-medium text-xs md:text-sm'>{userIndex + 1}</th>
            
            <td className='text-[10px] md:text-xs lg:text-sm font-light lg:font-medium'>{user.name}</td>
            <td className='text-[10px] md:text-xs lg:text-sm font-light lg:font-medium'>{user.email}</td>
            <td className='text-[10px] md:text-xs lg:text-sm font-light lg:font-medium'>{user.role}</td>
            
            <td>
                <input onClick={() => adminHendle(user._id)} type="checkbox" className="toggle toggle-accent text-gray-400 toggle-xs lg:toggle-sm " checked={user.admin === true ? true : false} />

            </td>
            <td>
                <span onClick={() => userDelete(user.email)} className='  text-red-600   text-lg lg:text-2xl cursor-pointer'><MdDelete /></span>
            </td>
        </tr>
    );
};

export default UserTableRow;