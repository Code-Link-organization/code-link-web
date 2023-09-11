import uploadIcon from '../../../assets/images/teams/Layer_1.svg'
import createTeamImg from '../../../assets/images/teams/Team work-amico (3) 3.svg'
import CreateTeamInput from './CreateTeamInput'

function CreateTeamForm() {
  return (
    <div className='w-1/4 bg-[rgba(252,250,248,1)] !shadow-[1px_1px_4px_0px_rgba(0,0,0,0.25)] z-10 relative pt-20'>
    <div className='w-[375px] mx-auto element-center flex-col'>
            <div className='relative w-[250px] h-[250px] mx-auto  element-center rounded-full bg-white' >
        <img src={createTeamImg} alt='create team img ' className='w-[225px] h-[225px]'/>
        <img src={uploadIcon} alt='upload img icon' className='absolute right-[36px] bottom-[28px]'/>      
      </div>
      <form className='pt-8 flex flex-col '>
            <CreateTeamInput placeholder='Name of team'  />
            <CreateTeamInput placeholder=' Description of the project'/>
         <button className='btn w-[220px] block mx-auto h-14 mt-10'>Create</button>
      </form>

    </div>
    </div>
  )
}

export default CreateTeamForm