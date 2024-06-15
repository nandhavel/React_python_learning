import React from "react";

function Register() {
    return (
        <form className="register-form">
        <input className="register-input" type="text" placeholder="name" />
        <input className="register-input" type="text" placeholder="username" />
        <input className="register-input" type="password" placeholder="Password" />
        <input className="register-input" type="password" placeholder="Confirm password" />
        <button className="register-submit-button" type="submit">Register</button>
        </form>
    );
}

export default Register;