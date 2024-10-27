import React, { useState } from 'react'
import {v4 as uuid} from "uuid"
import { AuthContext } from '../context/AuthContext'
import { ChatContext } from '../context/ChatContext'
import { arrayUnion, doc, serverTimestamp, Timestamp, updateDoc } from 'firebase/firestore'
import {useContext} from 'react'
import { db } from './firebase'
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage'
import { storage } from './firebase'



function Input() {

  const [img ,setImg] = useState(null)
  const [text ,setText] = useState("")
  const [err ,setErr] = useState("")

  const {currentUser} = useContext(AuthContext)
const {data} = useContext(ChatContext)
// console.log("data1", data.chatId);

  const handleSend = async () => {
    if(img){
      const storageRef = ref(storage, uuid());  
      const uploadTask = uploadBytesResumable(storageRef, img);

      uploadTask.on((error) => {
        setErr(true)
    }, () => {
        getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
          await updateDoc(doc(db, "chats", data.chatId), {
            messages : arrayUnion({
              id:uuid(),
              text,
              senderId:currentUser.uid,
              date: Timestamp.now(),
              img: downloadURL,
            })
          })
    });
    });
    }
 
    else{
      await updateDoc(doc(db, "chats", data.chatId), {
        messages : arrayUnion({
          id:uuid(),
          text,
          senderId:currentUser.uid,
          date: Timestamp.now(),
        })
      })
    }
    try{ 
    await updateDoc(doc(db, "userChats", currentUser.uid), {
      [data.chatId + ".lastMessage"]: {
        text
      },
      [data.chatId + ".date"]: serverTimestamp(),
    });
    await updateDoc(doc(db, "userChats", data.user.uid), {
      [data.chatId + ".lastMessage"]: {
        text
      },
      [data.chatId + ".date"]: serverTimestamp(),
    });
  }
  catch(err){
    
  }
    setText("")
    setImg(null);
  }
  return (
    <div className='input'>
        <input type="text" placeholder="Type a message" 
        value={text} onChange={e=>setText(e.target.value)}/>
        <div className="send">
            <img src="https://cdn.iconscout.com/icon/premium/png-512-thumb/send-212-377647.png" alt="" />
            <input type="file" style={{display:"none"}} name="" id="file" onChange=
            {e=>setImg(e.target.files[0])} />
            <label htmlFor="file">
                <img src="https://tse4.mm.bing.net/th?id=OIP.DJQ3wv9R_TEQ2AOpMsOqEgHaHa&pid=Api&P=0&h=220" alt="" />
            </label>
            <button onClick={handleSend}>Send</button>
            {setErr && <span> {err};
            </span>}
        </div>
        </div>
  )
}

export default Input