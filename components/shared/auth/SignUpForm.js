"use client"
import React, { useContext } from 'react';
import { useForm } from "react-hook-form"
import { FcGoogle } from "react-icons/fc";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { useState } from "react";
import Link from 'next/link';
import { authContext } from '@/utils/AuthProvider';
import toast from "react-hot-toast";


const SignUpForm = () => {
    const {createUseWithEmail,signIngWithGoogle}= useContext(authContext)
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm()

    const [passwordShow, setPasswordShow] = useState(false)

    // Signup with email and password
    const handle = (data) => {
        createUseWithEmail(data.email,data.password)
        .then(res=>{
            toast.success('Successfully Signup!')
            reset()
        })
        .catch()

    }

    // signup with google
    const gogleLoginHandle=()=>{
        signIngWithGoogle()
        .then((res)=>{
            toast.success('Successfully Signup!')
        })
        .catch()
    }
    return (
        <div>
            <form onSubmit={handleSubmit((data) => handle(data))} className=" px-6 pt-4 pb-6 text-sm ">
                <h1 className="text-4xl text-red-500 pt-3 font-bold text-center mb-4">Sign Up</h1>
                <div className="flex flex-col gap-1 mb-2">
                    <label className="text-md font-medium" for='name'>
                        Name<span className='text-red-500'>*</span>
                    </label>
                    <input type="text" id='name' placeholder="Your Name" {...register("name", { required: "This field is required" })} className=" py-[13px] px-3 border drop-shadow bg-[#101726] text-white " />
                    <p className="text-red-700">{errors.name?.message}</p>
                </div>


                <div className="flex flex-col gap-1 mb-2">
                    <label className="text-md font-medium" for='email'>
                        Email<span className='text-red-500'>*</span>
                    </label>
                    <input type="email" id='email' placeholder="Your Email" {...register("email", { required: "This field is required" })} className=" py-[13px] px-3 border drop-shadow bg-[#101726] text-white " />
                    <p className="text-red-700">{errors.email?.message}</p>
                </div>

                <div className="flex flex-col gap-1 mb-3 relative">
                    <label className="text-md font-medium" for='password'>
                        Password<span className='text-red-500'>*</span>
                    </label>
                    <input id='password' type={passwordShow ? 'text' : 'password'} {...register("password", { required: "This field is required", minLength: { value: 6, message: 'Password should be up to 6 character' }, maxLength: { value: 10, message: 'Password should under the 10 character' } })} placeholder=" Password" className=" bg-[#101726] text-white py-[13px] px-3 border drop-shadow   " />
                    <span className="text-xl text-red-500 absolute right-3 top-10" onClick={() => setPasswordShow(!passwordShow)}>
                        {
                            passwordShow ? <AiFillEye></AiFillEye> : <AiFillEyeInvisible></AiFillEyeInvisible>
                        }
                    </span>
                    <p className="text-red-700">{errors.password?.message}</p>
                </div>
                <div className=" mt-6">
                    <button type="submit" className="bg-[#6D28D9 bg-red-600 font-mdeium text-lg drop-shadow-md text-white transition-all hover:scale-95 ease-in-out duration-200 py-[10px] px-8 w-full rounded flex items-center justify-center">SUBMIT</button>
                </div>
                <div onClick={gogleLoginHandle} className="text-center border-t border-slate-600 my-4 pt-3">
                    <FcGoogle className="text-3xl cursor-pointer mx-auto"></FcGoogle>
                </div>
                <div className="text-center font-medium text-slate-900 -mt-2">
                    <p>Already have account ? Please <Link className="text-red-500" href='/login'>Login</Link></p>
                </div>
            </form>
        </div>
    );
};

export default SignUpForm;