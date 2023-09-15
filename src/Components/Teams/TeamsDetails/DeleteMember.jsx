/* eslint-disable react/prop-types */
import { useDispatch } from 'react-redux'
import { api } from '../../../api'
import deleteIcon from '../../../assets/images/teams/Group 7.svg'
import useFetch from '../../../CustomHooks/useFetch'
import { postOptions } from '../../../options'
import { deleteMember } from '../../../store/teams/teamsSlice'

function DeleteMember({team,memberId}) {
    const {fetchApi:removeMember}=useFetch(`${api}/teams/remove-member/${team.id}/${memberId}`,postOptions)
    const dispatch=useDispatch()


    const deleteMemberHandler=async()=>{
     const res=await removeMember()
     if(res.ok){
        dispatch(deleteMember({teamId:team.id, memberId}))
     }


      } 
  return (
<button onClick={deleteMemberHandler}  className='absolute right-2 top-2'><img src={deleteIcon}/></button>  )
}

export default DeleteMember