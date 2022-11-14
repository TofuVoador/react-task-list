import React from 'react';
import { CgClose, CgInfo } from "react-icons/cg";
import { useHistory } from 'react-router-dom';
import "./Task.css";

const Task = ({task, handleTaskClick, handleTaskDelete}) => {
    const history = useHistory();

    const handleTaskDetails = () => {
        history.push(`/${task.id}`)
    }

    return ( 
        <div className='task-container' style={task.completed ? {borderLeft: "6px solid magenta"} : {}}>
            <div className='task-title' onClick={() => handleTaskClick(task.id)} >
                {task.title}
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
        // <div className='task-container' handleTaskClick={handleTaskClick}>{task.title}</div>
    );
}
 
export default Task;