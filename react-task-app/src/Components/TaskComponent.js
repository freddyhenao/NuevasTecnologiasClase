//  Este codigo es el encargado de consultar la API -Python y traer los datos para ser renderizados 

import React, {useEffect, useState} from 'react';

const TasksComponent= () => {

    const [tasks, setTasks] = useState([])
    const fetchTasks = async() =>{
          const response = await fetch("http://localhost:5000/listtasks",
          { 
              method:'GET',
              headers:{
                Accept:'aplication/json',
                'Content-Type':'aplication/json',               
              }
          } 
          );
          const dataResponse = await response.json(); 
          const dataTasks = dataResponse.data.map((item)=>{
              return <tr key={item.id.toString()}>
              <td>{item.id}</td>
              <td>{item.task}</td>
              <td>{item.date}</td>
            </tr>
          });
          setTasks(dataTasks)
          
    }
    useEffect(()=>{
          fetchTasks()
    },[]);

      return(
      <div className="container" >
      <table>
              <thead>
                <tr>
                    <th>Id</th>
                    <th>Task</th>
                    <th>Date</th>
                </tr>
              </thead>

              <tbody>
            {/*  se agrega en este punto el codio html para mostrar los datos */}
              {tasks}
              </tbody>
            </table>
      </div>

  )

}
export default TasksComponent;