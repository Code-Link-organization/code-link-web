import Header from "../../Components/StartPage/Header"
import ChatList from  '../../Components/Chat/ChatList/ChatList.jsx'
import ChatBox from "../../Components/Chat/ChatBox/ChatBox"
import ChatTeamMessage from "../../Components/Teams/TeamChat/ChatTeamMessage"
function Chat() {
  return (
    <div>
        <Header/>
        <div className="flex h-[calc(100vh_-_99px)]">
            <ChatList/>
           <ChatBox/>
        </div>
        <div>
          <ChatTeamMessage/>
        </div>
    </div>
  )
}

export default Chat