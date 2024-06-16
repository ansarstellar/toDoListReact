import React from "react";
import { ToDoForm } from "./ToDoForm.js";
import { useState } from "react";
import { v4 as uuidv4} from 'uuid';
import { ToDo } from "./ToDo.js";
import { EditToDoForm } from "./EditToDoForm.js";
// import { isEditable } from "@testing-library/user-event/dist/utils/index.js";
uuidv4();

export const ToDoWrapper = () => {
    const [todos, setTodos] = useState([]);
    const addToDo = todo => {
        setTodos([...todos, {id: uuidv4(), task: todo, completed: false, isEditing: false}]);
        console.log(todos);
    }

    const toggleComplete = id => {
        setTodos(todos.map(todo => todo.id === id ? 
            {...todo, completed: !todo.completed} : todo
        ));
    }

    const deleteTodo = id => {
        setTodos(todos.filter (todo => todo.id !== id));
    }

    const editTodo = id => {
        setTodos(todos.map(todo => todo.id === id ?
            {...todo, isEditing: !todo.isEditing} : todo
        ));
    }

    const editTask = (task, id) => {
        setTodos(todos.map(todo => todo.id === id ? {
            ...todo, task, isEditing: !todo.isEditing} : todo))
    }

    return (
        <div className="TodoWrapper">
            <h1>Get Shit Done!</h1>  
            <ToDoForm addToDo={addToDo}/>
            {todos.map((todo, index) => (
                todo.isEditing ? (
                    <EditToDoForm editTodo={editTask} task={todo}/>
                ) : (
                    <ToDo task={todo} key={index} toggleComplete={toggleComplete}
                    deleteTodo={deleteTodo}
                    editTodo={editTodo}/>
                )
                
            ))}
            
        </div>
    );
}
