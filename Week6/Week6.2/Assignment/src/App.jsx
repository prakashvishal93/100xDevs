import { useState } from 'react'
import './App.css'
import { useEffect } from 'react';
import axios from 'axios'

function App() {
  const [button,setButton] = useState(1)
  return <div>
    <button onClick={function (){
      setButton(1);
    }}>1</button>
    <button onClick={function (){
      setButton(2);
    }}>2</button>
    <button onClick={function (){
      setButton(3);
    }}>3</button>
    <button onClick={function (){
      setButton(4);
    }}>4</button>
    <button onClick={function (){
      setButton(5);
    }}>5</button>
    
    < Todo id ={button} />
  </div>

  
  
  function Todo({id}){

    const[todo, setTodos] = useState({});
    useEffect(() => {
      axios
      .get(`https://dummyjson.com/todos/${id}`)
      .then(response =>{
      setTodos(response.data)
      })
    },[])


    return <div> 

    id : {id}
    <h1>{todo.todo}</h1>
    <h3>{todo.userId}</h3>
  </div>

}

}
export default App
