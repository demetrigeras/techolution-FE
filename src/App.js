import './App.css';
import {useState, useEffect} from 'react';
import Home from "./Screens/Home.jsx"
import Tasks from "./Screens/Tasks.jsx"
import { Routes, Route, NavLink } from "react-router-dom";
import { getTasks } from './services/task.js';


function App() {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState({ taskName: "" });

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const fetchedTasks = await getTasks();
      setTasks(fetchedTasks);
    } catch (error) {
      console.error("Error fetching tasks:", error);
    }
  };

  return (
    <div className="App">
      <nav>
        <NavLink to="/">Home</NavLink>
      </nav>
     <Routes>
        <Route path="/" element={<Home tasks={tasks}/>}/>
        <Route path="/tasks" element={<Tasks tasks={tasks} setTasks={setTasks} task={task} setTask={setTask}/>}/>
     </Routes>
    </div>
  );
}

export default App;
