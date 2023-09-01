import emojiIcon from '../../../assets/images/chat/icons8-smile-501.svg'
import attachmentIcon from '../../../assets/images/chat/icons8-attachment-50 1.svg'
import sendingIcon from '../../../assets/images/chat/icons8-sending-48 1.svg'


function SendMessage() {
  return (
    <div className="h-[91px] flex items-center justify-between px-4">
        <input className="h-full bg-transparent flex-grow px-2 outline-none focus:placeholder:text-black placeholder:transition-all placeholder:duration-300" placeholder="Type your massage here..."/>
        <div className='flex gap-8'>
            <button><img src={emojiIcon} alt='emojis'/></button>
            <button><img src={attachmentIcon} alt='attachment'/></button>
            <button className='bg-primary rounded-full h-10 w-10 element-center'><img src={sendingIcon} className='w-6' alt='send'/></button>

        </div>
    </div>
  )
}

export default SendMessage