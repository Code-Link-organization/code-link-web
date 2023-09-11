import teamIcon from '../../../assets/images/teams/Rectangle 195.svg'

function TeamChatHeader() {
  return (
    <header className='flex justify-between p-8'> 
    <img src={teamIcon} alt='team icon' className='w-8'/>
    <h4 className='text-2xl font-semibold'>Team Name</h4>        
    </header>
  )
}

export default TeamChatHeader