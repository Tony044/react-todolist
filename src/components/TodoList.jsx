import React, { useState } from "react";
import TodoInput from "./TodoInput";

export default function TodoList () {
    const initialTodos = [];
    

    const [todos, setTodos] = useState(initialTodos);
    return (
        <ul>
            {todos.map((todo) => {
                <li>
                    <input type="checkbox" /> {todo}
                </li>
            })}
        </ul>
    ); 
}