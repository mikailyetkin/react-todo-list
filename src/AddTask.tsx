import React, { useState } from "react";

const AddTask = ({ addTask }) => {
    const [input, setInput] = useState('');

    const onChange = (e) => {
        setInput(e.currentTarget.value);
    };

    const onSubmit = (e) => {
        e.preventDefault();
        addTask(input);
        setInput("");
    };

    return (
        <form onSubmit={onSubmit}>
            <input value={input} onChange={onChange} placeholder="Enter a task ..."></input>
            <button>Submit</button>
        </form>
    );
};

export default AddTask;
