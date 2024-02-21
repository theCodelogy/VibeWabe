'use client'
import { authContext } from '@/utils/AuthProvider';
import { useRouter } from 'next/navigation'; // Import from 'next/navigation'
import { useContext } from 'react';
// import Logo from '@/components/LogoAnimation/Logo';
// import useAuth from '@/hooks/useAuth';

const PrivateRoute = ({ children }) => {
  const router = useRouter();
  const { user, isLoading } = useContext(authContext);

  if (isLoading){
    return <p>Loading</p>
  
 
  }

  if (!user?.email) {
    // Redirect to /login with 'replace' behavior
    router.replace('/login'); // Use router.replace for "replace" behavior
    return null;
  }

  return children;
};

export default PrivateRoute;