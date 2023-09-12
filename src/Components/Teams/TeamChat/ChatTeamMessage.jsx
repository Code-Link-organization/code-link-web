import profileImg from '../../../assets/images/teams/Ellipse 105.svg'
function ChatTeamMessage() {
  return (
    <div className='flex flex-col'>
        <p className='ml-[51px] px-5 py-4   bg-white w-fit rounded-xl'>When will we start in the project?</p>
        <div className='font-bold text-[9px] text-center w-fit'>
            <img src={profileImg} className='mb-[10px]' alt='profile image'/>
            <span >8:30 PM</span>
        </div>
    </div>
  )
}

export default ChatTeamMessage