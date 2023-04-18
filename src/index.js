import React from 'react';
import ReactDOM from 'react-dom/client';
//import './node_modules/bootstrap/dist/css/bootstrap.css';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

//creation of react-app: I created a Login Form component that contains:
//username, password and h3 that says: "Log In" with border, I styled it with
//CSS file. I also created a Navigation component that contains links styled like a navbar.
//links don't have to go to anywhere
//the Navigation component is at the top of the page and the Login Form is in the center of the page.