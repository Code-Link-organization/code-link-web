/* eslint-disable react/prop-types */
import { useNavigate } from 'react-router-dom'
import { useCenterContent } from '../CenterContent/CenterContentContext';
import {useSelector} from 'react-redux'
import {  imgLink } from '../../../api';
function TeamItemList({team}) {
    const {  setCenterContent } = useCenterContent();
    const userData=useSelector(state=>state.auth).user
   const joinedTeam=team.members?.find(user=>user.id==userData.id)
  const navigate=useNavigate()
  const clickJoinHandler=()=>{
   setCenterContent('waitscreen')
   navigate(`/teams/${team.id}`)
  }
  return (
    <div className='flex justify-between items-center'>
        <div className='flex items-center gap-2'>
        <img src={`${imgLink}/${team.imageUrl}`} alt="teamIcon" className='w-9' />
        <h5 className='text-xl  cursor-pointer' onClick={()=>navigate(`/teams/${team.id}`)}>{team.name} </h5>
        </div>
       {!joinedTeam&& <button className='bg-[rgba(217,198,164,1)] rounded-[10px] text-[12px] font-medium w-[60px] h-[30px]  element-center shadow-none' onClick={clickJoinHandler}>Join</button>}
    </div>
  )
}

export default TeamItemList