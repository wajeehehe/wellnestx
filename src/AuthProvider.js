import React, { createContext, useState, useEffect } from 'react';
import { auth, db } from './firebase';
import AuthContext from './AuthContext';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { collection, query, where, getDocs } from "firebase/firestore";


const AuthProvider = ({ children }) => {
    const [user, setUser] = useState('null');
    const [userData, setUserData] = useState({
        fullname: null,
        email: null
    });

    const userDoc = collection(db, "users")
    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((currentUser) => {
            setUser(currentUser);
        });

        return unsubscribe;
    }, []);

    const login = async (email, password) => {
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password)
            setUser(userCredential.user)
            getUserDatafromDB()
            return Promise.resolve()
        }
        catch (error) {
            console.error(error)
            return Promise.reject(error);
        }
    };

    const logout = async () => {
        try {
            await auth.signOut();
            setUser(null);
        } catch (error) {
            console.error(error);
            // Handle logout errors
        }
    };

    const getUserDatafromDB = async () => {
        const q = query(userDoc, where("email", "==", user.email));
        const querySnapshot = await getDocs(q);
        setUserData(querySnapshot.docs[0].data());
        //     if (userData != null)
        //         localStorage.setItem('userData', JSON.stringify(userData));
        // }
    }
    return (
        <AuthContext.Provider value={{ user, userData, setUser, setUserData, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;