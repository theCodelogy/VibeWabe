"use client"
import React, { useContext, useEffect, useState } from 'react';
import { useForm } from "react-hook-form"
import { FcGoogle } from "react-icons/fc";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import Link from 'next/link';
import { authContext, useAuth } from '@/utils/AuthProvider';
import toast from "react-hot-toast";
import axios from 'axios';
import { updateProfile } from 'firebase/auth';
import { useRouter } from 'next/navigation'
import Image from 'next/image';
import Logo from '@/public/VibeWabe.png'

const SignUpForm = () => {

    const { createUseWithEmail, signIngWithGoogle, user } = useContext(authContext)
    const [currentUser, setCurrentUser] = useState({})
    useEffect(() => {
        axios.get(`https://vibe-wabe-server.vercel.app/user/${user?.email}`)
            .then(data => setCurrentUser(data.data))
    }, [user])
    const router = useRouter();
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm()

    const [passwordShow, setPasswordShow] = useState(false)

    // Signup with email and password
    const handle = (data) => {
        createUseWithEmail(data.email, data.password)
            .then(res => {
                const user = {
                    name: data.name,
                    email: data.email, role: 'subscriber',
                }
                // store user data in mongodb
                axios.post('https://vibe-wabe-server.vercel.app/user', user)
                    .then(res => {
                        console.log(res.data)
                        if (res.data.insertedId) {
                            toast.success('Successfully SignUp!')
                            router.push('/subscription')
                        }
                    })
                    .catch()
                // update user
                updateProfile(res.user, {
                    displayName: data.name
                })
                    .then()
                    .catch()
                reset()
            })
            .catch()
    }

    // signup with google
    const gogleLoginHandle = () => {
        signIngWithGoogle()
            .then(res => {
                const user = {
                    name: res.user.displayName,
                    email: res.user.email, role: 'subscriber',
                }
                toast.success('Successfully SignUp!')
                axios.post('https://vibe-wabe-server.vercel.app/user', user)
                    .then()
                    .catch()

                if (currentUser?.role === 'videoUser' || currentUser?.role === 'videoAndMusicUser' || currentUser?.role === 'freeTrail') {
                    router.push('/video')
                } else if (currentUser?.role === 'musicUser') {
                    router.push('/music')
                } else {
                    router.push('/subscription')
                }
            })
            .catch()
    }
    return (
        <div>
            <form onSubmit={handleSubmit((data) => handle(data))} className=" px-6 pt-4 pb-6 text-sm ">
                <h1 className="text-4xl text-red-600 pt-3 font-bold text-center mb-4">Sign Up</h1>
                <div className="flex flex-col gap-1 mb-2">
                    <label className="text-md font-medium" for='name'>
                        Name<span className='text-red-600'>*</span>
                    </label>
                    <input type="text" id='name' placeholder="Your Name" {...register("name", { required: "This field is required" })} className=" py-[13px] px-3 border drop-shadow bg-[#101726] text-white " />
                    <p className="text-red-600">{errors.name?.message}</p>
                </div>


                <div className="flex flex-col gap-1 mb-2">
                    <label className="text-md font-medium" for='email'>
                        Email<span className='text-red-600'>*</span>
                    </label>
                    <input type="email" id='email' placeholder="Your Email" {...register("email", { required: "This field is required" })} className=" py-[13px] px-3 border drop-shadow bg-[#101726] text-white " />
                    <p className="text-red-600">{errors.email?.message}</p>
                </div>

                <div className="flex flex-col gap-1 mb-3 relative">
                    <label className="text-md font-medium" for='password'>
                        Password<span className='text-red-600'>*</span>
                    </label>
                    <input id='password' type={passwordShow ? 'text' : 'password'} {...register("password", { required: "This field is required", minLength: { value: 6, message: 'Password should be up to 6 character' }, maxLength: { value: 10, message: 'Password should under the 10 character' } })} placeholder=" Password" className=" bg-[#101726] text-white py-[13px] px-3 border drop-shadow   " />
                    <span className="text-xl text-red-600 absolute right-3 top-10" onClick={() => setPasswordShow(!passwordShow)}>
                        {
                            passwordShow ? <AiFillEye></AiFillEye> : <AiFillEyeInvisible></AiFillEyeInvisible>
                        }
                    </span>
                    <p className="text-red-600">{errors.password?.message}</p>
                </div>
                <div className=" mt-6">
                    <button type="submit" className="bg-gradient-to-r from-red-600 to-zinc-500 font-mdeium text-lg drop-shadow-md text-white transition-all hover:scale-95 ease-in-out duration-200 py-[10px] px-8 w-full rounded flex items-center justify-center">SUBMIT</button>
                </div>
                <div onClick={gogleLoginHandle} className="text-center border-t border-slate-600 my-4 pt-3">
                    <FcGoogle className="text-3xl cursor-pointer mx-auto"></FcGoogle>
                </div>
                <div className="text-center font-medium text-slate-900 -mt-2">
                    <p>Already have account ? Please <Link className="text-red-600" href='/login'>Login</Link></p>
                </div>
            </form>
        </div>

        // <div className="min-h-screen bg-gray-100 text-gray-900 flex justify-center">
        //     <div className="max-w-screen-xl m-0 sm:m-10 bg-white shadow sm:rounded-lg flex justify-center flex-1">
        //         <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
        //             <div className='flex items-center justify-center'>
        //                 <Image src={Logo} className="w-[30%]  " alt="Google Logo" />
        //             </div>
        //             <form onSubmit={handleSubmit((data) => handle(data))} className="mt-12 flex flex-col items-center">
        //                 <div className="w-full flex-1 mt-8">
        //                     <div className="flex flex-col items-center">
        //                         <button onClick={gogleLoginHandle} className="w-full max-w-xs font-bold shadow-sm rounded-lg py-3 bg-red-100 text-gray-800 flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline">
        //                             <div className="bg-white p-2 rounded-full">
        //                                 <svg className="w-4" viewBox="0 0 533.5 544.3">
        //                                     <svg className="w-4" viewBox="0 0 533.5 544.3">
        //                                         <path d="M533.5 278.4c0-18.5-1.5-37.1-4.7-55.3H272.1v104.8h147c-6.1 33.8-25.7 63.7-54.4 82.7v68h87.7c51.5-47.4 81.1-117.4 81.1-200.2z" fill="#4285f4"></path>
        //                                         <path d="M272.1 544.3c73.4 0 135.3-24.1 180.4-65.7l-87.7-68c-24.4 16.6-55.9 26-92.6 26-71 0-131.2-47.9-152.8-112.3H28.9v70.1c46.2 91.9 140.3 149.9 243.2 149.9z" fill="#34a853"></path>
        //                                         <path d="M119.3 324.3c-11.4-33.8-11.4-70.4 0-104.2V150H28.9c-38.6 76.9-38.6 167.5 0 244.4l90.4-70.1z" fill="#fbbc04"></path>
        //                                         <path d="M272.1 107.7c38.8-.6 76.3 14 104.4 40.8l77.7-77.7C405 24.6 339.7-.8 272.1 0 169.2 0 75.1 58 28.9 150l90.4 70.1c21.5-64.5 81.8-112.4 152.8-112.4z" fill="#ea4335"></path>
        //                                     </svg>
        //                                 </svg>
        //                             </div>
        //                             <span className="ml-4">
        //                                 Sign up with Google
        //                             </span>
        //                         </button>
        //                     </div>

        //                     <div className="my-12 border-b text-center">
        //                         <div className="leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform translate-y-1/2">
        //                             Or sign up In with Cartesian E-mail
        //                         </div>
        //                     </div>

        //                     <div className="">



        //                         <input type="text" id='name' placeholder="Your Name" {...register("name", { required: "This field is required" })} className=" w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white " />
        //                         <p className="text-red-600">{errors.name?.message}</p>






        //                         <input type="email" id='email' placeholder="Your Email" {...register("email", { required: "This field is required" })} className=" w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5 " />
        //                         <p className="text-red-600">{errors.email?.message}</p>






        //                         <input id='password' type={passwordShow ? 'text' : 'password'} {...register("password", { required: "This field is required", minLength: { value: 6, message: 'Password should be up to 6 character' }, maxLength: { value: 10, message: 'Password should under the 10 character' } })} placeholder=" Password" className=" w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5   " />
                                
        //                         <p className="text-red-600">{errors.password?.message}</p>


        //                         <button
        //                             className="mt-5 tracking-wide font-semibold bg-red-400 text-white-500 w-full py-4 rounded-lg hover:bg-red-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">
        //                             <svg className="w-6 h-6 -ml-2" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        //                                 {/* Sign In Icon */}
        //                             </svg>
        //                             <span className="ml-">
        //                                 Sign Up
        //                             </span>
        //                         </button>
        //                         <p className="mt-6 text-xs text-gray-600 text-center">
        //                            You Have All ready account?
                                   
        //                             <span className="border-b border-gray-500 border-dotted">
        //                             Please <Link className="text-red-600" href='/login'>Login</Link>
        //                             </span>
                                    
        //                         </p>
        //                     </div>
        //                 </div>
        //             </form>
        //         </div>

        //     </div>
        // </div>
    );
};

export default SignUpForm;