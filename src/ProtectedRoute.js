import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Route, Redirect } from "react-router-dom";

const ProtectedRoute = ({component: Component ,...rest}) => {
    const [auth, setAuth] = useState("");
    const [role, setRole] = useState("");
    const [error, setError] = useState("");

    const isAuth = async () => {
        const res = await axios //renommer ,englober l'ensemble dans un try, catch et enlever les if else , mettre le tout en async 
        .get("http://localhost:5000/isAuth", {headers: { // mettre l'uri dans .env  http://localhost:5000  laissé le /isAuth
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
        isAuth();
    }, [])

    if(auth==="") { // ne pas comparé avec du vide if(auth)
        return <div>{error}</div>;
    } else {
        return (
            <Route {...rest} render={(props) => {
                if(auth===true) { // if (!auth)
                    return <Component userRole={role} {...props}/>
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