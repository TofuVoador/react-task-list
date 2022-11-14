import React from 'react';
import "./Task.css";

const Task = ({task, handleTaskClick}) => {
    return ( 
        <div className='task-container' onClick={() => handleTaskClick(task.id)} style={task.completed ? {borderLeft: "6px solid magenta"} : {}}>
            <div className='task-title'>
                {task.title}
            </div>
        </div>
        // <div className='task-container' handleTaskClick={handleTaskClick}>{task.title}</div>
    );
}
 
export default Task;