import React, { useState } from "react";
import axios from "../axiosConfig";
import { Redirect } from "react-router";

const LoginControl = ({changePage}) => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isAuth, setIsAuth] = useState(false);

  const handleSubmit = () => {
    axios
    .post("/login", {email, username, password})
    .then((res) => {
        if(!res.data.error) {
          localStorage.setItem("token", res.data.accessToken);
          setIsAuth(true);
        } else {
          setError(res.data.message);
        }
    })
  };

  if(isAuth) {
    return <Redirect to={{pathname:"/"}}/>;
  } else {
    return (
        <div className="main_box--main--login">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="form-control"
            placeholder="Email"
            autoComplete="false"
          />
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="form-control"
            placeholder="Nom d'utilisateur"
            autoComplete="false"
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="form-control"
            placeholder="Mot de passe"
          />
          <button className="btn btn-success" onClick={() => handleSubmit()}>
            Connexion
          </button>
          <p
            onClick={() => changePage()}
            style={{
              textAlign: "center",
              color: "#262626",
              marginTop: "-5px",
              cursor: "pointer"
            }}
          >
            Pas de compte ?
          </p>
          <p>{error}</p>
        </div>
    );
  }
}

export default LoginControl;