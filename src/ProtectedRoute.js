import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Route, Redirect } from "react-router-dom";
import Loader from "react-loader-spinner";

const ProtectedRoute = ({component: Component ,...rest}) => {
    const [auth, setAuth] = useState("");

    const isAuth = async () => {
        const res = await axios
        .get("http://localhost:5000/isAuth", {headers: {
        "x-access-token" : localStorage.getItem("token")
        }})

        setAuth(res.data.auth);
    }

    useEffect(() => {
        isAuth();
    }, [])

    if(auth==="") {
        return null;
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