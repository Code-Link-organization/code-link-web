/* eslint-disable react/prop-types */
import { useDispatch } from "react-redux"
import { api } from "../../../api"
import useFetch from "../../../CustomHooks/useFetch"
import { postOptions } from "../../../options"
import ReactLoading from 'react-loading';

import {useNavigate} from 'react-router-dom'
import { addMember } from "../../../store/teams/teamsSlice";

function RespondToRequest({response,request,setJoinRequestsList}) {
    const {fetchApi: respondToRequest,loading}=useFetch(`${api}/join-requests/${response}-join/${request.id}`,postOptions)
    const dispatch=useDispatch()
    const clickHandler=async()=>{
    const resData= await respondToRequest()
    if(resData.ok ){
        setJoinRequestsList(prevRequests=>{
            const updated=prevRequests.filter(req=>request.id!=req.id)
            return updated
        })
        if(response=='accept'){
          dispatch(addMember({newMember:resData.data.accepted_user,id:resData.data.team_id}))
        }
 
        
    }
    }
  return (
    <>   {loading ?<div className="element-center center-element w-[60px]">             <ReactLoading
          className="mx-auto"
          type="spin"
          color="#D9C6A4"
          height={20}
          width={20}
        /></div>:
         <div>
                    {response==='accept'?<button onClick={clickHandler} className='bg-primary text-white px-2 py-1 rounded-xl hover:bg-white hover:text-primary 
            transition-all duration-300 border-2 border-solid border-transparent hover:border-primary h-[40px]'>Accept</button>:
            <button onClick={clickHandler}  className='bg-white text-primary px-4 py-2 rounded-xl hover:bg-primary hover:text-white 
            transition-all duration-300 border-2 border-solid border-primary h-[40px] '>Reject</button>   } 
         </div>
         }  
    </>
  )
}

export default RespondToRequest