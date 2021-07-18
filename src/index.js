import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { App } from "./App";


//los componentes siempre van en mayuscula la primer letra
/*function Componente({titulo, children} props) {
const{titulo, conteido}=props;
return (
  <div>
    <h1>{titulo}</h1>
    <div>{children}</div>
  </div>
);
}*/

ReactDOM.render(
//<Componente titulo="hello everybody">hello from react.js</Componente>
<App/>, 
document.getElementById('root'));
