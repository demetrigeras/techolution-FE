import React from "react";
import { useNavigate } from 'react-router-dom';
import Tasks from "../Screens/Tasks.jsx"



function Home(){

    const navigate = useNavigate()

    function gotoTodoList() {
        navigate('tasks')
    }


    return(
        <div className="Todohome">
            Welcome to the To-Do List Home Page
            <div>
                Click here to go to create your To-do list!
            </div>
            <button onClick={gotoTodoList}>To-do Page</button>
            <Tasks showTaskInput={false} />
        </div>
    )
}

export default Home