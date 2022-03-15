import React, { Children, createContext, useReducer } from "react";
import { AuthReducer } from "./AuthReducer"; 

const api_url = "localhost:5000"
const state = {
    id:null,
    username:null,
    token:null
};

const AuthContext = createContext(state);

export const AuthProvider = ({children}) => {
    const [ auth_state, dispatch ] = useReducer(AuthReducer, state);

    const login = (email, password, csrf_token) => {
        fetch(`${api_url}/api/v1/auth/login`, {
            "method":"POST",
            "body":JSON.stringify({
                "email":email,
                "password":password,
                "csrf_token":csrf_token
            })
        }).then(res => res.json())
        .then(data => getUserData(data.refToken));
    }

    const getAccessToken = (token) => {
        fetch(`${api_url}/api/v1/auth/accToken`, {
            "method":"GET",
            "headers":{
                "authorization":token
            }
        }).then(res => res.json()).then(data => getUserData(data.accToken));
    }

    const getUserData = (token) => {
        fetch(`${api_url}/api/v1/auth/userInfo`, {
            "method":"POST",
            "body":JSON.stringify({
                "access_token":token
            })
        }).then(res => res.json()).then(data => dispatch({type:"login", payload:data}));
    }


    return (
        <AuthContext.Provider value={{auth:auth_state, login:login, getAccessToken:getAccessToken, getUserData:getUserData}}>
            {children}
        </AuthContext.Provider>
    )
}