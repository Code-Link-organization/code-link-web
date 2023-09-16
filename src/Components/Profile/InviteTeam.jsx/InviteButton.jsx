/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import useFetch from "../../../CustomHooks/useFetch"
import { toFormData } from "../../../Functions/toFormData"
import { postOptions } from "../../../options"
import ReactLoading from 'react-loading';


function InviteButton({team,user,setHidden}) {
    const {fetchApi:joinTeam,loading}=useFetch(`http://localhost:8000/api/invite-requests/invite/${team.id}`,postOptions)
    const joinTeamHandler=async()=>{
        const resData= await joinTeam(toFormData([{name:'user_id',value:user.id}]));
        if(resData.ok){
          setHidden(true)
        }
    }

    
  return (
    
        <div className=" min-w-[30px] h-8">
        {!loading?
            <button onClick={joinTeamHandler} className="btn  w-16 h-8 !p-0 min-w-[30px] text-xs">Invite</button>:
         <div className="element-center center-element mx-auto w-full"><ReactLoading
          className="mx-auto"
          type="spin"
          color="#D9C6A4"
          height={30}
          width={30}
        /></div>

        }
        </div>
    
  )
}

export default InviteButton