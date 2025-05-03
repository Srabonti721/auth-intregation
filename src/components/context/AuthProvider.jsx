import React, {  useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { auth } from '../../firebase.init';

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
    const [user,setUser]=useState(null);
    const [loader,setLoader]=useState(true);

    const createUser = (email, password) => {
        setLoader(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const signInUser = (email, password) => {
        setLoader(true);
        return signInWithEmailAndPassword(auth, email, password);
    }
    const signWithGoogle =()=>{
        setLoader(true);
        return signInWithPopup(auth,googleProvider)
    }
    const userSignOut =()=>{
        setLoader(true);
        return signOut(auth);
    }
    // react data obserb
    // onAuthStateChanged(auth, (createUser) => {
    //     if (createUser) {
    //         console.log('has current user', createUser);
    //     }
    //     else {
    //         console.log('current user', createUser);
    //     }
    // })

    useEffect (()=>{
        const unSubcribe = onAuthStateChanged(auth,createUser=>{
            console.log('on auth state change with useEffect',createUser);  
            setUser(createUser);     
            setLoader(false);    
        })
        return () =>{
            unSubcribe();
        }
    },[])
    
    const userInfo = {
        user,
        loader,
        createUser,
        signInUser,
        userSignOut,
        signWithGoogle,
    }
    return (
        <AuthContext value={userInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;