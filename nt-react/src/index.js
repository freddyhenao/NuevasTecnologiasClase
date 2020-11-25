import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';
import FirstComponent from './FirstComponent';
//console.log("hello word")
const divRoot = document.querySelector("#root");
// ReactDOM.render(<FirstComponent x='Fahl' y='bebida' z='comida' edad=35></FirstComponent>,divRoot);

// en el caso de que se necesiten eviar muchas variables se puede crear un dato tipo json para enviarlas 
const data = {
    x:'Fahl',
    y:'bebida',
    z:'comida',
    edad: '35',
    islive: true
}
ReactDOM.render(<FirstComponent datos={data}></FirstComponent>,divRoot);


//const divRoot = document.querySelector('#root');    // caracter # lo que hace es buscar el id con el nombre en este caso root en el html
// ReactDOM.render(saludo, divRoot);    // comado para mostrar en pantalla 
// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// ReactDOM.render(
//   <React.StrictMode> 
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
