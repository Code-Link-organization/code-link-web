import { api } from "../../../api"
import { getOptions } from "../../../options"
import ProfileHeaderDetails from "./ProfileHeader/ProfileHeadeDetails"
import ProfileHeader from "./ProfileHeader/ProfileHeader"
import {useSelector} from 'react-redux'
import { useEffect } from "react"
import { useState } from "react"
import useFetch from "../../../CustomHooks/useFetch"
import ReactLoading from 'react-loading';

function ProfileData({user}) {
  const {fetchApi:getUser,loading}=useFetch(`${api}/users/show/${user.id}`,getOptions,true)
  const [currentUser,setCurrentUser]=useState(null)
  useEffect(()=>{
    const fetchData=async()=>{
     const res=await getUser()
     if(res.ok){
      setCurrentUser(res.data.user)
      
     }
    } 
    if(user){
      fetchData()
    }

  },[user])
  if(currentUser)  
  return (
    <div className="h-[calc(100vh_-_99px)] overflow-y-auto custom-scrollbar w-[496px]">
    {!loading? <div className="w-full ">
        <ProfileHeader user={currentUser}/> 
              <ProfileHeaderDetails user={currentUser}/>
    </div>:<div className="element-center center-element  h-full w-full"><ReactLoading
          className="mx-auto"
          type="spin"
          color="#D9C6A4"
          height={40}
          width={40}
        /></div>}
    </div>

  )
}

const UserProfile=()=>{
    const user=useSelector(state=>state.auth.user)

if(user)
  return <ProfileData user={user}/>
}
export default UserProfile