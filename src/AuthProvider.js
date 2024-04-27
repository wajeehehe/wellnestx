import React, { createContext, useState, useEffect } from 'react';
import { auth } from './firebase';
import AuthContext from './AuthContext';
import { signInWithEmailAndPassword } from 'firebase/auth';


const AuthProvider = ({ children }) => {
    const [user, setUser] = useState("null");

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((currentUser) => {
            setUser(currentUser);
        });

        return unsubscribe;
    }, []);

    const login = async (email, password) => {
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            setUser(userCredential.user);
            return Promise.resolve();
        } catch (error) {
            console.error(error)
            return Promise.reject(error);

            // Handle login errors (display error messages, etc.)   
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

    return (
        <AuthContext.Provider value={{ user, setUser, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;