import axios from './axiosConfig';
import React, { useEffect, useState } from 'react';
import { Route, Redirect } from "react-router-dom";
import Dashboard from './pages/Dashboard';

const ProtectedRoute = ({component: Component, pageName,...rest}) => {
    const [auth, setAuth] = useState("");
    const [role, setRole] = useState("");
    const [error, setError] = useState("");

    const isAuth = async () => {
        const res = await axios
        .get("/isAuth", {headers: {
        authorization : localStorage.getItem("token")
        }})
        if(res.data.error) { 
            setError(res.data.message); //emettre une erreur recup par le try catch , la fonctionne que avec une erreur 200 
            setAuth(false);
        } else {
            setRole(res.data.role);
            setAuth(res.data.auth);
        }
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
                    return <Dashboard userRole={role} Page={Component} pageName={pageName} {...props} {...rest}/>
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
