import React, { useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import Button from '../Button';

import "./TaskDetails.css"

const TaskDetails = ({handleChangeTask, handleGetTaskByID}) => {       //show details from a task
    const params = useParams();
    const task = handleGetTaskByID(params.taskId);
    const history = useHistory();

    const [descData, setDescData] = useState(task.description);
    const [startData, setStartData] = useState(task.start);

    const handleBackButton = () => {
        handleChangeTask(params.taskId, descData, startData);
        history.goBack();
    }

    const handleDescriptionChange = (e) => {
        setDescData(e.target.value);
    }

    const handleStartChange = (e) => {
        setStartData(e.target.value);
    }

    return (
        <>
            <div className='back-button-container'>
                <Button onClick={handleBackButton}>Voltar</Button>
            </div>
            <div className="task-details-container">
                <h1>{task.title}</h1>
                <h2>Descrição</h2>
                <input onChange={handleDescriptionChange} value={descData} placeholder="(digite aqui)" type="text" className='description-input'/>
                <h2>Horário</h2>
                <input onChange={handleStartChange} value={startData} type="time" className='description-input'/>
            </div>
        </>
    );
}
 
export default TaskDetails;