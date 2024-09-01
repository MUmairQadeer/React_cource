import {useState} from "react"

function App() {
  const [color,setcolor] =useState("olive")

  return (
  <div className="w-full h-screen duration-200"
 style={{backgroundColor:color}}>

  <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2  py-4">
  <div className="flex flex-wrap justify-center gap-3
  shadow-lg bg-white px-3 py-4 rounded-full shadow-lg"
>
    <button onClick={()=>setcolor("red")} className="outline-none px-4  py-1 rounded-full shadow-lg" style={{backgroundColor:"red"}}>Red</button>
    <button onClick={()=>setcolor("green")}className="outline-none px-4  py-1 rounded-full shadow-lg" style={{backgroundColor:"green"}}>Green</button>
    <button onClick={()=>setcolor("blue")} className="outline-none px-4  py-1 rounded-full shadow-lg" style={{backgroundColor:"blue"}}>Blue</button>
    <button onClick={()=>setcolor("pink")} className="outline-none px-4  py-1 rounded-full shadow-lg" style={{backgroundColor:"pink"}}>Pink</button>
    <button onClick={()=>setcolor("olive")} className="outline-none px-4  py-1 rounded-full shadow-lg" style={{backgroundColor:"olive"}}>Olive</button>
    <button onClick={()=>setcolor("purple")}className="outline-none px-4  py-1 rounded-full shadow-lg" style={{backgroundColor:"purple"}}>Purple</button>
    <button onClick={()=>setcolor("yellow")} className="outline-none px-4  py-1 rounded-full shadow-lg" style={{backgroundColor:"yellow"}}>Yellow</button>
    <button  onClick={()=>setcolor("white")} className="outline-none px-4  py-1 rounded-full shadow-lg" style={{backgroundColor:"white"}}>White</button>
</div>
  </div>
  </div>
  )
}

export default App
