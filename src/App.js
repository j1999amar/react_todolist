import "./App.css";
import { useState } from "react";

function App() {
  let addtask = () => {
    if(tasklist==""){
      alert("Enter your to do list!!!" ,window.location.reload())
      
    }
    settodoList([
      ...todoList,
      { id: todoList.length + 1, name: `${tasklist}`, isDone: false },
    ]);
  };
  let taskdone = (id) => {
    let itemList = todoList.findIndex((obj) => obj.id === id);
    // todoList[itemList].isDone = true;
    settodoList([...todoList]);
    if (todoList[itemList].isDone === false) {
      todoList[itemList].isDone = true;
    } else if (todoList[itemList].isDone == true) {
      todoList[itemList].isDone = false;
    }
  };
  let deletetask = (id) => {
    let removetask = todoList.findIndex((obj) => obj.id === id);
    todoList.splice(removetask, 1);
    settodoList([...todoList]);
  };

  const [tasklist, setTaskList] = useState("");
  const [todoList, settodoList] = useState([]);
  return (
    <div className="content">
      <h1>TO DO LIST</h1>
      <input type="text" placeholder="Enter Your To Do List!" onChange={(e) => setTaskList(e.target.value)}></input>{" "}
      <button onClick={addtask}>Add Task</button>

      <ul>
        {todoList.map((item) => {
          return (
            <li  className={item.isDone ? "markdone" : ""}>
              <h5>{item.name}</h5>
              <div><button onClick={() => taskdone(item.id)}>Done</button>
              <button onClick={() => deletetask(item.id)}>Delete</button>
              </div>
              
              <br></br>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
