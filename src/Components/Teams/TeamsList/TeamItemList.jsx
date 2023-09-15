/* eslint-disable react/prop-types */
import { useNavigate } from 'react-router-dom'
import {useSelector} from 'react-redux'
import {  imgLink } from '../../../api';
import JoinTeam from '../JoinTeam/JoinTeam';
import LeaveTeam from '../LeavTeam/LeaveTeam';
function TeamItemList({team}) {
    const userData=useSelector(state=>state.auth).user
   const joinedTeam=team.members?.find(user=>user.id==userData.id)
  const navigate=useNavigate()

  return (
    <div className='flex justify-between items-center'>
        <div className='flex items-center gap-2'>
        <img src={`${imgLink}/${team.imageUrl}`} alt="teamIcon" className='w-9' />
        <h5 className='text-xl  cursor-pointer' onClick={()=>navigate(`/teams/${team.id}`)}>{team.name} </h5>
        </div>
       {!joinedTeam&&<JoinTeam team={team} />}
       {joinedTeam && team.leader_id!=userData.id&&<LeaveTeam team={team}></LeaveTeam>}
    </div>
  )
}

export default TeamItemList