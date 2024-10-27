import React, { useContext } from 'react'
import Messages from './Messages'
import Input from './Input'
import { ChatContext } from '../context/ChatContext'

function Chat() {
  const { data } =useContext(ChatContext)
  return (
    <div className='chat'>
        <div className="chatInfo">
            <span>{data.user?.displayName}</span>
            <div className="chatIcons">
                <img src="https://tse3.mm.bing.net/th?id=OIP.ndegNl905qx_m-GS4B1HbwHaFg&pid=Api&P=0&h=220" alt="" />
                <img src="https://tse3.mm.bing.net/th?id=OIP.lkVN1WDlcV2jQCq-9LT7-wHaIJ&pid=Api&P=0&h=220" alt="" />
                <img src="https://iconape.com/wp-content/files/im/367623/svg/more-logo-icon-png-svg.png" alt="" />
            </div>
            
        </div>
        <Messages />
        <Input/>
    </div>
  )
}

export default Chat