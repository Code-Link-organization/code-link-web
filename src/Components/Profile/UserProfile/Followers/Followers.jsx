import { useState } from "react"
import { useEffect } from "react"
import { getFriendsFakeData } from "../../../../Functions/getFriendsFakeData"
import Follower from "./Follower"

export default function Followers() {
    const [followers,setFollowers]=useState([])
    useEffect(()=>{
        const generatedFollowers=getFriendsFakeData(6)
        setFollowers(generatedFollowers)
    },[])
  return (
    <div className="bg-white pt-4  w-full">
     <span className="border-t-[rgba(251,249,247,1)] border-t-[11px] absolute left-0 w-full"></span>
     <div className="flex justify-between pt-5">
     <h4 className="text-base font-semibold">Followers</h4>   
     <button className="font-bold text-[rgba(140,122,88,1)] text-[16px]">View All</button>        
     </div>
     <div className="flex justify-between pt-5">
    {followers.map(follower=><Follower userName={follower.userName}  userImg={follower.userImg} key={follower.id}/>)}
     </div>
    </div>
  )
}
