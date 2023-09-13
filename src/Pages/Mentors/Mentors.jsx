import { useState } from "react"
import MentorsChat from "../../Components/Mentors/MentorsChat/MentorsChat"
import MentorsList from "../../Components/Mentors/MentorsList/MentorsList"
import SideBar from "../../Components/SideBar/SideBar"
import RequireAuth from "../../Protected/RequireAuth"

function Mentors() {
    const [selectedChat,setSelectedChat]=useState(null)

  return (
    <RequireAuth>
    <div className="!h-[calc(100vh_-_99px)] overflow-y-hidden flex">

      {selectedChat?<MentorsChat selectedChat={selectedChat} />:<div className="w-1/4 h-full center-element element-center text-2xl font-bold"><h2>Chat</h2></div>}
      <MentorsList setSelectedChat={setSelectedChat}/>
      <SideBar/>
      
    </div>      
    </RequireAuth>

  )
}

export default Mentors