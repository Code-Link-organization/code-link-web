import deleteIcon from '../../../assets/images/teams/Group 7.svg'
import imgProfile from '../../../assets/images/posts/comments/Ellipse 27.svg'
import {useSelector} from 'react-redux'
 
function TeamMember({role,image,name,team,memberId}) {
      const userData=useSelector(state=>state.auth).user
    

  return (
    <div className='bg-white border-[1px] border-[rgba(237,237,237,1)] w-[141px] min-h-[141px] 
     center-element element-center rounded-2xl mb-8 flex-col gap-2 relative'>
        <img src={image?image:imgProfile} alt={image} />
        <p className='text-[13px] font-semibold   text-center'>{name}</p>
        <p className='text-[10px]   text-center'>{role}</p>
       {team.adminId ==userData.id&&userData.id !=memberId && <button className='absolute right-2 top-2'><img src={deleteIcon}/></button>}
    </div>
  )
}

export default TeamMember
