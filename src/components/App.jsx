import React from "react";
import Login from "./Login";
import Register from "./Register";
import './Page_style/index.css';

//import Firstcomponent from "./First";
//import List from "./list";

var isregistered = false;

function App() {
    return <div className="main_app"> {
           isregistered ? <Login /> : <Register />
    } </div>;

    
}
export default App;
