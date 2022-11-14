import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import Button from './Button';

import "./TaskDetails.css"

const TaskDetails = () => {
    const params = useParams();
    const history = useHistory();

    const handleBackButton = () => {
        history.goBack();
    }

    return (
        <>
            <div className='back-button-container'>
                <Button onClick={handleBackButton}>Voltar</Button>
            </div>
            <div className="task-details-container">
                <h1>{params.taskId}</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio illo praesentium odio doloribus nobis quasi!
                    Rerum non ratione eius dignissimos totam beatae reiciendis laborum, sed fugiat odit fuga obcaecati asperiores.
                </p>
            </div>
        </>
    );
}
 
export default TaskDetails;