import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [category, setCategory] = useState("All");
  const [tasks, setTasks] = useState(TASKS);

  //Tasks Filter
  const availableTasks = tasks.filter(
    (task) => category === "All" || task.category === category
  );

  //Handling Task Deletion
  function handleDelete(deletedTaskText) {
    setTasks(tasks.filter((task) => task.text !== deletedTaskText));
  }

  //Handling Task Addition
  function addTask(newTask) {
    const newTaskArray = [...tasks, newTask];
    setTasks(newTaskArray);
  }

  return (
    <div className="App">
      <CategoryFilter
        categories={CATEGORIES}
        selectedCategoryFilter={category}
        setSelectedCategoryFilter={setCategory}
      />
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={addTask} />
      <TaskList tasks={availableTasks} onDelete={handleDelete} />
    </div>
  );
}

export default App;
