import { api } from "../../../api"
import { getOptions } from "../../../options"
import ProfileHeaderDetails from "./ProfileHeader/ProfileHeadeDetails"
import ProfileHeader from "./ProfileHeader/ProfileHeader"
import {useSelector} from 'react-redux'
import { useEffect } from "react"
import { useState } from "react"
import useFetch from "../../../CustomHooks/useFetch"
const id=JSON.parse(localStorage.getItem('user')).id
function UserProfile() {
  const user=useSelector(state=>state.auth.user)
  console.log(id)
  const {fetchApi:getUser}=useFetch(`${api}/users/show/${id}`,getOptions,true)
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
    <div className="w-1/3 h-[calc(100vh_-_99px)] overflow-y-auto custom-scrollbar w-[496px]">
        <ProfileHeader user={currentUser}/> 
              <ProfileHeaderDetails user={currentUser}/>
    </div>
  )
}

export default UserProfile