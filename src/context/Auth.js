import React, { createContext, useEffect, useState } from 'react'
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../Firebase/firebase.config';
import { GoogleAuthProvider } from "firebase/auth";

export const AuthContext = createContext();
const auth = getAuth(app);
const Googleprovider = new GoogleAuthProvider();

const Auth = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    //create an account
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(email, password)
    }

    //signup with gmail
    const signupWithGmail = () => {
        return signInWithPopup(auth, Googleprovider);
    }

    //password login
    const login = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    //loguot
    const logout = () => {
        return signOut(auth);
    }

    //updating the profile
    const updateUserProfile = (name, photourl) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photourl
        })
    }
    //check user signedin
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
                setUser(currentUser);
                setLoading(false);
                const uid = user.uid;
            } else {
            }
        });
        return () => {
            return unsubscribe();
        }
    }, [])


    const authInfo = {
        user,
        createUser,
        signupWithGmail,
        login,
        logout,
        updateUserProfile,
    }

    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    )
}

export default Auth
