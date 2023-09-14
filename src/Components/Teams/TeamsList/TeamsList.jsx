/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
import createTeamIcon from '../../../assets/images/teams/double-team-svgrepo-com 2.svg'
import TeamItemList from "./TeamItemList"
import { useNavigate } from "react-router-dom"
import { useEffect } from "react"
import { setTeams } from "../../../store/teams/teamsSlice"
import {useDispatch,useSelector} from 'react-redux'
import { getRandomTeamsData } from "../../../Functions/generateFakeTeams"
import SearchField from '../../GlobalComponents/SearchField'
import { fetchTeams } from '../../../store/teams/fetchTeams'
function TeamsList({isFixed}) {
  const navigate=useNavigate()
  const dispatch=useDispatch()
  const teams=useSelector(state=>state.teams).teams
  useEffect(()=>{
    dispatch(fetchTeams())

  },[])


  return (
    <div className={`w-1/4 px-6 pt-12 bg-[rgba(252,250,248,1)] border-r-[rgba(209,208,208,1)]  border-r-[1px] h-[calc(100vh_-_99px)] relative z-10
     ${!isFixed?'':'fixed top-0 right-0   '} scroll-y  overflow-y-auto custom-scrollbar  `}>
        <div className="flex gap-1">
                    <div className="w-full"><SearchField/></div>
        <button className="text-center text-[10px] w-fit" onClick={()=>navigate('createteam')}><img className="mx-auto" src={createTeamIcon}/>Create team</button>
        </div>
        <div className="flex flex-col gap-6 pt-2">
          {teams &&teams.map((team,index)=>(
           team&& <TeamItemList key={index} team={team}/>
          ))}



            </div>
    </div>
  )
}

export default TeamsList