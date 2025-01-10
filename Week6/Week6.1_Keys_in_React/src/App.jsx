import { useState } from 'react'
import Todo from './Todo'

let counter = 4;
function App() {
  const [todos, setTodos] = useState([
  {
    id : 1,
    title : "Go to Gym",
    description : "go to gym in the morning"
  },
  {
    id : 2,
    title : "Go to Gym 2",
    description : "go to gym2 in the morning"
  },
  {
    id : 3,
    title : "Go to Gym3",
    description : "go to gym3 in the morning"
  }
])

function addTodo(){
  setTodos([...todos,{
    id : counter++,
    title: Math.random(),
    description : Math.random()
  }])
  console.log(counter);
  
}

  return (
    <>
    <button onClick={addTodo}>Add Todos</button>
    {todos.map(todo => <Todo key={todo.id} title={todo.title} description={todo.description} />)}
    {/* <Todo title={"My First Todo"} description={"This is my first Todo"} /> */}
    </>
  )
}
export default App
