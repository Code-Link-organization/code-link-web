import ChatBoxHeader from './ChatBoxHeader'
import MessageContainer from './MessageContainer/MessageContainer'
import PersonDetails from './PersonDetails'
import SendMessage from './SendMessage'

function ChatBox() {
  return (
    <div className='w-3/4 flex'>
     <div className='w-2/3 h-full '>
   <ChatBoxHeader/>
   <MessageContainer/>
   <SendMessage/>

     </div>
     <PersonDetails/>
    </div>
  )
}

export default ChatBox