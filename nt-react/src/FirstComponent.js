import React from 'react';

const Firstcomponent = (props)=>{
    const {x, y ,z , edad, islive} = props.datos;
    console.log(props.datos.edad)    //comando para enviar objetos en consola 
    //const{x,y}= props;       // de esta manera se le llevan las variables a un objeto

    return <div>
        <h2>{JSON.stringify(props.datos)}</h2>
        <button>click</button>
    </div>
    
  // se muestra una variable que es dinamica que puede cambiar de acurdo con lo que se nacesita en la aplicacion
   
}
export default Firstcomponent;