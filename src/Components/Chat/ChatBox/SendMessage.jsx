/* eslint-disable react/prop-types */
import emojiIcon from '../../../assets/images/chat/icons8-smile-501.svg'
import attachmentIcon from '../../../assets/images/chat/icons8-attachment-50 1.svg'
import sendingIcon from '../../../assets/images/chat/icons8-sending-48 1.svg'
import { useState } from 'react'
import { toastEmitter } from '../../../Functions/toastEmitter'
import profileimg from '../../../assets/images/menImages/Ellipse 36 (1).svg'


function SendMessage({setMessages}) {
  const [message,setMessage]=useState('')
  const changeHandler=(e)=>{
    setMessage(e.target.value)
  }
  const sendMessageHandler=(e)=>{
    e.preventDefault()
    if(message.trim==''){
      toastEmitter(`message mustn't be empty`,'error')
      return
    }
const currentDate = new Date();
const formattedTime = currentDate.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true })
  console.log(formattedTime)
    setMessages(prev=>[...prev,{
     img:profileimg,
     text:message,
     user:true,
     time:formattedTime
    }])
    setMessage('')
    toastEmitter('message has been sent successfully')

  }

  return (
    <form onSubmit={sendMessageHandler} className="h-[91px] flex items-center justify-between px-4">
        <input onChange={changeHandler}  
         className="h-full bg-transparent flex-grow px-2 outline-none focus:placeholder:text-black placeholder:transition-all 
         placeholder:duration-300" placeholder="Type your massage here..." value={message}/>
        <div className='flex gap-8'>
            <button><img src={emojiIcon} alt='emojis'/></button>
            <button><img src={attachmentIcon} alt='attachment'/></button>
            <button className='bg-primary rounded-full h-10 w-10 element-center' type='submit'><img src={sendingIcon} className='w-6' alt='send'/></button>

        </div>
    </form>
  )
}

export default SendMessage