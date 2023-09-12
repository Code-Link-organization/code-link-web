import { useState } from 'react'
import uploadIcon from '../../../assets/images/teams/Layer_1.svg'
import createTeamImg from '../../../assets/images/teams/Team work-amico (3) 3.svg'
import { toastEmitter } from '../../../Functions/toastEmitter'
import CreateTeamInput from './CreateTeamInput'
import UploadTeamImage from './UploadTeamImage'

function CreateTeamForm() {
  const [teamForm,setTeamForm]=useState({
    nameofTeam:'',
    description:'',
    image:null
  })
  const submitHandler = (e)=>{
  e.preventDefault()
  if(!teamForm.image){
        toastEmitter('upload image is required','error')
      return
  }
  if(teamForm.nameofTeam.trim()==='' | teamForm.description.trim()==='' )
  {
    toastEmitter('all fields are required','error')
  return
  }
  console.log(teamForm)

}
  return (
    <div className='w-1/4 bg-[rgba(252,250,248,1)]  z-10 relative pt-20'>
    <form onSubmit={submitHandler} className='w-[375px] mx-auto element-center flex-col'>
            <div className='relative w-[250px] h-[250px] mx-auto  element-center rounded-full bg-white' >
        <img src={teamForm.image?URL.createObjectURL(teamForm.image):createTeamImg} alt='create team img ' className='w-[225px] h-[225px]'/>

        <div  alt='upload img icon' className='absolute right-[36px] bottom-[28px]'>
          <UploadTeamImage setTeamForm={setTeamForm} teamForm={teamForm} value='image' uploadIcon={uploadIcon}/></div>   

      </div>
      <div className='pt-8 flex flex-col '>
            <CreateTeamInput placeholder='Name of team' value={'nameofTeam'}  setTeamForm={setTeamForm}  teamForm={teamForm} />
            <CreateTeamInput placeholder=' Description of the project' value={'description'} teamForm={teamForm} setTeamForm={setTeamForm}/>
         <button className='btn w-[220px] block mx-auto h-14 mt-10'>Create</button>
      </div>

    </form>
    </div>
  )
}

export default CreateTeamForm