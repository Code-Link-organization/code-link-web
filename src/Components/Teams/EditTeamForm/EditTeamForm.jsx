/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import uploadIcon from '../../../assets/images/teams/Layer_1.svg'
import createTeamImg from '../../../assets/images/teams/Team work-amico (3) 3.svg'
import { toastEmitter } from '../../../Functions/toastEmitter'
import { addTeam } from '../../../store/teams/teamsSlice'
import CreateTeamInput from '../CreateTeamForm/CreateTeamInput'
import UploadTeamImage from '../CreateTeamForm/UploadTeamImage'
import {useParams} from 'react-router-dom'
import { useEffect } from 'react'
import { imgLink } from '../../../api'
import DeleteTeam from './DeleteTeam'

function EditTeamForm() {
    const {teamId}=useParams()
  const [teamForm,setTeamForm]=useState({
    nameofTeam:'',
    description:'',
    image:null })
  const user=useSelector(state=>state.auth).user
  const teams=useSelector(state=>state.teams).teams;
  const team=teams.find(team=>team.id==teamId)

  useEffect(()=>{
    setTeamForm({
        nameofTeam:team.name,
        description:team.description,
        image:team.imageUrl})

  },[])
  const dispatch=useDispatch()
  const navigate=useNavigate()
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
  dispatch(addTeam({teamData:teamForm,admin:user}))
  toastEmitter('team edited Successfully','success')
  setTeamForm({nameofTeam:'',description:'',image:null})
  navigate('/teams')
}
  return (
    <div className='w-full bg-[rgba(252,250,248,1)]  z-10 relative pt-20'>
            <DeleteTeam team={team?team:null}/>
    <form onSubmit={submitHandler} className='w-[375px] mx-auto element-center flex-col'>

            <div className='relative w-[250px] h-[250px] mx-auto  element-center rounded-full bg-white' >
        <img src={`${imgLink}/${teamForm.image}`} alt='create team img ' className='w-[225px] h-[225px]'/>

        <div  alt='upload img icon' className='absolute right-[36px] bottom-[28px]'>
          <UploadTeamImage setTeamForm={setTeamForm} teamForm={teamForm} value='image' uploadIcon={uploadIcon}/></div>   

      </div>
      <div className='pt-8 flex flex-col '>
            <CreateTeamInput placeholder='Name of team' value={'nameofTeam'}  setTeamForm={setTeamForm}  teamForm={teamForm} />
            <CreateTeamInput placeholder=' Description of the project' value={'description'} teamForm={teamForm} setTeamForm={setTeamForm}/>
         <button className='btn w-[220px] block mx-auto h-14 mt-10'>Save</button>
      </div>

    </form>
    </div>
  )
}

export default EditTeamForm