import React, {useState} from "react";

function ToDoList() {
    const [tasks, setTasks] = useState([]);
    const [newTask, setnewTask] = useState("");

    function hanleInputChange(event) {
        setnewTask(event.target.value);
    }

    function handleAddTask() {
        if (newTask.trim() !== "") {
            setTasks(t => [...t, newTask]);
            setnewTask("");
        }

    }

    function handleDeleteTask(index) {
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);
    }

    function handleMoveTaskUp(index) {
        if (index > 0) {
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index - 1]] =
            [updatedTasks[index - 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }

    function handleMoveTaskDown(index) {
        if (index < tasks.length - 1) {
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index + 1]] =
            [updatedTasks[index + 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }

    return (
    <div className="to-do-list-container">
        <h1>To-Do-List</h1>
        <div>
            <input
            type="text"
            placeholder="Enter a task..."
            value={newTask}
            onChange={hanleInputChange}/>
            <button
            className="add-task-button"
            onClick={handleAddTask}>Add Task</button>
        </div>
        <ol>
            {tasks.map((task, index) => (
            <li className="list-tasks" key={index}>
                <span className="tasks-name-list">{task}</span>
                <button
                className="delete-button"
                onClick={() => handleDeleteTask(index)}>Delete</button>
                <button
                className="move-button"
                onClick={() => handleMoveTaskUp(index)}>Move Up</button>
                <button
                className="move-button"
                onClick={() => handleMoveTaskDown(index)}>Move Down</button>
            </li>
            ))}
        </ol>
    </div>
    );
}
export default ToDoList;