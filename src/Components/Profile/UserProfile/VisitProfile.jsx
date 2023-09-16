import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { api } from "../../../api"
import useFetch from "../../../CustomHooks/useFetch"
import { getOptions } from "../../../options"
import ProfileHeaderDetails from "./ProfileHeader/ProfileHeadeDetails"
import ProfileHeader from "./ProfileHeader/ProfileHeader"
import ReactLoading from 'react-loading';


function VisitProfile() {
    const {userId}=useParams()
    console.log(userId)
    const {fetchApi:getUser,loading}=useFetch(`${api}/users/show/${userId}`,getOptions,true)
    const user=useSelector(state=>state.auth.user)
    const [currentUser,setCurrentUser]=useState(null)
    useEffect(()=>{
        if(user && user.token){
        const fetchUser=async()=>{
            const resData=await getUser()
            setCurrentUser(resData.data.user)
        }
        fetchUser()}

    },[userId,user])
    if(currentUser){
  return (
     <div className=" mx-auto w-[496px]">
    {!loading ? <div className="w-full ">
        <ProfileHeader  user={currentUser}/> 
              <ProfileHeaderDetails visit={true} user={currentUser}/>
    </div>:<div className="element-center center-element  h-full w-full"><ReactLoading
          className="mx-auto"
          type="spin"
          color="#D9C6A4"
          height={40}
          width={40}
        /></div>}
    </div>
  )
}}

export default VisitProfile