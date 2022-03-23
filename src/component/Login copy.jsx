import { Button } from "@material-ui/core";
import { TextField } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = ({history}) => {
    axios
    .post("http://localhost:5000/login", {email, username, password})
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
        label="Mot de passe"
        variant="outlined"
        type={"password"}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        />
        <Button variant="contained" onClick={() => handleSubmit()}>
            Envoyer
        </Button>
        {error}
      </div>
    </div>
  );
}

export default Login;
