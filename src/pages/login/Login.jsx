import React, { useState } from "react";
import LoginControl from "../../component/Login/LoginControle";
import Navbar from "../../component/Login/NavBar";
import Signup from "../../component/Login/SignUp";
import "./Login.css";

const Login = () => {
  const [page, setPage] = useState("login");

  return (
    <div className="auth">
      <div className="container mt-5">
        <Navbar />
        {page==="login" ? (
          <LoginControl changePage={() => setPage("register")}/>
        ) : (
          <Signup changePage={() => setPage("login")}/>
        )}
      </div>
    </div>
  );
}

export default Login;
