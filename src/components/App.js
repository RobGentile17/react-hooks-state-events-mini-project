import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [currentTasks, setCurrentTasks]= useState(TASKS)
  const [ selectedCategory, setSelectedCategory ] = useState("All")

  const tasksToDisplay = currentTasks.filter(task => {
    
    if(selectedCategory === "All"){
      return true
    }else{
      return task.category === selectedCategory
     }
    })
  
    return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter 
      category={CATEGORIES}
      setSelectedCategory={setSelectedCategory}
      selectedCategory={selectedCategory}
      />
      <NewTaskForm 
      category={CATEGORIES}
      />
      <TaskList 
      tasks={tasksToDisplay}
      setCurrentTasks={setCurrentTasks}
      currentTasks={currentTasks}
      />
    </div>
  );
}

export default App;
