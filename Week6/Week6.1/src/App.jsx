import { useState } from "react"
import Header from "./Header"
function App() {

  const [title, setTitle] = useState("My name is Vishal Prakash");
  
  function changeTitle(){
    setTitle("My name is " + (Math.random() * 100 ) )
    
  }
  return (
    <div>
      <button onClick={changeTitle}>Update Title</button>
      <Header title={title}></Header>
      <Header title="My name is Vishal"></Header>
      <Header title="My name is Vishal"></Header>
      <Header title="My name is Vishal"></Header>
      <Header title="My name is Vishal"></Header>
      <Header title="My name is Vishal"></Header>
      <Header title="My name is Vishal"></Header>
      <Header title="My name is Vishal"></Header>
      <Header title="My name is Vishal"></Header>


      
    </div>
  )
}

export default App
