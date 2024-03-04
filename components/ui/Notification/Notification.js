'use client'
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { RxCross2 } from "react-icons/rx";
import { AnimatePresence, motion } from "framer-motion";
import { IoIosNotifications } from "react-icons/io";
import NotificatonCard from "./NotificatonCard";

const Notification = () => {
    const [notifications, setNotifications] = useState([])
    const [hidden, setHidden] = useState(true)



    // get all serch video
    useEffect(() => {
        axios.get(`https://vibewabe-server.vercel.app/notification?limit=5`)
            .then(data => {
                setNotifications(data.data)
            })
            .catch(err => { })
    }, [])



    // Hide serch dropdown by outside click
    const searchDropdownRef = useRef(null);
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (searchDropdownRef.current && !searchDropdownRef.current.contains(event.target)) {
                setHidden(true);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);





    return (
        <div className="relative">

            <div className="text-center relative z-20">

                <div onClick={() => setHidden(!hidden)} className="cursor-pointer">
                    <IoIosNotifications className="text-gray-100 text-2xl" />
                </div>



                <AnimatePresence>

                    <div ref={searchDropdownRef} className="relative">

                        <div className={`bg-[#0b101b]  absolute top-5  -right-6 text-white ${hidden ? 'hidden' : ''} w-[200px] md:w-[220px]  lg:w-[270px] pt-5 rounded shadow-lg  shadow-[#c0c0c04f]`}>
                            
                                <RxCross2 onClick={() => setHidden(true)} className="text-[#f05c1b] shadow shadow-gray-400   text-lg md:text-2xl font-bold absolute top-3 right-2 cursor-pointer" />

                                {
                                    notifications?.map(notification => <NotificatonCard key={notification._id} notification={notification}/>)
                                }
                            

                        </div>
                    </div>

                </AnimatePresence>
            </div>

        </div>


    );

};

export default Notification;