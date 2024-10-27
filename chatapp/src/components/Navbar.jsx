import React from 'react'
import { signOut } from 'firebase/auth'
import { auth } from '../components/firebase'
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
function Navbar() {
  const {currentUser} =useContext(AuthContext);
  return (
    <div className='navbar' > 
        <span className="logo"> Chatting </span>
            <div className="user">
                <img src={currentUser.photoURL} alt="" />
                <span>{currentUser.displayName}</span>
                <button onClick={()=>signOut(auth)}>Log out</button>
            </div>
        </div>
  )
}

export default Navbar