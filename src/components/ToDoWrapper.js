import React from "react";
import { ToDoForm } from "./ToDoForm.js";
import { useState } from "react";
import { v4 as uuidv4} from 'uuid';
import { ToDo } from "./ToDo.js";
uuidv4();

export const ToDoWrapper = () => {
    const [todos, setTodos] = useState([]);
    const addToDo = todo => {
        setTodos([...todos, {id: uuidv4(), task: todo, completed: false, isEditing: false}])
        console.log(todos);
    }
    return (
        <div className="TodoWrapper">
            <h1>Get Shit Done!</h1>
            <ToDoForm addToDo={addToDo}/>
            {todos.map((todo, index) => (
                <ToDo task={todo} key={index}/>
            ))}
            
        </div>
    );
}
