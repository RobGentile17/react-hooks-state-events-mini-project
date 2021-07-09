import React from "react";

function Task({ text, category, currentTasks, setCurrentTasks }) {
  const handleDeteleTask = () => {
    const filteredTasks = currentTasks.filter((task) => task.text !== text)
    setCurrentTasks(filteredTasks)
  }
  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button onClick={handleDeteleTask} className="delete">X</button>
    </div>
  );
}

export default Task;
