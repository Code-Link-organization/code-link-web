/* eslint-disable react/prop-types */
import { useState } from "react"
import { imgLink } from "../../../api"
import InviteButton from "./InviteButton"

function UserItem({userData,selectedTeam,teams}) {
   const joinedTeam=teams.find(team=>    team.id==selectedTeam.id).members.find(member=>{
    return member.pivot.user_id==userData.id})
  const [hidden,setHidden] =useState(null) 
   
   if(joinedTeam) return null
  return (
    <div className="flex items-center justify-between mx-auto w-[300px] my-4">
        <div className="flex item-center gap-2 justify-center">
        <img className="w-[50px] h-[50px] rounded-full"  src={`${imgLink}/${userData.imageUrl}`} />    
        <div>
         <h5 className="text-[13px] font-semibold">{userData.name}</h5>
         <p className="text-[10px]">{userData.track}</p>   
        </div>
        </div>
      {hidden?null:  <InviteButton user={userData} setHidden={setHidden} team={selectedTeam}/>}
    </div>
  )
}

export default UserItem