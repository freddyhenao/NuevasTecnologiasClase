import React, { useEffect, useState } from 'react';

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
        const dataResponse = await response.json();
        const dataTasks = dataResponse.data.map((item) => {
            return <tr key={item.id.toString()}>
                <td>{item.id}</td>
                <td>{item.task}</td>
                <td>{item.date}</td>
            </tr>
        });
        setTasks(dataTasks);
    }

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
                    </tr>
                </thead>

                <tbody>
                    {tasks}
                </tbody>
            </table>
        </div>
    );
}

export default TasksComponent