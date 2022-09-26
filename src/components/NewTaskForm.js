import React, { useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {
  const [text, setText] = useState("");
  const [category, setCategory] = useState("Code");

  const categoryOptions = categories.map((category) => {
    return <option key={category}>{category}</option>;
  });

  function handleSubmit(event) {
    event.preventDefault();

    const newTask = {
      text,
      category,
    };
    onTaskFormSubmit(newTask);
    setText("");
    setCategory("Code");
  }
  return (
    <form onSubmit={handleSubmit} className="new-task-form">
      <label>
        Details
        <input
          type="text"
          name="text"
          value={text}
          onChange={(event) => setText(event.target.value)}
        />
      </label>
      <label>
        Category
        {/* render <option> elements for each category here */}
        <select
          name="category"
          value={category}
          onChange={(event) => setCategory(event.target.value)}
        >
          {categoryOptions}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
