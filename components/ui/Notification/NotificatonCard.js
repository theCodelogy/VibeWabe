import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { motion } from "framer-motion";
import { IoIosNotifications } from "react-icons/io";

const NotificatonCard = ({ notification }) => {
    console.log(notification);
    return (
        <div>
            <motion.div
                        initial={{ scaleY: 0 }}
                        animate={{
                            scaleY: 1,
                            transition: { duration: 0.3, ease: [0.12, 0, 0.39, 0] },
                        }}
                        exit={{
                            scaleY: 0,
                            transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] },
                        }}
                        tabIndex={0}

                    >
        <Link href={`/${notification?.singerName&&'music'||notification?.hero&&'video'}/${notification._id}`}>
            <div className='flex gap-3 py-2 items-start pb-1 px-3 border-b border-white cursor-pointer hover:bg-[#000000de] hover:text-gray-300 transition-all text-white'>

            <IoIosNotifications className="text-gray-100 text-3xl px-1 py-1 rounded-lg bg-[#ee561c]" />
                <div>
                    <h1 className='text-left text-[10px] md:text-sm  '>{notification?.title} has been released.</h1>
                    <h1 className='text-left text-[10px] md:text-xs my-[3px] '>Relis: {new Date(notification?.date).toLocaleDateString()} </h1>
                </div>
            </div>
        </Link>
        </motion.div>
        </div>
    );
};

export default NotificatonCard;