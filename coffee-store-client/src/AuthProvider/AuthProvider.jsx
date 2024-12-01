import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../Firebase/firebase.config';
import Swal from 'sweetalert2';

export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);


    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
        .then((result)=>{
            setUser(result?.user)
            setLoading(false)
            return result;
        })
        .catch((error)=>{
            setLoading(false)
            throw error
        })
    }
    const signInUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
        .then((result)=>{
            setUser(result?.user)
            setLoading(false)
            return result;
        })
        .catch((error)=>{
            setLoading(false)
            throw error
        })
    }
    const signOutUser = () => {
        setLoading(true)
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes!"
        })
        .then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: "Log Out!",
                    text: "You're log out successfully!'.",
                    icon: "success"
                })
                return signOut(auth)
            }
        })
    }
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
            setUser(currentUser);
            setLoading(false)
        })
        return ()=>{
            unsubscribe();
        }
    },[])

    if(loading){
        return <div>Loading.....</div>
    }
    const authInfo = {
        user,
        setUser,
        setLoading,
        createUser,
        signInUser,
        signOutUser,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;