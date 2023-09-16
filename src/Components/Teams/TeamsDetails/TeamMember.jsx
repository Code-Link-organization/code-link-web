/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import noImg from '../../../assets/images/profile/no-profile-picture.svg'
import {useSelector} from 'react-redux'
import DeleteMember from './DeleteMember'
import { imgLink } from '../../../api'
import {useNavigate} from 'react-router-dom'
 
function TeamMember({role,image,name,team,memberId,member}) {
      const userData=useSelector(state=>state.auth).user
      const navigate=useNavigate()
        
    

  return (
    <div className='bg-white border-[1px] border-[rgba(237,237,237,1)] w-[141px] min-h-[141px] 
     center-element element-center rounded-2xl mb-0 flex-col gap-2 relative'>
        <img src={member.imageUrl?`${imgLink}/${member.imageUrl}`:noImg} alt={image}  className='w-14 h-14 rounded-full'/>
        <p className='text-[13px] font-semibold   text-center cursor-pointer' onClick={()=>navigate(`/visit/${member.pivot.user_id}`)}>{name}</p>
        <p className='text-[10px]   text-center'>{role?role:''}</p>
       {team.leader_id ==userData.id&&userData.id !=memberId && <DeleteMember memberId={memberId} team={team}/>}
    </div>
  )
}

export default TeamMember
