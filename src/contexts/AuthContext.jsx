import React,{useState} from 'react';

export const AuthContext = React.createContext();


export function AuthContextProvider({children}){
    const [isAuth,setAuth] = useState(false);
    let [token,setToken] = useState('')

    function handleAuth(){
        setAuth(true)
    }
    function logOut(){
        setAuth(false)
    }

    return (
        <AuthContext.Provider value={{isAuth,handleAuth,logOut,token,setToken}}>{children}</AuthContext.Provider>
    )
}