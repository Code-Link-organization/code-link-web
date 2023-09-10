import chatIcon from '../../../assets/images/teams/Layer_1.svg'
import teamImage from '../../../assets/images/teams/Rectangle 226.svg'
import TeamMembers from './TeamMembers'
import closeIcon from '../../../assets/images/teams/icons8-close-50 1 (1).svg'

function TeamsDetails() {
  return (
    <div className="w-[390px] pt-4 bg-[rgba(252,250,248,1)] px-4 relative ">
      <div className='mb-1 flex justify-between'>
        <button className="dark-btn w-[64px] h-[28px] element-center text-[19px] font-roboto">Edit</button>
        <button><img src={chatIcon} alt='chat Icon' /></button>
      </div>
      <h4 className='text-center text-xl font-roboto'>Team Name</h4>
      <button className='ml-auto block'>
        <img src={closeIcon} alt='close Icon' />
      </button>
      <img src={teamImage} alt='Team Image' className='mx-auto mt-12' />
      <p className='mt-5 font-inter text-[15px] mb-[42px]'>Lorem ipsum is placeholder text commonly used in the graphic, print, 
        and publishing..more Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing..more</p>
        <span className='absolute left-0 w-full border-b-[1px] border-b-[rgba(200,174,125,1)]'></span>
        <TeamMembers/>
    </div>
  )
}

export default TeamsDetails