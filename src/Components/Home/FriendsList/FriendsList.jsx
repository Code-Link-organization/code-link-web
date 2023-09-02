import MyFriends from "./MyFriends/MyFriends"
import Requests from "./Requests/Requests"

function FriendsList() {
  return (
    <div className="w-1/4 p-4 ">
    <Requests/>
    <MyFriends/>
    </div>
  )
}

export default FriendsList