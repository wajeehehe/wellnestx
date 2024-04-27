import React, { createContext, useState, useEffect } from 'react';

const AuthContext = createContext({
    user: null,
    setUser: (user) => { },
    login: (email, password) => { },
    logout: () => { },
});

export default AuthContext;