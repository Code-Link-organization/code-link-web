/* eslint-disable react/prop-types */
import profileImage from '../../../assets/images/teams/Ellipse 26.svg'
import RespondToRequest from './RespondToRequest'
function JoinRequestListItem({request,setJoinRequestsList}) {
  return (
    <div>
        <div className='flex mb-5 items-center justify-center flex-wrap'>
            <img src={profileImage} alt='profile image' className='mr-3 mb-2 w-12 h-12'/>
            <div className='flex-col mr-5 mb-2'>
            <h4 className='text-[12px] font-bold'>{request.user.name}</h4> 
            <p className='text-[10px] font-semibold'>FrontEnd developer</p>   
            </div>
            <div className='flex gap-2'>
             <RespondToRequest response='accept' request={request} setJoinRequestsList={setJoinRequestsList}/>
             <RespondToRequest response='reject' request={request} setJoinRequestsList={setJoinRequestsList}/>
            </div>
        </div>
    </div>
  )
}

export default JoinRequestListItem