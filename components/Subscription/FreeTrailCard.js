'use client'
import { useContext, useEffect, useState } from 'react';
import axios from "axios";
import { authContext } from '@/utils/AuthProvider';
import toast from "react-hot-toast";
import { useRouter } from 'next/navigation'

const FreeTrailCard = () => {
    const router = useRouter();
    const { user } = useContext(authContext);
    const [freeTrailUser, setFreeTrailUser] = useState({})

   useEffect(()=>{
    axios.get(`https://vibewabe-server.vercel.app/user/${user?.email}`)
    .then(res=>setFreeTrailUser(res.data))
   },[user])

    const freeTrailHandle = () => {
        const freeTrailData = {
            role: 'freeTrail',
            freeTrailInfo: {
                takeingTime: new Date(),
                duration: 43200,
            }
        }
        axios.get(`https://vibewabe-server.vercel.app/user/${user?.email}`)
            .then(res => {
                axios.patch(`https://vibewabe-server.vercel.app/user/${res.data?._id}`, freeTrailData)
                    .then(res => {
                        if (res.data.modifiedCount > 0) {
                            toast.success('Successfully get freeTrail!')
                            router.push('/video')
                        }
                    })
                    .catch(err => console.log(err.message))
            })


    }

    return (

        <div className="relative p-8 border border-gray-200 rounded-2xl shadow-sm flex flex-col">
            <div className="flex-1">
                <h3 className="text-2xl font-bold bg-gradient-to-r from-red-500 to-yellow-500 text-transparent bg-clip-text">For : 1 Month</h3>
                <p className="absolute top-0 py-1.5 px-4 bg-gradient-to-r from-red-500 to-yellow-500  text-white rounded-full text-xs font-semibold uppercase tracking-wide transform -translate-y-1/2">
                    Free Trail
                </p>
                <p className="mt-4 flex items-baseline">
                    <span className="text-4xl font-extrabold tracking-tight text-white">$00</span>
                </p>
                <p className="mt-6 text-white">You want to learn and have a personal assistant</p>
                <ul role="list" className="mt-6 space-y-6">
                    <li className="flex">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0 w-6 h-6 text-orange-400" aria-hidden="true">
                            <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                        <span className="ml-3 text-white">Experience the full range of features offered in the Video + Music plan for one hour, absolutely free.</span>
                    </li>
                    <li className="flex">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0 w-6 h-6 text-orange-400" aria-hidden="true">
                            <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                        <span className="ml-3 text-white">Instant access to premium music tracks and videos without any subscription commitment.</span>
                    </li>
                    <li className="flex">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0 w-6 h-6 text-orange-400" aria-hidden="true">
                            <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                        <span className="ml-3 text-white">Option to explore and sample various genres of music and video content during the trial period.</span>
                    </li>
                    <li className="flex">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0 w-6 h-6 text-orange-400" aria-hidden="true">
                            <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                        <span className="ml-3 text-white">No ads or interruptions during the trial period for uninterrupted enjoyment. </span>
                    </li>
                    <li className="flex">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0 w-6 h-6 text-orange-400" aria-hidden="true">
                            <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                        <span className="ml-3 text-white">Easy cancellation at any time with no obligation to continue after the trial expires.</span>
                    </li>
                </ul>
            </div>
            <div>

                {
                    freeTrailUser?.freeTrailInfo?
                     <button  className="bg-gradient-to-r from-red-500 to-yellow-500  text-white hover:bg-red-700 mt-8 block w-full py-3 px-6 border border-transparent rounded-md text-center font-medium">Already Taken</button> :
                    <button onClick={freeTrailHandle} className="bg-gradient-to-r from-red-500 to-yellow-500  text-white hover:bg-red-700 mt-8 block w-full py-3 px-6 border border-transparent rounded-md text-center font-medium">Try For Free</button>
                }
            </div>
        </div>

    );
};

export default FreeTrailCard;