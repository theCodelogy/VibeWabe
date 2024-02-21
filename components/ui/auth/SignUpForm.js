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
                        if (res.data.insertedId) {
                            toast.success('Successfully SignUp!')
                            router.replace('/subscription')
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
                .then(()=>{
                    axios.get(`https://vibe-wabe-server.vercel.app/user/${res.user.email}`)
                    .then(res => {
                        if (res.data?.role === 'premium' || res.data?.role === 'freeTrail' || res.data.admin === true) {
                            router.replace('/video')
                        } else if (res.data?.role === 'subscriber') {
                            router.replace('/subscription')
                        } 
                    })
                    .catch()

                })
                    .catch()

            })
            .catch()
    }
    return (
        <div>
            <form onSubmit={handleSubmit((data) => handle(data))} className=" text-black px-6 pt-4 pb-6 text-sm ">
                <h1 className="text-4xl bg-gradient-to-r from-red-500 to-yellow-500 text-transparent bg-clip-text pt-3  text-center mb-4">Sign Up</h1>
                <div className="flex flex-col gap-1 mb-2">
                    <label className="text-md font-medium" for='name'>
                        Name<span className='text-[#ee533b]'>*</span>
                    </label>
                    <input type="text" id='name' placeholder="Your Name" {...register("name", { required: "This field is required" })} className=" rounded-md py-[13px] px-3 border drop-shadow bg-[#101726] text-white " />
                    <p className="text-[#ee533b]">{errors.name?.message}</p>
                </div>


                <div className="flex flex-col gap-1 mb-2">
                    <label className="text-md font-medium" for='email'>
                        Email<span className='text-[#ee533b]'>*</span>
                    </label>
                    <input type="email" id='email' placeholder="Your Email" {...register("email", { required: "This field is required" })} className="rounded-md py-[13px] px-3 border drop-shadow bg-[#101726] text-white " />
                    <p className="text-[#ee533b]">{errors.email?.message}</p>
                </div>

                <div className="flex flex-col gap-1 mb-3 relative">
                    <label className="text-md font-medium" for='password'>
                        Password<span className='text-[#ee533b]'>*</span>
                    </label>
                    <input id='password' type={passwordShow ? 'text' : 'password'} {...register("password", { required: "This field is required", minLength: { value: 6, message: 'Password should be up to 6 character' }, maxLength: { value: 10, message: 'Password should under the 10 character' } })} placeholder=" Password" className=" rounded-md bg-[#101726] text-white py-[13px] px-3 border drop-shadow   " />
                    <span className="text-xl text-[#ee533b] cursor-pointer absolute right-3 top-10" onClick={() => setPasswordShow(!passwordShow)}>
                        {
                            passwordShow ? <AiFillEye></AiFillEye> : <AiFillEyeInvisible></AiFillEyeInvisible>
                        }
                    </span>
                    <p className="text-[#ee533b]">{errors.password?.message}</p>
                </div>
                <div className=" mt-6">
                    <button type="submit" className="bg-gradient-to-r from-red-500 to-yellow-500  font-mdeium text-lg drop-shadow-md text-white transition-all hover:scale-95 ease-in-out duration-200 py-[10px] px-8 w-full rounded flex items-center justify-center">SUBMIT</button>
                </div>
                <div onClick={gogleLoginHandle} className="text-center border-t border-slate-600 my-4 pt-3">
                    <FcGoogle className="text-3xl cursor-pointer mx-auto"></FcGoogle>
                </div>
                <div className="text-center font-medium text-slate-900 -mt-2">
                    <p>Already have account ? Please <Link className="text-[#ee533b] font-bold" href='/login'>Login</Link></p>
                </div>
            </form>
        </div>
    );
};

export default SignUpForm;