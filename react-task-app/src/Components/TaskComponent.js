import React, { useEffect, useState } from 'react';
//
const TasksComponent = () => {
    const apiBaseUrl = "http://localhost:4000";
    const [updateView, setUpdateView] = useState(true);
    const [tasks, setTasks] = useState([]);
    const [formData, setFormData] = useState({
        task: '',
        date: ''
    });
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
    // con los botones de Editar y Eliminar
        const dataResponse = await response.json();
        const dataTasks = dataResponse.data.map((item) => {
            return <tr key={item.id.toString()}>
                <td>{item.id}</td>
                <td>{item.task}</td>
                <td>{item.date}</td>
                <td>
                    <div className="row">
                        <div className="col s6">
                            <button className="btn waves-effect waves-light indigo darken-1">Editar</button>                 
                        </div>
                        <div className="col s6">
                            <button className="btn waves-effect waves-light red darken-2">Eliminar</button>
                        </div>

                    </div>
                </td>
            </tr>
        });
        setTasks(dataTasks);
    }
// funcion crear tarea 
    const createTask = async (event) => {
        event.preventDefault();
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
        console.log(dataResponse);
    }

// useEffet se ejecuta y actualiza si se realiza alugun cambio en este caso em la vista 
    useEffect(() => {
        fetchTasks();
    }, [updateView])
    return (
        <div className="container">
            <div onSubmit={createTask} className="row">
                <form className="col s12">
                    <div className="row">
                        <div className="input-field col s12">
                            <input type="text" name="task" onChange={handleInputChange} />
                            <label>Task</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <input type="text" name="date" onChange={handleInputChange} />
                            <label >Date</label>
                        </div>
                    </div>
                    <button className="waves-effect waves-light btn-large indigo darken-1">Crear Tarea</button>
                </form>
            </div>
            <p>"task {formData.task}</p>
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

export default TasksComponent