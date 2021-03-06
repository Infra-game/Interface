import axios from './axiosConfig';
import React, { useEffect, useState } from 'react';
import { Route, Redirect } from "react-router-dom";
import Dashboard from './pages/Dashboard';

const ProtectedRoute = ({component: Component, pageName,...rest}) => {
    const [auth, setAuth] = useState("");
    const [user, setUser] = useState({});
    const [error, setError] = useState("");

    const isAuth = async () => {
        const res = await axios
        .get("/isAuth", {headers: {
        authorization : localStorage.getItem("token")
        }})
        if(res.data.error) {
            setError(res.data.message); //emettre une erreur recup par le try catch , la fonctionne que avec une erreur 200 
        } else {
            setUser(res.data.user);
        }
        setAuth(res.data.auth);
        console.log(res.data.user);
    }

    useEffect(() => {
        //setAuth(true);
        isAuth();
    }, [])

    if(auth==="") { // ne pas comparé avec du vide if(auth)
        return <div>{error}</div>;
    } else {
        return (
            <Route {...rest} render={(props) => {
                if(auth===true) {
                    return <Dashboard user={user} Page={Component} pageName={pageName} {...props} {...rest}/>
                } else {
                    return (
                        <Redirect to={{pathname: "/login"}} />
                    )
                }
            }}/>
        );
    }
};

export default ProtectedRoute;
