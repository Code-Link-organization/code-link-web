import Header from "../../Components/StartPage/Header"
import ChatList from  '../../Components/Chat/ChatList/ChatList.jsx'
function Chat() {
  return (
    <div>
        <Header/>
        <div className="flex min-h-[calc(100vh_-_99px)]">
            <ChatList/>
            <div className="w-3/4">Chat</div>
        </div>
    </div>
  )
}

export default Chat