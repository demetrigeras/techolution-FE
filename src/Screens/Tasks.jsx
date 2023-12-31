import React from "react";
import { useState } from "react";
import {
  createTask,
  getTasks,
  updateTask,
  deleteTask,
} from "../services/task.js";

function Tasks({ tasks, setTasks, setTask, task }) {
  const [editingId, setEditingId] = useState(null); // ID of the task being edited
  const [editingText, setEditingText] = useState("");

  const fetchTasks = async () => {
    try {
      const fetchedTasks = await getTasks();
      setTasks(fetchedTasks);
    } catch (error) {
      console.error("Error fetching tasks:", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (task.taskName && task.taskName.length > 0) {
    try {
      await createTask(task);
      setTask({ taskName: "" });
      await fetchTasks();
    } catch (error) {
      console.error("Error creating task:", error);
    }
}
  }
  const handleChange = (e) => {
    const { name, value } = e.target;

    setTask((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleEdit = (taskId, taskName) => {
    setEditingId(taskId);
    setEditingText(taskName);
  };

  const handleUpdate = async (taskId) => {
    try {
      await updateTask(taskId, { taskName: editingText });
      setEditingId(null);
      setEditingText("");
      await fetchTasks();
    } catch (error) {
      console.error("Error updating task:", error);
    }
  };

  const handleDelete = async (taskId) => {
    try {
      await deleteTask(taskId);
      await fetchTasks();
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  };

  return (
    <div className="TodoList">
     <div className="topage"> To-Do List Page</div>
      <form onSubmit={handleSubmit}>
        <input className="inputtask"
          placeholder="Enter your task name"
          name="taskName"
          value={task.taskName}
          onChange={handleChange}
        />
        <button className="addbutton create" type="submit">Create Task</button>
      </form>
      <h1 className="underlined">TO-DO LIST</h1>
      <div className="taskName">
      {tasks.map((task) => (
        <li key={task._id}>
          {editingId === task._id ? (
            <input
              type="text"
              value={editingText}
              onChange={(e) => setEditingText(e.target.value)}
              onBlur={() => handleUpdate(task._id)} // Save on blur
              autoFocus
            />
            
          ) : (
            <span>{task.taskName}</span>
            
          )}
          
          <button className="addbutton edit-button" onClick={() => handleEdit(task._id, task.taskName)}>
            Edit
          </button>
          <button className="addbutton delete-button" onClick={() => handleDelete(task._id)}>Delete</button>
        </li>
      ))}
    </div>
    </div>
  );
}

export default Tasks;
