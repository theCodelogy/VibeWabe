'use client'
import { authContext } from '@/utils/AuthProvider';
import axios from 'axios';
import { useContext, useEffect, useState } from 'react';


const PrivateByUserRole = () => {
    const { user, isLoading } = useContext(authContext);
    const [dbUser, setDbUser] = useState('')
    useEffect(() => {
        axios.get(`https://vibewabe-server.vercel.app/user/${user?.email}`)
            .then(res => setDbUser(res.data))
    }, [user])

    return (
        <div>
            
        </div>
    );
};

export default PrivateByUserRole;