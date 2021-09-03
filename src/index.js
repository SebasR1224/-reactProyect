import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Header from './Header';
import ComponentePrueba from './ComponentePrueba';

ReactDOM.render(
    <Header />,
    document.getElementById('header')
);

ReactDOM.render(
    <ComponentePrueba 
    nombre="maria"
    edad="12"
    genero = "F"

     />,
    document.getElementById('root')
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
