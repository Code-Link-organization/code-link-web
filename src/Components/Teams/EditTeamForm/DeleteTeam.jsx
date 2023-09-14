/* eslint-disable no-empty */
import { useDispatch, useSelector } from "react-redux"
import { api } from "../../../api"
import useFetch from "../../../CustomHooks/useFetch"
import { postOptions } from "../../../options"
import { deleteTeam } from "../../../store/teams/teamsSlice"

function DeleteTeam({team}) {
    const {fetchApi:deleteTeamFetch}=useFetch(`${api}/teams/delete/${team?.id}`,postOptions)
    const dispatch=useDispatch()

    const deleteHandler=async()=>{
        if(confirm('are you sure to delete this team?')){
            const resData=await deleteTeamFetch()
            if(resData.ok){
          dispatch(deleteTeam(team.id))
        }


    }}
  return (
    <button onClick={deleteHandler} className="w-[60px] h-[30px] bg-[rgba(217,198,164,1)] rounded-[10px] element-center text-xs block hover:opacity-50 transition-all duration-300 mx-auto">Delete</button>
  )
}

export default DeleteTeam