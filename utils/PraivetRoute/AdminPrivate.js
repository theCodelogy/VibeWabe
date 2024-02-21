'use client'
import { authContext } from '@/utils/AuthProvider';
import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation'; 

const AdminPrivate = ({ children }) => {
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

    if ( dbUser.admin === true) {
        return children
    }else{
        router.replace('/'); 
        return null;
    }

    

};

export default AdminPrivate;