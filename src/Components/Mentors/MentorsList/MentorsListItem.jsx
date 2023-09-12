/* eslint-disable react/prop-types */
import messaging from '../../../assets/images/mentors/Layer_1 (2).svg'
import { toastEmitter } from '../../../Functions/toastEmitter'
import Rating from './Rating'

function MentorsListItem({mentor,setSelectedChat}) {
 const openChatHandler=()=>{
    setSelectedChat(mentor)
    toastEmitter(`you  select ${mentor.mentorName} to chat with`)
  }
  return (
    <div className='w-64 bg-white flex flex-col  items-center rounded-2xl gap-4 p-5 relative tex-center justify-center'>
        <img src={mentor.mentorImage} alt='mentor image'/>
        <h5 className='text-[22px] font-medium text-center'>{mentor.mentorName}</h5>
        <p className='text-xl'>{mentor.mentorTrack}</p>
        <p className='text-xl font-semibold'>$35</p>
        <Rating rating={mentor.mentorRate}/>
        <button onClick={openChatHandler}><img src={messaging} alt='messaging' className='absolute top-5 right-5' /></button>
    </div>
  )
}

export default MentorsListItem