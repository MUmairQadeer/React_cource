import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
  return (
    <dev>
      <h1>
        Custom App
      </h1>
    </dev>
  )
}
const anotherElement =(
  <a href="https://google.com" target='_blank'>Visit Google </a>
)
const anotherUser ="Mohammad Umair"
const reactElement =React.createElement(
  'a',{
    href:'https://google.com',target:'_blank'
  },
  'click me to visit google',
  anotherUser
)

ReactDOM.createRoot(document.getElementById('root')).render(
  
 
    reactElement
  
)
