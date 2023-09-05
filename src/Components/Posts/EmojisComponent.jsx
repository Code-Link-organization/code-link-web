import emojisIcon from '../../assets/images/posts/icons8-smile-50 (1) 2.svg'
import Picker from '@emoji-mart/react'
import { useState } from 'react'
import data from '@emoji-mart/data'


function EmojisComponent() {
      const [showEmoji,setShowEmoji]=useState(false)

       const emojiHandler=(e)=>{
  console.log(e)
 }  

  return (
             <div className='relative'>
    <button><img src={emojisIcon} alt='emojis' onClick={()=>{setShowEmoji(!showEmoji)}}/></button>
   {showEmoji&&<div className='absolute  top-[40px] right-[40px]   emojis'> <Picker   emojiSize={12} onEmojiSelect={emojiHandler} data={data}/></div>}
          </div> 
  )
}

export default EmojisComponent