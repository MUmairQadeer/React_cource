import { onAuthStateChanged } from "firebase/auth";
import { createContext, useEffect ,useState} from "react";
import {auth} from '../components/firebase'
import { useContext } from 'react';
import { useReducer } from "react";
import { AuthContext } from "../context/AuthContext";

export const ChatContext =createContext()
export const ChatContextProvider =({children})=>{
    // const [currentUser,setCurrentUser] = useState({})
    const {currentUser} =useContext(AuthContext)

 
  const INITIAL_STATE ={
    chatId:"null",
    user:{}
  }

 
   const chatReducer =(state,action) =>{
    // console.log(typeof action.payload.uid,"payload");
    switch(action.type){
        
        case "CHANGE_USER":
            return {
                user :action.payload,
              chatId : currentUser.uid > action.payload.uid ? currentUser.uid+
              action.payload.uid :
                action.payload.uid + currentUser.uid
                
               
            };
            
            default : return state ;
    }
   }

   const [state ,dispatch] =useReducer(chatReducer ,INITIAL_STATE);

    return(
    <ChatContext.Provider value={{data:state ,dispatch}}>
        {/* {console.log("payload1223",state.userId)} */}
        {children}
    </ChatContext.Provider>
    )
};