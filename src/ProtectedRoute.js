import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Route, Redirect } from "react-router-dom";

const ProtectedRoute = ({component: Component ,...rest}) => {
    const [auth, setAuth] = useState("");
    const [role, setRole] = useState("");
    const [error, setError] = useState("");

    const isAuth = async () => {
        const res = await axios
        .get("http://localhost:5000/isAuth", {headers: {
        authorization : localStorage.getItem("token")
        }})
        if(res.data.error) {
            setError(res.data.message);
            setAuth(false);
        } else {
            setRole(res.data.role);
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