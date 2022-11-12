import React from "react";
import Task from "./Task";

const TasksManager = ({tasks}) => {
  return (
    <>
      {tasks.map(task => <Task task={task}/>)}
    </>
  );
};

export default TasksManager;