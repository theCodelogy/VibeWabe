'use client'
import { useContext, useEffect, useRef, useState } from "react";
import axios from "axios";
import { RxCross2 } from "react-icons/rx";
import { AnimatePresence, motion } from "framer-motion";
import { IoIosNotifications } from "react-icons/io";
import NotificatonCard from "./NotificatonCard";
import { authContext } from "@/utils/AuthProvider";

const Notification = () => {
    const [notifications, setNotifications] = useState([])
    const [hidden, setHidden] = useState(true)
    const [nftCounterHide, setNftCounterHide] = useState(true)
    const [nftCount, setNftCount] = useState(0)
    const { user } = useContext(authContext)




    // get all serch video
    useEffect(() => {
        axios.get(`https://vibewabe-server.vercel.app/notification?totalDay=30`)
            .then(data => {
                setNotifications(data.data)
            })
            .catch(err => { })
    }, [])

    // Hide serch dropdown by outside click
    const notificationDropdownRef = useRef(null);
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (notificationDropdownRef.current && !notificationDropdownRef.current.contains(event.target)) {
                setHidden(true);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };


    }, []);


    useEffect(() => {
        const ntfView = notifications[0]?.view || [];
        const filterCurrentUser = ntfView.filter(single => single === user?.email)
        if (filterCurrentUser.length === 0) {
            setNftCounterHide(false)
            const previousNotification = notifications.find(item => item.view?.includes(user?.email))
            if (previousNotification) {
                setNftCount(notifications.findIndex(item => item._id === previousNotification._id))
            } else {
                setNftCount(notifications.length)
            }
        }
        else {
            setNftCounterHide(true)
        }
    }, [notifications, user])

    const notificationViewHandle = () => {
        const ntfView = notifications[0]?.view || [];
        const userEmail = user?.email
        const body = { view: [userEmail, ...ntfView] }
        if (ntfView.filter(single => single === user?.email).length === 0) {
            axios.patch(`https://vibewabe-server.vercel.app/notification/${notifications[0]?._id}`,body )
                .then(res => setNftCounterHide(true))
                .catch(err => console.log(err.message))
        }
    }



    return (
        <div className="relative">

            <div onClick={notificationViewHandle} className="text-center relative z-20">
                <div onClick={() => setHidden(!hidden)} className="cursor-pointer relative">
                    {
                        nftCounterHide ? ''
                            : <span className={`absolute -top-2 -right-[2px] text-white rounded-full bg-[#ed7d25] font-medium text-xs px-1 `}>
                                {
                                    nftCount
                                }
                            </span>
                    }

                    <IoIosNotifications className="text-gray-100 text-2xl" />
                </div>



                <AnimatePresence>

                    <div ref={notificationDropdownRef} className="relative">

                        <div className={`bg-[#0b101b]  absolute top-5  -right-6 text-white ${hidden ? 'hidden' : ''} w-[200px] md:w-[220px]  lg:w-[270px] pt-2 rounded shadow-lg  shadow-[#c0c0c04f] max-h-80 overflow-y-auto`}>
                            <div className="">
                                <RxCross2 onClick={() => setHidden(true)} className="text-white shadow shadow-gray-400  bg-[#ec501e] rounded-md  text-lg md:text-2xl font-bold  cursor-pointer  fixed right-32 md:right-[60px] lg:right-[85px]" />
                            </div>
                            <div className="bg-[#0b101b]   text-white">
                                {
                                    notifications?.map(notification => <NotificatonCard key={notification._id} notification={notification} />)
                                }
                            </div>
                        </div>
                    </div>

                </AnimatePresence>
            </div>

        </div>


    );

};

export default Notification;