import axios from '../../axiosConfig';
import React, {  useState } from 'react'

const Signup = ({changePage}) => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [error, setError] = useState("");

  const checkErrors = () => {
    let response = true;
    if(!email) {
      response = "Un email doit être défini.";
    } else if(!username) {
      response = "Un nom d'utilisateur doit être défini."
    } else if(!password) {
      response = "Un mot de passe doit être défini."
    } else if(!password===passwordConfirm) {
      response = "Les mots de passe doivent correspondre.";
    }

    return response;
  }

  const handleSubmit = () => {
    if(checkErrors()===true) {
      axios
      .post("http://localhost:5000/register", {
        email,
        username,
        password,
        role : "user"
      })
      .then((res) => {
        if(!res.data.error) {
          changePage();
        } else {
          setError(res.data.message)
        }
      })
    } else {
      console.log(checkErrors());
    }
  }

  return (
    <div className="main_box--main--signUp">
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
        <input
          type="password"
          value={passwordConfirm}
          onChange={(e) => setPasswordConfirm(e.target.value)}
          className="form-control"
          placeholder="Mot de passe"
        />
      <button className="btn btn-success" onClick={() => handleSubmit()}>SIGN UP</button>
      <p
        onClick={() => changePage()}
        style={{
          textAlign: "center",
          color: "#262626",
          marginTop: "-5px",
          cursor: "pointer"
        }}
      >
            Se connecter
          </p>
      <p>{error}</p>
    </div>  
  )
}

export default Signup;