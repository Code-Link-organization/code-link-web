import MyFriends from "./MyFriends/MyFriends"
import Requests from "./Requests/Requests"

function FriendsList({isFixed}) {
  return (
    <div className="w-1/4">
    <div className={`w-full  ${!isFixed?'':'fixed !w-1/4 top-0 transform    '} `}>
    <Requests/>
    </div>
    </div>

  )
}

export default FriendsList