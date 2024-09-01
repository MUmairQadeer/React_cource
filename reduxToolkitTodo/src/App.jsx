import { useState } from 'react'
import  AddTodo  from './component/AddTodo'
import  Todo  from './component/Todo'
import './App.css'
import UpdateTodo from './component/UpdateTodo'

function App() {


  return (
    <>
     <h1 className='text-4xl font-medium p-3 m-2 text-purple-700'>Learning Redux Toolkit Through Todo</h1>
     <AddTodo />
     <Todo />
    <UpdateTodo />
    </>
  )
}

export default App
