import React, { useRef ,useEffect } from 'react'
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { ChatContext } from '../context/ChatContext';
function Message({message}) {
  console.log("Message component:" ,message);
const {currentUser} = useContext(AuthContext)
const {data} = useContext(ChatContext)
const ref =useRef();
//  console.log(message.date.toDate(),"message");
useEffect(() => {
  ref.current?.scrollIntoView({behavior:"smooth"})
}, [message]);
  return (
    <div ref={ref} className={(`message ${message.senderId === currentUser.uid && "owner"}`)}>
      <div className="messageInfo">
        <img src={Message.senderId === currentUser.uid ?
           currentUser.photoURL : data.user.photoURL} />
    
      </div>
      <div className="messageContent">
        <p>{message.text}<span>{message.date &&  message.date.toDate().toLocaleString()}</span></p>
        {message.img && <img src={message.img} /> }
        
       </div>
      
    </div>
  )
}

export default Message