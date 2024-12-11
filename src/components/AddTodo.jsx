import React, {useState} from 'react';
import TodoList from './TodoList';

export default function AddTodo() {
    const [task, setTask] = useState('');
    const [taskList, setTaskList] = useState([]);

    if (task.trim() !== '') {
        setTaskList([...taskList, task]);
        setTask('');
    }
    return (
        <>
            <button onClick={TodoList}>Create Task</button>
        </>
    )
}