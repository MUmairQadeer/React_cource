import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter,setCounter] =useState(5)

const addValue = () =>{

 setCounter(counter +1)
console.log(" Add button Clicked",counter);
}
const removeValue = () =>{

 setCounter(counter -1)
  console.log(" Remove button Clicked",counter);
}

  return (
    <>
    <h1>Chai aur React {counter}</h1>
    <h2> Counter Value: {counter}</h2>
    <button
    onClick ={addValue}>Add Value {counter}</button>
    <br />
    <button onClick={removeValue}>Remove Value {counter}</button>
    <p>footer: {counter}</p>
    </>
  )
}

export default App
