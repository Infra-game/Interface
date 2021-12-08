import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Route, Redirect } from "react-router-dom";

const ProtectedRoute = ({component: Component , type ,...rest}) => {
    const [auth, setAuth] = useState("");
    const [error, setError] = useState("");

    const isAuth = async () => {
        const res = await axios
        .get("http://localhost:5000/is"+type, {headers: {
        authorization : localStorage.getItem("token")
        }})
        if(!res.data.auth) {
            setError(res.data.message);
        } else {
            setAuth(res.data.auth);
        }
    }

    useEffect(() => {
        isAuth();
    }, [])

    if(auth==="") {
        return <div>{error}</div>;
    } else {
        return (
            <Route {...rest} render={(props) => {
                if(auth===true) {
                    return <Component {...props}/>
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