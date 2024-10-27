import React, { useContext } from 'react'
import { useState } from 'react'
import { collection, query, where, getDocs, setDoc, } from "firebase/firestore"
import { db } from './firebase'
import { current } from '@reduxjs/toolkit'
import { AuthContext } from '../context/AuthContext'
// import {AuthContext} from '../context/AuthContext'
import { doc, serverTimestamp, updateDoc } from "firebase/firestore"
import { ChatContext } from '../context/ChatContext'
function Search() {
  const [username, setUsername] = useState("")
  const [user, setUser] = useState(null)
  const [err, setErr] = useState(false)
  const {currentUser} =useContext(AuthContext);
  const {dispatch} =useContext(ChatContext);

  const handleSearch = async () => {
    try {
      const q = query(collection(db, "users"), where("displayName", "==", username));
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        setUser(doc.data());
      });
    }
    catch (err) {
      setErr(true);
    }
  }

  const handlekey = (e) => {
    e.code === "Enter" && handleSearch();
  }

  const handleSelect = async (u) => {
    dispatch({type:"CHANGE_USER",payload:u});
    // check whether the group(chats in firestore) exists, if not create
    //create user chats in firestore

    const combinedId = currentUser.uid > user.uid ? currentUser.uid + user.uid :
      user.uid + currentUser.uid;
      // console.log("conbine", combinedId);
    try {    
      // console.log("q");
      const q =query(collection(db, "chats", combinedId, "messages"))
      const res = await getDocs(q); 
      console.log(res);


      if (res.empty) {
        console.log("create herre");
        //create a chat in chats collection
        await setDoc(doc(db, "chats", combinedId), { messages: [] });

        //create user chats
        await updateDoc(doc(db, "userChats", currentUser.uid), {
          [combinedId +".userInfo"]:{
            uid:user.uid,
            displayName:user.displayName,
            photoURL:user.photoURL
          },
          [combinedId + ".date"]: serverTimestamp(),
        });

        await updateDoc(doc(db, "userChats", user.uid), {
          [combinedId +".userInfo"]:{
            uid:currentUser.uid,
            displayName:currentUser.displayName,
            photoURL:currentUser.photoURL
          },
          [combinedId + ".date"]: serverTimestamp(),
        });


      }

    }

    catch (err) {
      console.log(err);
     }
    setUser(null);
    setUsername("");

  }
  return (
    <div className='search'>
      <div className="searchForm">
        <input type="text" placeholder='Find a user' value={username}
          onKeyDown={handlekey} onChange={(e) => setUsername(e.target.value)} />
      </div>
      {err && <span>User not found</span>}
      {user && <div className="userChat" onClick={()=>handleSelect(user)}>
        <img src={user.photoURL} alt="" />
        <div className="userChatInfo">
          <span>{user.displayName}</span>

        </div>
      </div>}
    </div>
  )
}

export default Search