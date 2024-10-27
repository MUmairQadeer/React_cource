import React, { useEffect ,useState,useContext} from 'react'
import { doc, onSnapshot } from 'firebase/firestore';

import { ChatContext } from '../context/ChatContext';
import { db } from '../components/firebase';

import Message from './Message'

function Messages() {
  const [messages ,setMessages] = useState([])
  const {data} = useContext(ChatContext);

  useEffect(() => {
  const unSub =onSnapshot(doc(db,"chats",data.chatId),(doc)=>{
    doc.exists() && setMessages(doc.data().messages)
  },[messages]);
    return () =>{
      unSub()}
  }, [data.chatId]);
  // console.log(messages);
  return (
    <div className='messages'>
      {messages.map((m)=>{

        // console.log(m.text , m.id);
        return <Message key={m.id} message={m} />
      })}
     
        </div>
  )
}

export default Messages