import UserContextProvider from "./context/UserContextProvider"
import Profile from "./component/Profile"
import Login from "./component/Login"


function App() {
  

  return (
    <UserContextProvider>
     <h1>React Context Api</h1>
     <Login />
     <Profile />
    </UserContextProvider>
  )
}

export default App
