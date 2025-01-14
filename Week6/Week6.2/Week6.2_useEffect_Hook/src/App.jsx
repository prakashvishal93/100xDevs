import { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'
function App() {
  const [todos, setTodos] = useState([]);
  useEffect(()=>{
    axios.get('https://dummyjson.com/todos')
    .then(function(response){
      setTodos(response.data.todos)
    })
  },[]);
  return (
    <>
    {todos.map(todo => <Todo key={todo.id} title={todo.todo} description={todo.userId} />)}
    </>
  )
}

function Todo({title, description}){
  return <div>
    <h1>{title}</h1>
    {description}
  </div>

}

export default App
