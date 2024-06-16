import React, { useState } from "react";

export const EditToDoForm = ({editTodo, task}) => {
    const [value, setValue] = useState("");

    const handleSubmit = e => {
        e.preventDefault();
        editTodo(value, task.id);
        setValue("");
    }


    return (
        <form className="TodoForm" onSubmit={handleSubmit}>
            <input type="text" className="todo-input" 
            placeholder="Update Task" 
            value={value}
            onChange={(e) => {
                setValue(e.target.value)
            }}/>
            <button type="submit" className="todo-btn">Update Task</button>
        </form>
    );
}