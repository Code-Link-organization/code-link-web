import teamImage from '../../../assets/images/teams/Rectangle 226.svg'
import TeamMembers from './TeamMembers'
import TeamDetailsOptions from './TeamDetailsOptions'

function TeamsDetails({}) {

  return (
    <div className="w-full pt-4 bg-[rgba(252,250,248,1)] px-6 relative z-10   ">

      <TeamDetailsOptions >
      <h4 className='text-center text-xl font-roboto'>Team Name</h4>
      </TeamDetailsOptions>



      <img src={teamImage} alt='Team Image' className='mx-auto mt-12' />

      <p className='mt-5 font-inter text-[15px] mb-[42px]'>Lorem ipsum is placeholder text commonly used in the graphic, print, 
        and publishing..more Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing..more</p>
        
        <span className='absolute left-0 w-full border-b-[1px] border-b-[rgba(200,174,125,1)]'></span>
        <TeamMembers/>
        <TeamMembers/>

    </div>
  )
}

export default TeamsDetails