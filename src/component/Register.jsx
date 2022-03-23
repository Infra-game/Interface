import { Button, TextField } from '@material-ui/core';
import React, { useState } from 'react';
import axios from "../axiosConfig";

/**
 * Register page 
 * @param { string } email
 * @param { string } username
 * @param { string } fullname
 * @param { string } password
 * @param { string } role
 * @returns { HTMLElement }
 */
const Register = ({changeType}) => {
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [fullname, setFullname] = useState("");
    const [password, setPassword] = useState("");
    const [confPassword, setConfPassword] = useState("");
    const [error, setError] = useState("");

    const hasErrors = () => {
        let error = false;
        if(!email.includes("@")) {
            error = "Veuillez entrer une adresse mail valide."
        } else if(password!==confPassword) {
            error = "Les mots de passe doivent être identiques."
        }

        return error;
    }

    const handleSubmit = ({history}) => {
        if(hasErrors()===false) {
            axios
            .post("/users/add", {email,username,fullname,password,role:"user"})
            .then((res) => {
                if(!res.data.error) {
                    history.push("/login");
                }
            })
        } else {
            setError(hasErrors());
        }
    }

    return (
        <div className='register'>
            <h1>LobbyWan</h1>
            <div className="form">
                <h2>S'inscrire</h2>
                <TextField
                label="Email"
                variant="outlined"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                />
                <TextField
                label="Username"
                variant="outlined"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                />
                <TextField
                label="Fullname"
                variant="outlined"
                value={fullname}
                onChange={(e) => setFullname(e.target.value)}
                />
                <TextField
                label="Mot de passe"
                variant="outlined"
                type={"password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                />
                <TextField
                label="Mot de passe"
                variant="outlined"
                type={"password"}
                value={confPassword}
                onChange={(e) => setConfPassword(e.target.value)}
                />
                <Button variant="contained" onClick={() => handleSubmit()}>
                    S'inscrire
                </Button>
                <button className='changeType' onClick={() => changeType()}>Déjà inscris ? Cliquez-ici pour vous connecter !</button>
                {error}
            </div>
        </div>
    );
};

export default Register;