//import React from 'react';
//import ReactDOM from 'react-dom/client';
//import './index.css';
//import App from './App';
//import reportWebVitals from './reportWebVitals';

//const root = ReactDOM.createRoot(document.getElementById('root'));
//root.render(
//  <React.StrictMode>
//    <App />
//  </React.StrictMode>
//);
//ReactDOM.render(<App />, document.getElementById("root"));
//ReactDOM.render(<h1>hello world</h1>, document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();





//var React = require("react");
//var ReactDOM = require("react-dom");
//ReactDOM.render(<h1>hello nandha</h1>,document.getElementById("root"));

//import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';
//import './components/Page_style/index.css'; 
import App from './components/App';
//const name = "kavya";
//const num =7;

const root = createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <div className='index'>
    <App />
    </div>
  </StrictMode>
);



//const root = createRoot(document.getElementById('root'));

//function App() {
  //  return <h1>Hello, World!</h1>;
//}

//root.render(<App />);