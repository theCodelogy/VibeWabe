'use client'
import { authContext } from '@/utils/AuthProvider';
import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation'; 

const PrivateByUserRole = ({ children }) => {
    const router = useRouter();
    const { user, isLoading } = useContext(authContext);
    const [dbUser, setDbUser] = useState('')
    useEffect(() => {
        axios.get(`https://vibewabe-server.vercel.app/user/${user?.email}`)
            .then(res => setDbUser(res.data))
    }, [user])

    if (isLoading || dbUser === ''){
        return <p>Loading</p>    
      }


    if (dbUser?.role === 'freeTrail' || dbUser?.role === 'premium' || dbUser.admin === true) {
        return children
    }

    if (dbUser?.role === 'subscriber') {
        router.replace('/subscription'); 
        return null;
    }


};

export default PrivateByUserRole;