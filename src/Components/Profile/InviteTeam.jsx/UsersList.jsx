import { useEffect } from "react"
import { useSelector } from "react-redux"
import useGetUsers from "../../../CustomHooks/useGetUsers"
import UserItem from "./UserItem"
import ReactLoading from 'react-loading';

function UsersList({selectedTeam}) {
    const {users,fetchUsers,loading}=useGetUsers()
    const teams=useSelector(state=>state.teams).teams
    useEffect(()=>{
     fetchUsers()
    },[selectedTeam])

    if(teams.length && users && selectedTeam){
  return (
    <div className="mx-auto pt-5">
       {!loading? users.map(user=><UserItem teams={teams}  selectedTeam={selectedTeam} key={user.id} userData={user} />):         <div className="element-center center-element mx-auto w-full"><ReactLoading
          className="mx-auto"
          type="spin"
          color="#D9C6A4"
          height={30}
          width={30}
        /></div>}
    </div>
  )
}}

export default UsersList