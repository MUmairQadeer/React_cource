import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'
function App() {
  let myObj ={
    username:"umair",
    age :21
  }
  let newArr =[1,2,3,4,5]

  return (
    <>
     <h1 className='bg-green-400 p-4 rounded-xl mb-4'>Tailwind Test </h1>
     <Card username="Muhammad Umair" btnText="Click me" />
     <Card username="Myname" btnText="Visit me"/>
    </>
  )
}

export default App
