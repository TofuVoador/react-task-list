import React from 'react';
import { CgClose, CgInfo } from "react-icons/cg";
import "./Task.css";

const Task = ({task, handleTaskClick, handleTaskDelete}) => {
    return ( 
        <div className='task-container' style={task.completed ? {borderLeft: "6px solid magenta"} : {}}>
            <div className='task-title' onClick={() => handleTaskClick(task.id)} >
                {task.title}
            </div>
            <div className='buttons-container'>
                <button className='task-details-button' onClick={() => handleTaskDelete(task.id)}>
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