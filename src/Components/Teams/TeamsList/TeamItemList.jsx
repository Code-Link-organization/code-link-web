import { useNavigate } from 'react-router-dom'
import teamIcon from '../../../assets/images/teams/Rectangle 195.svg'
import { useCenterContent } from '../CenterContent/CenterContentContext';

function TeamItemList() {
    const { centerContent, setCenterContent } = useCenterContent();

  const navigate=useNavigate()
  const clickJoinHandler=()=>{
   setCenterContent('waitscreen')
   navigate('/teams/teamdetails')
  }
  return (
    <div className='flex justify-between items-center'>
        <div className='flex items-center gap-2'>
        <img src={teamIcon} alt="teamIcon" />
        <h5 className='text-xl font-roboto'>CodeSphere </h5>
        </div>
        <button className='dark-btn text-[15px] h-7 w-16 element-center shadow-none' onClick={clickJoinHandler}>Join</button>
    </div>
  )
}

export default TeamItemList