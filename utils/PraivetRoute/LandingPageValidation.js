'use client'
import { authContext } from '@/utils/AuthProvider';
import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useQuery } from '@tanstack/react-query';

const LandingPageValidation = ({ children }) => {
    const router = useRouter();
    const { user, isLoading } = useContext(authContext);
    const [dbUser, setdbUser] = useState('')

    const { data, refetch } = useQuery({
        queryKey: [],
        queryFn: async () => {
            const res = await axios.get(`https://vibewabe-server.vercel.app/user/${user?.email}`)
            return res.data;
        }
    })

    useEffect(() => {
        refetch()
        setdbUser(data)
    }, [user,data])


    if(isLoading ){
        return 'Loading...'
    }
    if(!user?.email){
        return children
    }else if(dbUser === '' ){
        return 'Loading...'
    }

    if(dbUser?.admin === true || dbUser?.role === 'subscriber'){
        return children
    }else if(dbUser?.role === 'freeTrail' || dbUser?.role === 'premium' ){
        router.replace('/video'); 
        return null;

    }

};

export default LandingPageValidation;