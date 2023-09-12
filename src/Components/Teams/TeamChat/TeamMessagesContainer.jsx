import ChatTeamMessage from "./ChatTeamMessage"

function TeamMessagesContainer() {
  return (
    <div className="px-7 flex-col flex gap-10">
        <ChatTeamMessage/>
        <ChatTeamMessage/>
        <ChatTeamMessage/>

    </div>
  )
}

export default TeamMessagesContainer