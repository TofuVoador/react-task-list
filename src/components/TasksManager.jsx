import React from "react";
import Task from "./Task";

const TasksManager = ({tasks, handleTaskClick}) => {
  return (
    <>
      {tasks.map(task => <Task task={task} handleTaskClick={handleTaskClick}/>)}
    </>
  );
};

export default TasksManager;