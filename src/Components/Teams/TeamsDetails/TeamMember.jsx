/* eslint-disable react/prop-types */
import imgProfile from '../../../assets/images/posts/comments/Ellipse 27.svg'
import {useSelector,useDispatch} from 'react-redux'
import DeleteMember from './DeleteMember'
 
function TeamMember({role,image,name,team,memberId}) {
      const userData=useSelector(state=>state.auth).user
      const dispatch=useDispatch()

        
    

  return (
    <div className='bg-white border-[1px] border-[rgba(237,237,237,1)] w-[141px] min-h-[141px] 
     center-element element-center rounded-2xl mb-0 flex-col gap-2 relative'>
        <img src={image?image:imgProfile} alt={image} />
        <p className='text-[13px] font-semibold   text-center'>{name}</p>
        <p className='text-[10px]   text-center'>{role?role:''}</p>
       {team.leader_id ==userData.id&&userData.id !=memberId && <DeleteMember memberId={memberId} team={team}/>}
    </div>
  )
}

export default TeamMember
