import React, { useState } from "react";
import './Page_style/index.css';


//import "../../index.css";
//import Input from "./input";
function Login() {
    const [headingText, setHeadingText] = useState("Login");
    const [isMouseover, setMouseover] = useState(false);
    const [isFocused, setIsFocused] = useState(false);
    const [ispassFocussed, setIspassFocussed] = useState(false);
    //const [isMouseout, setMouseout] = useState("");

    function handleClick() {
        setHeadingText("Hello");    
    }
    function handleMouseover() {
        setMouseover(true);
        //console.log("mouseover");
    }
    function handleMouseout() {
        setMouseover(false);
    }
    function handleFocus() {
        setIsFocused(true);
    }
    function handleBlur() {
        setIsFocused(false);
    }
    function password_handleBlur() {
        setIspassFocussed(false);

    }
    function password_handleFocus() {
        setIspassFocussed(true);
    }
    return (
        <form className="login-form">
            <h1>{headingText}</h1>
            <input className="login-input" type="text" 
            style={{ padding: isFocused? "10px" : "5px" }}
            onFocus={handleFocus}
            onBlur={handleBlur}
            placeholder="Username" />
            
            <input className="login-input" type="password" 
            style={{ padding: ispassFocussed? "10px" : "5px" ,
            transition: "padding 0.3s ease-in-ut" }}
            onFocus={password_handleFocus}
            onBlur={password_handleBlur}
            placeholder="Password" />
            <button 
                className="login-button" type="submit" 
                style={{ backgroundColor: isMouseover? "black" : "green", 
                    transition: "padding 0.3s ease-in-out" }} 
                onClick={handleClick}
                onMouseOver={handleMouseover}
                onMouseOut={handleMouseout}
                >
                Login
                </button>
        </form>
    );
}

export default Login;