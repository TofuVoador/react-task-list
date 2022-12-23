import React from 'react';
import { CgClose, CgInfo } from "react-icons/cg";
import { useHistory } from 'react-router-dom';
import "./Task.css";

const Task = ({task, handleTaskClick, handleTaskDelete}) => {       //task component
    const history = useHistory();

    const handleTaskDetails = () => {       //show the task details
        history.push(`/${task.id}`)
    }

    return ( 
        <div className='task-container' style={task.completed ? {borderLeft: "10px solid magenta", paddingLeft: "5px"} : {}}>
            <div className='task-info-container' onClick={() => handleTaskClick(task.id)} >
                <h2 className='task-title'> {task.title} </h2> 
                <p className='task-description'>{task.description}</p>
            </div>
            <div className='buttons-container'>
                <button className='task-details-button' onClick={handleTaskDetails}>
                    <CgInfo/>
                </button>
                <button className='remove-task-button' onClick={() => handleTaskDelete(task.id)}>
                    <CgClose/>
                </button>
            </div>
        </div>
    );
}
 
export default Task;