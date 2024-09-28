import React, { createContext, useEffect, useState } from 'react';
import { 
    createUserWithEmailAndPassword, 
    getAuth, 
    onAuthStateChanged, 
    signInWithEmailAndPassword, 
    signInWithPopup, 
    signOut, 
    updateProfile 
} from "firebase/auth";
import app from '../Firebase/firebase.config';
import { GoogleAuthProvider } from "firebase/auth";

export const AuthContext = createContext();
const auth = getAuth(app); // Ensure `app` is properly initialized
const Googleprovider = new GoogleAuthProvider();

const Auth = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // Create an account
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password); // Ensure `auth` is passed
    };

    // Signup with Gmail
    const signupWithGmail = () => {
        setLoading(true);
        return signInWithPopup(auth, Googleprovider);
    };

    // Password login
    const login = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };

    // Logout
    const logout = () => {
        setLoading(true);
        return signOut(auth);
    };

    // Updating the profile
    const updateUserProfile = (name, photourl) => {
        // setLoading(true);
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photourl
        });
    };

    // Check if user is signed in
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        });

        return () => {
            unsubscribe();
        };
    }, []);

    const authInfo = {
        user,
        createUser,
        signupWithGmail,
        login,
        logout,
        updateUserProfile,
        loading,
    };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default Auth;
