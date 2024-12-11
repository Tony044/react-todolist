import { useState } from 'react'
import './App.css'
// import TodoList from './components/TodoList'
// import TodoInput from './components/TodoInput'
// import AddTodo from './components/AddTodo'

function App() {
  const [task, setTask] = useState('');
  const [taskList, setTaskList] = useState([]);

  // Fonction pour gérer l'ajout d'une tâche
  const addTask = (event) => {
    event.preventDefault();
    if (task.trim()) { // Prend la valeur de l'input sans espaces inutiles
      setTaskList([...taskList, task]); // ajouter la valeur de l'input dans la liste taskList
      setTask(''); // Réinitialise mon input
    }
  };
    
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
          onChange={(event) => setTask(event.target.value)}
          />

          {/*Champ button pour créer une tâche*/}
          <button type='submit'>Add</button>
        </form>
        <main>
        <ul>
          {/*Liste avec les différentes tâches*/}
          {taskList.map((task, index) => ( 
            <li key={index}>
              style={{
                textDecoration: taskItem.completed ? 'line-trough': 'none', // Barre le texte si la tâche est terminée
              }}
              <input type="checkbox" 
              checked={taskItem.completed}
              onChange={() => addTask(index)}
              onClick={finishedTask}
              />
              {task}
              </li>
          ))}
        </ul>
        </main>
        
      </div>
    </>
  )

}
export default App
