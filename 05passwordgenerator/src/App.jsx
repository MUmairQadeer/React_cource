import { useState, useCallback, useEffect, useRef } from "react"


function App() {
  const [length, setlength] = useState(8)
  const [numberAllowed, setnumberAllowed] = useState(false)
  const [charAllowed, setcharAllowed] = useState(false)
  const [password, setpassword] = useState("")

  //use of ref hook
  const passwordref = useRef(null)

  const passwordgenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numberAllowed) {
      str += "0123456789"
    }
    if (charAllowed) {
      str += "!@$%&*()_=+{}[]?/"
    }

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length )
      pass += str.charAt(char)
    }
    setpassword(pass)


  }, [length, numberAllowed, charAllowed
    , setpassword
  ])

  const copyPasswordToClipboard = useCallback(() => {
    passwordref.current?.select();
    passwordref.current?.setSelectionRange(0, 100)
    window.navigator.clipboard.writeText(password)
  }, [password])


  useEffect(() => {
    passwordgenerator()
  }, [length, numberAllowed, charAllowed, passwordgenerator])
  return (
    <>
      <h1 className="text-center  text-white text-4xl my-4">Password Generator
      </h1>
      <div className="w-full  max-w-md mx-auto shadow-md rounded-lg 
     px-5 py-5 my-8 text-orange-500 bg-gray-500">
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input type="text" value={password} ref={passwordref}
            className="outline-none w-full py-1 px-3" placeholder="password"
            readOnly name="" id="" />
          <button onClick={copyPasswordToClipboard} className="
      hover:bg-blue-800 hover:shadow-lg oultine-none bg-blue-500 text-white px-3 py-0.5
      shrink-0">Copy</button>
        </div>
        <div className="flex  gap-x-3 ">
          <input className="cursor-pointer" type="range" name="" id="" min={5} max={100}
            value={length}
            onChange={(e) => { setlength(e.target.value) }} />
          <label htmlFor="">Length: {length}</label>


          <div className="flex items-center gap-x-1">
            <input type="checkbox"
              className="cursor-pointer"
              defaultChecked={numberAllowed}
              id="numberinput"
              onChange={()=>{setnumberAllowed((prev) => !prev)}} />
            <label htmlFor="numberinput">Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input type="checkbox"
              className="cursor-pointer"
              defaultChecked={charAllowed}
              id="charinput"
              onChange={
                ()=>{
                  setcharAllowed((prev)=> !prev)
                }
              }/>
            <label htmlFor="charinput">Character</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
