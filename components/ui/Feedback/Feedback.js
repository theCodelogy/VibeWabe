"use client";
//email js import
import React, { useContext, useRef } from 'react';
import emailjs from '@emailjs/browser';

import { FaLocationDot } from "react-icons/fa6";
import { CgMail } from "react-icons/cg";
import { MdOutlinePhoneForwarded } from "react-icons/md";
import Image from "next/image";
// import imageOne from '@/assets/Feedback/KCMawX.jpg'
import imageOne from '@/assets/Feedback/132773-abstract-pink-and-purple-lines-stripes-and-shapes-background-vector-illustration (1).jpg'
import toast from 'react-hot-toast';
import { authContext } from '@/utils/AuthProvider';

//service_a03ps4h

const Feedback = () => {
  //email js code
  const form = useRef();
  const { user } = useContext(authContext)

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_a03ps4h', 'template_r30xnb6', form.current, {
        publicKey: 'oDgjTBJl7Cjv3uYju',
      })
      .then(
        () => {
          console.log('SUCCESS!');

          toast('Message send successfully')
        },
        (error) => {
          console.log('FAILED...', error.text);
          toast(error.text)
        },
      );
  };




  return (

    <div className="">
      <div className="">
        <div className="relative">
          <div className="lg:h-[920px] h-[950px]">
            <Image
              className="object-cover object-center w-full h-full"
              src={imageOne}
              alt=''
            />
            <div className="absolute inset-0 flex flex-col items-start justify-center">
              <section className="bg-black bg-opacity-50 container mx-auto">
                <div>
                  <h1 className="text-center lg:text-3xl md:text-2xl text-xl font-bold text-white mt-20">FEEL FREE TO <br /> FEEDBACK & CONTACT</h1>
                  <div className="flex justify-center mt-5">
                    <div className="border-b-4 w-10 border-white"></div>
                    <div className="border-b-4 w-10 border-red-500"></div>
                    <div className="border-b-4 w-10 border-white"></div>
                  </div>
                </div>
                <div className="relative items-center w-full px-5 mx-auto md:px-12 lg:px-16 max-w-7xl lg:pt-20 pt-5">
                  <div className="flex w-full mx-auto text-left">
                    <div className="relative inline-flex items-center mx-auto align-middle">
                      <div className="flex justify-between lg:flex-row flex-col gap-6 text-white">
                        <div>
                          <div className="px-5 pt-3">
                            <h1 className="lg:text-2xl md:text-xl text-lg font-bold mb-4 lg:text-start text-center">Contact with us</h1>
                            <div className="border-b-2 w-28 border-white lg:m-0 m-auto"></div>
                            <p className="lg:text-start text-center  w-auto lg:text-lg md:text-base text-sm font-semibold text-zinc-300 py-8">We are currently avaliable to take on your precious feedback, So feel free to send us a message about anything that you want to run past us. We’d love to Feedback from you.</p>
                            <div className=" w-full m-auto">
                              <p className="lg:justify-start justify-center lg:text-xl md:text-base text-sm font-semibold pb-2 flex gap-3"><MdOutlinePhoneForwarded /> <span className="text-zinc-400 text-md">+01316813069</span></p>
                              <h3 className="lg:justify-start justify-center lg:text-xl md:text-base text-sm font-semibold pb-2 flex gap-3"><CgMail /><span className="text-md text-zinc-400">dev.eva.2006@gmail.com</span></h3>
                              <h3 className="lg:justify-start justify-center lg:text-xl md:text-base text-sm font-semibold flex gap-3"><FaLocationDot /><span className="text-md text-zinc-400">Dhaka , Bangladesh</span></h3>
                            </div>
                          </div>
                        </div>
                        <div className="lg:w-6/12 pb-20">
                          <div>
                            <form ref={form} onSubmit={sendEmail}>
                              <h1 className="lg:text-2xl text-xl font-bold text-center">Send us a message</h1>
                              <div className="border-b-2 w-28 border-white my-5 m-auto "></div>
                              <div className="flex justify-center items-center flex-col">
                                <div className="flex gap-5 lg:flex-row md:flex-row flex-col justify-center mt-6">
                                  <div className="form-control">
                                    <label className="">
                                      <input type="text" name="user_name" placeholder="Enter Your Name" className="input lg:w-72 w-auto rounded-none text-black" required />
                                    </label>
                                  </div>
                                  <div className="form-control">
                                    <label className="">
                                      <input type="email" name="user_email" placeholder="Enter Your Email" className="input lg:w-72 w-auto rounded-none text-black" required />
                                    </label>
                                  </div>
                                </div>
                                <div className="form-control">
                                  <label className="mt-9">
                                    <textarea name="message" id="" cols="25" rows="3" placeholder="Give us a Feedback" className="p-5 lg:pr-80 md:pr-10 text-black"></textarea>
                                  </label>
                                </div>
                                <div className=" pb-5">
                                  <input type="submit" value="Send Message" className="text-white bg-gradient-to-r from-red-600 to-zinc-300  border-0 py-2 px-6 focus:outline-none hover:from-zinc-300 hover:to-red-600 font-semibold duration-300 transition rounded text-md mt-8" />
                                </div>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
};

export default Feedback;