import React from "react";

const ToDo = ({todo, handleDelete, handleToggle}) => {

    return (
        <div className={todo.complete ? "strike" : ""}> {todo.task} </div>
    );
};

export default ToDo;