import React, { useEffect, useState } from 'react';
//
const TasksComponent = () => {
    const apiBaseUrl = "http://localhost:4000";
      // setUpdateView(!updateView); cambia el estado indicando que hay cambios en los datos
      //hooks useStata y useEffect
    const [updateView, setUpdateView] = useState(true);
    const [tasks, setTasks] = useState([]);
    const [formData, setFormData] = useState({
        task: '',
        date: ''
    });
    // Hooks 
// ******  Hooks para la accion de Boton 
    const [buttonAccion, setButtonAtion] = useState({
        action: "Crear Tarea",
        id: 0
    });
    
// **************
    const handleInputChange = (event) => {
        console.log(event.target.value);
        setFormData({
            ...formData,
            [event.target.name]:event.target.value
        });
    }


// obtener los datos de forma asincrona de la base de datos con metodo GET
    const fetchTasks = async () => {
        const response = await fetch(`${apiBaseUrl}/listtasks`,
            {
                method: 'GET',
                headers: {
                    Accept: 'aplication/json',
                    'Content-Type': 'aplication/json',
                }
            }
        );
    // fincion para renderizar los datos  obtenidos de la base de datos  y las peticiones generadas
    // Inicio de Funcion ...  botones de Editar y Eliminar
        const dataResponse = await response.json();
        const dataTasks = dataResponse.data.map((item) => {
            return <tr key={item.id.toString()}>
                <td>{item.id}</td>
                <td>{item.task}</td>
                <td>{item.date}</td>
                <td>
                    <div className="container">
                        <div className="row">
                            <div className="col s6">
                                <button className="btn waves-effect waves-light indigo darken-1" onClick={()=>updateForm(item.id, item.task, item.date)}>Editar</button>                 
                            </div>
                            <div className="col s6">
                                <button className="btn waves-effect waves-light red darken-2" onClick={()=>deleteTask(item.id)}>Eliminar</button>
                            </div>
                        </div>
                    </div>   
                </td>
            </tr>
        });
        setTasks(dataTasks);
    }
// fin de Funcion ... botones de Editar y Eliminar 
//:::::::::::::::
// se usa para actualizar el Hooks useState
// Inicio de  funcion ...  Editar  tarea
    const updateForm = (id, task, date)=>{
        setFormData({
            task: task,
            date: date
        });
        setButtonAtion({
            action:"Actualizar",
            id: id
        });
    } 
// fin de  funcion ...  Editar tarea
//********************************** */
    const sumbit = (event)=>{
        event.preventDefault();
        if (buttonAccion.action == 'Crear Tarea'){
            createTask();
        }
        else{
            updateTask(buttonAccion.id);       
        }
        //setUpdateView(!updateView);
        setFormData({
            task:"",
            date:""
        });
        setButtonAtion({
            action:"Crear Tarea",
            id: 0
        });
    }
// Inicio de  funcion ...  Subir tarea
    const updateTask = async(taskId)=>{
        const response = await fetch(`${apiBaseUrl}/updateTask`,
        {
            method: 'PUT', 
            headers: {
                Accept: 'aplication/json',
                'Content-Type': 'aplication/json',
            },
            body: JSON.stringify({
                id:taskId, 
                task: formData.task,
                date: formData.date
            })                     
        }
    );
    const dataResponse = await response.json();
    // setUpdateView(!updateView); cambia el estado indicando que hay cambios en los datos
    setUpdateView(!updateView);
    }
//  de  funcion ...  Subir tarea
//********************************* */
// inicio  de  funcion ...  crear tarea
    const createTask = async () => {
        
        const response = await fetch(`${apiBaseUrl}/createTask`,
            {
                method: 'POST',
                headers: {
                    Accept: 'aplication/json',
                    'Content-Type': 'aplication/json',
                },
                body: JSON.stringify(formData)
            }
        );
        const dataResponse = await response.json();
        setUpdateView(!updateView);
       // console.log(dataResponse);
    }
    // fin de Funcion ... funcion crear tarea
    //******************************* */
    // Inicio de Funcion ... funcion Eliminar tarea
    const deleteTask = async (taskId) =>{
    // validacion para eliminar dato
        let confirm = window.confirm("Confirmar");
        if (confirm){
            const response = await fetch(`${apiBaseUrl}/deleteTask`,
                {
                    method: 'DELETE', 
                    headers: {
                        Accept: 'aplication/json',
                        'Content-Type': 'aplication/json',
                    },
                    body: JSON.stringify({id:taskId})
                }
            );
            const dataResponse = await response.json();
            //  setUpdateView(!updateView); cambia el estado indicando que hay cambios en los datos
            setUpdateView(!updateView);
        }
    }
   // fin de Funcion ... funcion Eliminar tarea  
// useEffet se ejecuta y actualiza si se realiza alugun cambio en este caso em la vista 
// cuando se presenta un cambio en la variables   setUpdateView(!updateView); despues de las funciones 
// despues de las funciones  :  deleteTask, createTask
    useEffect(() => {
        fetchTasks();
    }, [updateView])
    return (
        <div className="container">
            <div onSubmit={sumbit} className="row">
                <form className="col s12">
                    <div className="row">
                        <div className="input-field col s12">
                            <input type="text" name="task" value={formData.task} onChange={handleInputChange} />
                            <label>Task</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <input type="text" name="date" value={formData.date} onChange={handleInputChange} />
                            <label >Date</label>
                        </div>
                    </div>
                    <button className="waves-effect waves-light btn-large indigo darken-1">{buttonAccion.action}</button>
                </form>
            </div>
          
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Task</th>
                        <th>Date</th>
                        <th>Action</th>
                    </tr>
                </thead>

                <tbody>
    {/* fincion con los datos que cambian el funcion task */}
                    {tasks}
                </tbody>
            </table>
        </div>
    );
}

export default TasksComponent;