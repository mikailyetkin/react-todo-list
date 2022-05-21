import React, { useState } from 'react';
import Header from './Header';
import data from "./data.json";
import './App.css';
import ToDoList from './ToDoList';
import AddTask from './AddTask';

function App() {

  const [toDoList, setToDoList] = useState(data);

  const handleToggle = (id) => {
    let newMap = toDoList.map( todo => {
      return todo.id === id ? {...todo, complete: !todo.complete} : {...todo}
    });
    setToDoList(newMap);
  };

  const handleDelete = () => {
    let newMap = toDoList.filter( todo => {
      return !todo.complete
    }); 
    setToDoList(newMap);
  };

  const addTask = (task) => {
    let copy = [...toDoList];
    copy = [...copy, {id: copy.length+1, complete: false, task: task}];
    setToDoList(copy);
  }

  return (
    <div className="App">
      <Header />
      <ToDoList toDoList={toDoList} handleDelete={handleDelete} handleToggle={handleToggle}></ToDoList>
      <AddTask addTask={addTask}></AddTask>
    </div>
  );
}

export default App;
