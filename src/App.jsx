import { useEffect, useState } from 'react';
import './App.css';
// import TodoList from './components/TodoList'
// import TodoInput from './components/TodoInput'
// import AddTodo from './components/AddTodo'

function App() {
  const [task, setTask] = useState(() => {
    let todo = localStorage.getItem("todo");
    if(todo === null)
      return "";
    else 
      return JSON.parse(todo);
  })

  useEffect(() => {
    localStorage.setItem("task", JSON.stringify(task))
  }, [task])

  const [taskList, setTaskList] = useState(() => {
    const savedTaskList = localStorage.getItem("taskList");
    return savedTaskList ? JSON.parse(savedTaskList) : [];
  });

  useEffect(() => {
    localStorage.setItem("taskList", JSON.stringify(taskList))
  }, [taskList])

  // Fonction pour gérer l'ajout d'une tâche
  const addTask = (event) => {
    event.preventDefault();
    if (task.trim()) { // Prend la valeur de l'input sans espaces inutiles
      setTaskList([...taskList, {text: task, completed: false}]); // ajouter la valeur de l'input dans la liste taskList
      setTask(''); // Réinitialise mon input
    }
  };

  // Fonction pour marquer une tâche comme terminée
  const finishedTask = (index) => {
    const updatedList = [...taskList]; // Créer une copie de la liste des tâches
    updatedList[index].completed = !updatedList[index].completed; // Inverse l'atat de completed
    setTaskList(updatedList); // Met à jour l'état avec la nouvelle liste modifiée
  }

  return (
    <>
      <div className='app'>
        <h1>My Todo List</h1>

        {/*Champ imput pour saisir une tâche*/}
        
        <form onSubmit={addTask}>
          <input 
          type="text" 
          placeholder='Entrez votre tâche...'
          value={task}
          onChange={(event) => setTask(event.target.value)} // Met à jour l'état de l'input
          />

          {/*Champ button pour créer une tâche*/}
          <button type='submit'>Add</button>
        </form>

        <main>
        <ul>
          {/*Liste avec les différentes tâches*/}
          {taskList.map((task, index) => ( 
            <li key={index}
              style={{
                textDecoration: task.completed ? 'line-through': 'none', // Barre le texte si la tâche est terminée
              }}
              >
              <input type="checkbox" 
              checked={task.completed}
              onChange={() => finishedTask(index)}
              />
              {task.text}
              </li>
          ))}
        </ul>
        </main>
        
      </div>
    </>
  )

}
export default App
