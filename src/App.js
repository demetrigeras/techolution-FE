import logo from './logo.svg';
import './App.css';
import React from 'react';
import Home from "./Screens/Home.jsx"
import Tasks from "./Screens/Tasks.jsx"
import { Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
     <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/tasks" element={<Tasks showTaskInput={true}/>}/>
      
     </Routes>
    </div>
  );
}

export default App;
