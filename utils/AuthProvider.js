'use client'
import { createContext, useEffect, useState } from "react";
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import axios from "axios";
import { auth } from "./firebaseConfig";


export const authContext = createContext()
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState()
    const [isLoading, setIsLoading] = useState(true)


    // create user with email & password
    const createUseWithEmail = (email, password) => {
        setIsLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // login with email & password
    const signIn = (email, password) => {
        setIsLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    // signIn width google
    const googleProvider = new GoogleAuthProvider()
    const signIngWithGoogle = () => {
        setIsLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    // signIn width github
    const githubProvider = new GithubAuthProvider()
    const signInWithGithub = () => {
        setIsLoading(true)
        return signInWithPopup(auth, githubProvider)
    }

    // signOut
    const signout = () => {
        return signOut(auth)
    }


    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            setIsLoading(false)
            // const email = currentUser?.email
            // const data = { email }
            // if (currentUser) {
            //     axios.post('http://localhost:5000/api/v1/access', data, { withCredentials: true })
            //         .then(res => console.log(res.data))
            // } else {
            //     axios.post('http://localhost:5000/api/v1/logout', data, { withCredentials: true })
            //         .then(res => console.log(res.data))
            // }
        })
        return () => unSubscribe();
    }, [])

    const authInfo = {
        user,
        isLoading,
        createUseWithEmail,
        signIn,
        signIngWithGoogle,
        signInWithGithub,
        signout,

    }
    return (
        <authContext.Provider value={authInfo}>
            {children}
        </authContext.Provider>
    );
};

export default AuthProvider;