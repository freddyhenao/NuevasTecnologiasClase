import React, {useEffect} from 'react';

const TasksComponent= () => {

    const fetchTasks = async() =>{
          const response = await fetch("http://localhost:5000/listtasks",
          { 
              method:'GET',
              headers:{
                Accept:'aplication/json',
                'Content-Type':'aplication/json',
                'Access-Control-Allow-Origin': 'http://localhost:5000'
              }
          } 
          );
          const data = await response.json(); 
          console.log(data)
    }
    useEffect(()=>{
          fetchTasks()
    },[]);

      return(
      <div className="container" >
      <table>
              <thead>
                <tr>
                    <th>Name</th>
                    <th>Item Name</th>
                    <th>Item Price</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>Alvin</td>
                  <td>Eclair</td>
                  <td>$0.87</td>
                </tr>
                <tr>
                  <td>Alan</td>
                  <td>Jellybean</td>
                  <td>$3.76</td>
                </tr>
                <tr>
                  <td>Jonathan</td>
                  <td>Lollipop</td>
                  <td>$7.00</td>
                </tr>
              </tbody>
            </table>
      </div>

  )

}
export default TasksComponent;