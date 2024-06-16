import React, { useState } from "react";
import './Page_style/index.css';



function Register() {
    const [isMouseover, setMouseover] = useState(false);
    const [isnameFocused, setIsnameFocused] = useState(false);
    const [ispassFocussed, setIspassFocussed] = useState(false);
    const [isconfimrpassFocussed, setIsconfirmpassFocussed] = useState(false);
    const [isusernameFocussed, setIsusernameFocussed] = useState(false);

    function handleMouseover() {
        setMouseover(true);
        //console.log("mouseover");
    }
    function handleMouseout() {
        setMouseover(false);
    }
    function namehandleFocus() {
        setIsnameFocused(true);
    }
    function namehandleBlur() {
        setIsnameFocused(false);
    }
    function password_handleBlur() {
        setIspassFocussed(false);

    }
    function password_handleFocus() {
        setIspassFocussed(true);
    }
    function confirm_password_handleBlur() {
        setIsconfirmpassFocussed(false);

    }
    function confirm_password_handleFocus() {
        setIsconfirmpassFocussed(true);
    }
    function username_handleFocus() {
        setIsusernameFocussed(true)
    }
    function username_handleBlur() {
        setIsusernameFocussed(false)
    }
    return (
        <form className="register-form">
            <h1>Registration Form</h1>
        <input className="register-input" type="text" 
        style={{ padding: isnameFocused? "10px" : "5px" }}
        onFocus={namehandleFocus}
        onBlur={namehandleBlur}
        placeholder="name" />

        <input className="register-input" type="text" 
        
        style={{ padding: isusernameFocussed? "10px" : "5px" ,
            transition: "padding 0.3s ease-in-ut" }}
            onFocus={username_handleFocus}
            onBlur={username_handleBlur}
        
        
        placeholder="username" />

        <input className="register-input" type="password" 
        style={{ padding: ispassFocussed? "10px" : "5px" ,
            transition: "padding 0.3s ease-in-ut" }}
            onFocus={password_handleFocus}
            onBlur={password_handleBlur}
        placeholder="Password" />

        <input className="register-input" type="password" 
        style={{ padding: isconfimrpassFocussed ? "10px" : "5px" ,
            transition: "padding 0.3s ease-in-ut" }}
            onFocus={confirm_password_handleFocus}
            onBlur={confirm_password_handleBlur}
                
        placeholder="Confirm password" />
        <button className="register-submit-button" 
        style={{ backgroundColor: isMouseover? "black" : "green", 
            transition: "padding 0.3s ease-in-out" }} 
        onMouseOver={handleMouseover}
        onMouseOut={handleMouseout}
        type="submit">Register</button>
        </form>
    );
}

export default Register;