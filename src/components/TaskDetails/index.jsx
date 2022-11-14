import React, { useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import Button from '../Button';

import "./TaskDetails.css"

const TaskDetails = ({handleDescribeTask, handleGetTaskDescription}) => {
    const params = useParams();
    const task = handleGetTaskDescription(params.taskId);
    const history = useHistory();

    const [descData, setDescData] = useState(task.description);

    const handleBackButton = () => {
        handleDescribeTask(params.taskId, descData);
        history.goBack();
    }

    const handleDescriptionChange = (e) => {
        setDescData(e.target.value);
    }

    return (
        <>
            <div className='back-button-container'>
                <Button onClick={handleBackButton}>Voltar</Button>
            </div>
            <div className="task-details-container">
                <h1>{task.title}</h1>
                <h2>Descrição</h2>
                <input onChange={handleDescriptionChange} value={descData} type="text" className='description-input'/>
            </div>
        </>
    );
}
 
export default TaskDetails;