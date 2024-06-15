import React from "react";
import './Page_style/index.css';
//import "../../index.css";
//import Input from "./input";
function Login() {
    return (
        <form className="login-form">
            <input className="login-input" type="text" placeholder="Username" />
            <input className="login-input" type="password" placeholder="Password" />
            <button className="login-button" type="submit">Login</button>
        </form>
    );
}

export default Login;