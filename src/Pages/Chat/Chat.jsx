import Header from "../../Components/StartPage/Header"
import ChatList from  '../../Components/Chat/ChatList/ChatList.jsx'
import ChatBox from "../../Components/Chat/ChatBox/ChatBox"
function Chat() {
  return (
    <div>
        <Header/>
        <div className="flex h-[calc(100vh_-_99px)]">
            <ChatList/>
           <ChatBox/>
        </div>
    </div>
  )
}

export default Chat