import { useState } from 'react'
import './App.css'

function App() {
  const[counter, setCounter] = useState(0)

  
  
  return <>
  <button onClick={function (){
    setCounter(counter + 1)
  }}>Counter({counter})</button>

  


  </>
  

}

export default App
