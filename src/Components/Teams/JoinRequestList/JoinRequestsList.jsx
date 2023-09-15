/* eslint-disable react/prop-types */
import { useState } from "react"
import { useEffect } from "react"
import { api } from "../../../api"
import useFetch from "../../../CustomHooks/useFetch"
import { getOptions } from "../../../options"
import JoinRequestListItem from "./JoinRequestListItem"

function JoinRequestsList({teamId}) {
    const {fetchApi:getRequests}=useFetch(`${api}/join-requests/${teamId}`,getOptions,true)
    const [joinRequestsList,setJoinRequestsList]=useState([]);
    
     
    useEffect(()=>{
      setJoinRequestsList([])
        const fetchRequests=async()=>{
            const response=await getRequests()
            setJoinRequestsList(response.data.join_requests)
        }
        fetchRequests()

    },[teamId])
  return (
    <>
   {joinRequestsList.length?  <div>
        <h2 className=" font-semibold text-2xl py-6 text-center">Requests</h2>
        <div>
      
      { joinRequestsList.map(request=><JoinRequestListItem setJoinRequestsList={setJoinRequestsList} teamId={teamId} key={request.id} request={request}/>)}
        </div>
    </div>:null}    
    </>

  )
}

export default JoinRequestsList