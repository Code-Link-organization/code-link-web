/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import chatIcon from '../../../assets/images/teams/Layer_1 (1).svg'
import { useCenterContent } from '../CenterContent/CenterContentContext';
import {useSelector} from 'react-redux'

function TeamDetailsOptions({children,team}) {
  const {  setCenterContent } = useCenterContent();
    const userData=useSelector(state=>state.auth).user
   const joinedTeam=team.teamMembers.find(user=>user.id==userData.id)

  return (
   <>
             <div className='mb-1 flex flex-row-reverse mb-14 justify-between'>
        {
          joinedTeam && userData.id==team.adminId?<button className=" w-[60px] h-[30px] bg-[rgba(217,198,164,1)] rounded-[10px] element-center text-xs">Edit</button>
          :
          joinedTeam && userData.id==team.adminId?<button className=" w-[60px] h-[30px] bg-[rgba(217,198,164,1)] rounded-[10px] element-center text-xs">Leave</button>:
            <button className=" w-[60px] h-[30px] bg-[rgba(217,198,164,1)] rounded-[10px] element-center text-xs">Join</button>

        }

        <button><img src={chatIcon} onClick={()=>setCenterContent('chat')} alt='chat Icon' /></button>
      </div>

      {children}
      <button className='ml-auto block'>
      </button></>
  )
}

export default TeamDetailsOptions