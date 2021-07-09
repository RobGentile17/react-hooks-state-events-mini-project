import React from "react";
import Task from "./Task"

function TaskList({ tasks, currentTasks, setCurrentTasks }) {

  const listOfTasks= tasks.map(task => (
     <Task
     text={task.text}
     category={task.category}
     key={task.text}
     currentTasks={currentTasks}
     setCurrentTasks={setCurrentTasks}
     />
  ))
  return (
    <div className="tasks">
      {listOfTasks}
    </div>
  );
}

export default TaskList;
