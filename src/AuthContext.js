import React, { createContext, useState, useEffect } from 'react';

const AuthContext = createContext({
    user: null,
    userData: null,
    setUser: (user) => { },
    setUserData: (userData) => { },
    login: (email, password) => { },
    logout: () => { },
});

export default AuthContext;