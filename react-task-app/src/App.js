import React from 'react';
import HeaderComponent   from './Components/HeaderComponent';
import TaskComponent  from './Components/TaskComponent';

const App = ()=> {
  return (
    <div>
      <HeaderComponent></HeaderComponent>
      <TaskComponent></TaskComponent>
    </div>

// ***************      tarjeta para probar si https://materializecss.com/cards.html funciona ok 
//   <div class="row">
//   <div class="col s12 m6">
//     <div class="card blue-grey darken-1">
//       <div class="card-content white-text">
//         <span class="card-title">Card Title</span>
//         <p>I am a very simple card. I am good at containing small bits of information.
//         I am convenient because I require little markup to use effectively.</p>
//       </div>
//       <div class="card-action">
//         <a href="#">This is a link</a>
//         <a href="#">This is a link</a>
//       </div>
//     </div>
//   </div>
// </div>
// ****************      fin de la tarjeta 
  );
}

export default App;
