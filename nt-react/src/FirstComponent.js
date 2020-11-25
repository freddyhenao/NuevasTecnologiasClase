//***************************************************************************** */
// comando para enviar objetos en consola  
// const{x,y}= props;       // de esta manera se le llevan las variables a un objeto
// se muestra una variable que es dinamica que puede cambiar de acurdo con lo que se nacesita en la aplicacion 
//:_______________________________________________________________________________

// import React from 'react';
// const Firstcomponent = (props)=>{
//     const {x, y ,z , edad, islive} = props.datos;
//     console.log(props.datos.edad);                       
                                                            
//      const saludo = ()=> {
//     console.log("hola a todos");
//     }                                        
//     return <div>
//        <h1>{JSON.stringify(props.datos)}</h1> 
//        <button onclick = {saludo} className="btn btn-dark">click</button>     
//     </div>;
                                                  
// }
// export default Firstcomponent;
//***************************************************************************** */
// Como realizar cambio de forma dinamica en una variable y mostrarla en pantalla 
//:_______________________________________________________________________________
// import React,{useState} from 'react';

// const Firstcomponent = (props)=>{
//    const {x, y ,z , edad, islive} = props.datos;
//    const [counter, setCounter] = useState(0);
//    const saludo = ()=> {
//             setCounter(counter + 1);
//     }                                        
//     return <div>
//        <h1>{counter}</h1> 
//        <button onClick = {saludo} className="btn btn-dark">click</button>
      
//     </div>;
//                                                     // se muestra una variable que es dinamica que puede cambiar de acurdo con lo que se nacesita en la aplicacion 
// }
// export default Firstcomponent;
//********************************************************************************* */
// Como renderizar un arreglo de datos 
// informacion se puede comsultar en la pantalla 
// https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/map 
// se esta usando tambien los Hook pagina de consula 
// https://reactjs.org/docs/hooks-state.html
//:_______________________________________________________________________________

import React,{useState} from 'react';
import FormComponent from './FormComponent'

const Firstcomponent = (props)=>{
   const {x, y ,z , edad, islive} = props.datos;
   const [counter, setCounter] = useState(0);
   const saludo = ()=> {
            setCounter(counter + 1);
   } 
   const numbers = [1, 2, 3, 4];
   return numbers.map((number)=>{
      return<li key={number}>
            <div>
               <h1>di: {number}</h1>
               <FormComponent></FormComponent>
               <h1>{counter}</h1>
               <button onClick={saludo} className="btn btn-dark">Click</button>
            </div>
      </li>
   });                                                              
}
export default Firstcomponent;
//********************************************************************************* */
