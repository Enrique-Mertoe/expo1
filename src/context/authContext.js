import React, {createContext, useState, useContext} from 'react';
import {getUserData} from "../services/userService";
import {supabase} from "../lib/supabase";

const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(false);


    const login = (user) => {
            setUser({...user});
        },
        logout = () => {
            setUser(false);
            supabase.auth.signOut().then();
        }
    return (
        <AuthContext.Provider value={{user, setUser, login, logout}}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
