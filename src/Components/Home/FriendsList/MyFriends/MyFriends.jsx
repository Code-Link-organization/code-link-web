import MyFriendItem from "./MyFriendItem"

function MyFriends() {
  return (
    <div className="pt-2">
            <h3 className=" font-bold text-xl text-customblack">My Friends</h3>
            <div>
              <MyFriendItem/>
              <MyFriendItem/>
              <MyFriendItem/>

            </div>
    </div>
  )
}

export default MyFriends