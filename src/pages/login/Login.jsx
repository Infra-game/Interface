import React, { useState } from "react";
import LoginControl from "../../component/Login/LoginControle";
import Navbar from "../../component/Login/NavBar";
import Signup from "../../component/Login/SignUp";
import "./Login.css";

/**
 * definition of the Login constancy
filling in the possible choices 
 * @returns { Promise }
 */
const Login = () => {
  const [page, setPage] = useState("login");

  return (
    <div className="auth mt-5">
      <Navbar />
      {page==="login" ? (
        <LoginControl changePage={() => setPage("register")}/>
      ) : (
        <Signup changePage={() => setPage("login")}/>
      )}
    </div>
  );
}

export default Login;
