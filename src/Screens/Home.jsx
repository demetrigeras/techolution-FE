import { useNavigate } from "react-router-dom";

function Home({ tasks }) {
  const navigate = useNavigate();

  function gotoTodoList() {
    navigate("tasks");
  }

  return (
    <div className="Todohome">
     <div className="Welcome"> Welcome to the To-Do List Home Page</div>
      <div className="todoadd">Click here to create your To-do list! <button className="addbutton"  onClick={gotoTodoList}>To-do Page</button> </div>
      <h1 class="underlined">To-Do List</h1>
      <div className="taskName">
      {tasks.map((task) => (
        <p>{task.taskName}</p>
      ))}
      </div>
    </div>
  );
}

export default Home;
