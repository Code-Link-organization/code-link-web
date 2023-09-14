import { useState } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { api } from '../../../api'
import uploadIcon from '../../../assets/images/teams/Layer_1.svg'
import createTeamImg from '../../../assets/images/teams/Team work-amico (3) 3.svg'
import useFetch from '../../../CustomHooks/useFetch'
import { toastEmitter } from '../../../Functions/toastEmitter'
import { toFormData } from '../../../Functions/toFormData'
import { postOptions } from '../../../options'
import { addTeam } from '../../../store/teams/teamsSlice'
import CreateTeamInput from './CreateTeamInput'
import UploadTeamImage from './UploadTeamImage'

function CreateTeamForm() {
  const [teamForm,setTeamForm]=useState({
    nameofTeam:'',
    description:'',
    image:null })
  const user=useSelector(state=>state.auth).user  
  const dispatch=useDispatch()
  const navigate=useNavigate()
  const {fetchApi:createTeam}=useFetch(`${api}/teams/create`,postOptions)
  const submitHandler =async (e)=>{
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
  const formData=await toFormData([{name:'name',value:teamForm.nameofTeam},{name:'description',value:teamForm.description}
  ,{name:'imageUrl',value:teamForm.image}])
  const res=await createTeam(formData)
  dispatch(addTeam(res.data))
  setTeamForm({nameofTeam:'',description:'',image:null})
  navigate('/teams')
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