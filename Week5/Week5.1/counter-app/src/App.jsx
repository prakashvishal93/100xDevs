import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'



function App() {
  const [todos, setTodos] = useState([
    {
     title : "Go to Gym",
     description : "Go to Gym form 7",
     completed  : "false"
    },
    {
     title : "Study DSA",
     description : "Study DSA From 11-12",
     completed : "true"
    }
  ]);

  


  function addTodo(){
    setTodos([...todos,{
      title : "new todo ",
      description : "new Desc"
    }])
        
  }


  return (
    <div>
      
      <button onClick={addTodo}>Add a Random Todo</button>

      {todos.map(function(todo){
        return <Todo title = {todo.title} description = {todo.description} />
      })}

      <DummyButton />
    </div>
  )
}

function DummyButton(props){
  console.log("Re Render is happening here");

  return <button>fdifsdjflds</button>
  
}


function Todo(props){
  return (
    <div>
    <h1>{props.title}</h1>
    <h1>{props.description}</h1>
  </div>
  )

}

export default App
