import useFetch from "../../../CustomHooks/useFetch"
import TeamButton from "../TeamButton"
import ReactLoading from 'react-loading';
import { useDispatch, useSelector } from "react-redux";
import { postOptions } from "../../../options";
import { leaveTeam } from "../../../store/teams/teamsSlice";

function LeaveTeam({team}) {

    const {fetchApi:leaveTeamFetch,loading}=useFetch(`http://localhost:8000/api/teams/leave/${team.id}`,postOptions)
    const user=useSelector(state=>state.auth).user    
    const dispatch=useDispatch()
    const leaveHandler =async()=>{
    const res=await leaveTeamFetch(); 
      dispatch(leaveTeam({userId:user.id, teamId:team.id}))
    
    }
  return (  
    <>  
    {!loading?<TeamButton click={leaveHandler} text='leave'/>:
     <div className="element-center center-element w-[60px] btn-hover">             <ReactLoading
          className="mx-auto"
          type="spin"
          color="#D9C6A4"
          height={20}
          width={20}
        /></div>
    }      
    </>
  )
}

export default LeaveTeam