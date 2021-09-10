import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from './App';
import Footer from './Footer';
import Home from './Home';

ReactDOM.render(
    <App />,
    document.getElementById('header')
);

// ReactDOM.render(
//     <Home />,
//     document.getElementById('home')
// );


// ReactDOM.render(
//     <Footer />,
//     document.getElementById('footer')
// );




// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
