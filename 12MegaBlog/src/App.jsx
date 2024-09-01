import React ,{useState ,useEffect} from 'react'
import {useDispatch} from 'react-redux'
import authService from "./appwrite/auth"
import {login,logout} from "./store/authSlice"

import conf from './conf/conf'
import './App.css'

import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

function App() {
  const [loading ,setLoading] =useState(true)
  const dispatch =useDispatch()

  useEffect (()=>{
    authService.getCurrentUser()
    .then((userData)=>{
      if(userData){
        dispatch(login({userData}))
      }
      else{
        dispatch(logout())
      }
    })
    .finally(()=> setLoading(false))
  },[])

 return !loading ?(
  <div className='main-h-screen flex flex-wrap content-between
  bg-gray-400'>
    <div className="w-full-block">
      <Header />
      <main>
        {/* <Outlet /> */}
      </main>
      <Footer />
    </div>
  </div>
 ) : console.log("loading")
}

export default App
