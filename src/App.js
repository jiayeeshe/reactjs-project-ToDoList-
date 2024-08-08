import './App.css';
import { useState } from 'react';
import { Task } from './Task';

function App() {

  const [todoList, setTodoList] = useState([]); 
  const [newTask, setNewTask] = useState("");   // track the </input>
  
  const handleChange = (event) => {
    setNewTask(event.target.value);
  }

  const addTask = () => {
    const task = {
      id : todoList.length===0 ? 1 : todoList[todoList.length-1].id + 1,
      name : newTask,
      completed : false,
    }
    setTodoList([...todoList, task]);
  }

  const deleteTask = (id) => {

      setTodoList(todoList.filter((task) => task.id !== id ));
  }

  const completeTask = (id) =>{

      setTodoList(todoList.map((task) =>{
        return task.id === id ? {...task, completed: true} : task
      }));
  }


  return (
  <div className="App">
    <div className="addTask">
      <input onChange={handleChange}/>
      <button onClick={addTask}> Add Task</button>
    </div>
    <div className="list">
      {todoList.map((task) => {
        return <Task name={task.name} id={task.id} completed={task.completed} completeTask={completeTask} deleteTask={deleteTask}/>
      })}
    </div>
  </div>
  )

}




export default App;
