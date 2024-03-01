'use client'
import { authContext } from '@/utils/AuthProvider';
import axios from 'axios';
import { useContext, useEffect, useState } from 'react';

const UserValidation = ({ children }) => {
    const { user, isLoading } = useContext(authContext);
    const [dbUser, setDbUser] = useState('')
    useEffect(() => {
        axios.get(`https://vibewabe-server.vercel.app/user/${user?.email}`)
            .then(res => setDbUser(res.data))
    }, [user])




    // Subscription validation
    if (dbUser.role === 'premium' && dbUser.admin !== false) {
        const today = new Date()
        const takDate = new Date(dbUser?.subscriptionInfo.takeingTime)
        const defrance = (today - takDate) / (1000 * 60)
        if (dbUser?.subscriptionInfo.duration * 43200 < defrance) {
            axios.patch(`https://vibewabe-server.vercel.app/user/${user?.email}`, { role: 'subscriber', subscriptionInfo: '' })
                .then()
        }
    }
// free trail validation
    if (dbUser.role === 'freeTrail' && dbUser.admin !== false) {
        const today = new Date()
        const takDate = new Date(dbUser?.freeTrailInfo.takeingTime)
        const defrance = (today - takDate) / (1000 * 60)
        if (dbUser?.freeTrailInfo.duration < defrance) {
            axios.patch(`https://vibewabe-server.vercel.app/user/${dbUser?._id}`, { role: 'subscriber', freeTrailInfo: 'expair' })
                .then()
                .catch(err=>console.log(err.message))
        }
    }

    return children
};

export default UserValidation;