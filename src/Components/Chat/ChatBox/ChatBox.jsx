import ChatBoxHeader from './ChatBoxHeader'
import MessageContainer from './MessageContainer/MessageContainer'
import SendMessage from './SendMessage'

function ChatBox() {
  return (
    <div className='w-3/4'>
     <div className='w-3/5 h-full'>
   <ChatBoxHeader/>
   <MessageContainer/>
   <SendMessage/>
     </div>
    </div>
  )
}

export default ChatBox