import teamIcon from '../../../assets/images/teams/Rectangle 195.svg'
import phone from '../../../assets/images/teams/icons8-phone-96 2.svg'
import video from '../../../assets/images/teams/Mask group.svg'

function TeamChatHeader() {
  return (
    <header className='flex justify-between p-8'> 
    <img src={teamIcon} alt='team icon' className='w-8'/>
    <h4 className='text-xl font-semibold  text-center font-shd text-shadow'>Team Name</h4>
    <div className='flex gap-4 '>
    <div className='element-center bg-[rgba(217,198,164,1)] w-10 h-10 rounded-full'>
     <img src={phone} alt='phone' className='w-5' />    
    </div>      

    <div className='element-center bg-[rgba(217,198,164,1)] w-10 h-10 rounded-full'>
     <img src={video} alt='video' className='w-5' />    
    </div>  
    </div>        
    </header>
  )
}

export default TeamChatHeader