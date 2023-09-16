import { useState } from "react"
import { useEffect } from "react"
import { useSelector } from "react-redux"
import { api } from "../../../api"
import useFetch from "../../../CustomHooks/useFetch"
import { getOptions } from "../../../options"
import SelectTeam from "./SelectTeam"
import UsersList from "./UsersList"
import ReactLoading from 'react-loading';


let init=0
function InviteTeams() {
    const user=useSelector(state=>state.auth.user)
    const {fetchApi:getTeamsLeading,loading}=useFetch(`${api}/teams/leader-teams`,getOptions,true)
    const [hidden,setHidden]=useState(false)
    const [leadingTeams,setLeadingTeams]=useState(null)
    const [selectedTeam,setSelectedTeam]=useState(null)
    useEffect(()=>{
        if(!init && user){
        const getTeams=async()=>{
         const resData=await getTeamsLeading()
         if(resData){
            setLeadingTeams(resData.data.teams)
            setSelectedTeam(resData.data.teams[0])
         }
        }
        getTeams()
                init++
    }
    },[user])
  return (
    <>
    { !loading ?
    <div className="w-full pt-14">
      {leadingTeams &&  <SelectTeam setSelectedTeam={setSelectedTeam}  teams={leadingTeams}/>}
     {!hidden? <UsersList setHidden={setHidden} selectedTeam={selectedTeam}/>:null}
    </div>:<div className="element-center center-element mx-auto w-full"><ReactLoading
          className="mx-auto"
          type="spin"
          color="#D9C6A4"
          height={30}
          width={30}
        /></div>}
    </>

  )
}

export default InviteTeams