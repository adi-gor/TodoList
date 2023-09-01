import React, {useState} from "react";
import Todolist from "./Todolist";

function App() {
  const [task, setTask] = useState("");
  const [item, addItem] = useState([]);

  function handleChange(event) {
    setTask(event.target.value);
  }
  
  function handleClick() {
    addItem(prevItems => {
      return [...prevItems, task];
    });
    setTask("");
  }

  function deleteItem(id) {
    addItem(prevItems => {
      return prevItems.filter((item, index) => {
        return index !== id;
      });
    });
  }
  
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input type="text" onChange={handleChange} value={task}/>
        <button onClick={handleClick}>
          <span>Add</span>
        </button>
      </div>
      <div >
        <ul>
          {item.map((todolist, index) => {
            return <Todolist key={index} id={index} text={todolist} onChecked={deleteItem}/>;
          }
          )}
        </ul>
      </div>
    </div>
  );
}

export default App;
