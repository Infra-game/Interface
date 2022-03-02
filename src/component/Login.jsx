import { Button } from "@material-ui/core";
import { TextField } from "@mui/material";
import axios from "../axiosConfig";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const Login = ({changeType}) => {
  let history = useHistory();
  const [auth, setAuth] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = ({}) => {
    axios
    .post("/login", {auth, password})
    .then((res) => {
        if(!res.data.error) {
          localStorage.setItem("token", res.data.accessToken);
          history.push("/");
        } else {
          setError(res.data.message);
        }
    })
  };

  return (
    <div className="login">
      <h1>LobbyWan</h1>
      <div className="form">
        <h2>Se connecter</h2>
        <TextField
        label="Email ou Nom d'utilisateur"
        variant="outlined"
        value={auth}
        onChange={(e) => setAuth(e.target.value)}
        />
        <TextField
        label="Mot de passe"
        variant="outlined"
        type={"password"}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        />
        <Button variant="contained" onClick={() => handleSubmit()}>
            Se connecter
        </Button>
        <button className="changeType" onClick={() => changeType()}>Pas encore inscrit ? Cliquez-ici !</button>
        {error}
      </div>
    </div>
  );
}

export default Login;
