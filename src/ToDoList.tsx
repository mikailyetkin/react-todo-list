import React from "react";
import ToDo from "./ToDo";

const ToDoList = ({ toDoList, handleToggle, handleDelete }) => {
    return(
        <div>
            {toDoList.map(todo => {
                return <ToDo todo={todo} handleDelete={handleDelete} handleToggle={handleToggle}></ToDo>
            })}
            <button style={{ margin: '20px'}} onClick={handleDelete}>Delete Completed</button>
        </div>
    );
};

export default ToDoList;