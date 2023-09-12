/* eslint-disable no-undef */
import SearchField from "../../Home/HomeSideBar/SearchField"
import createTeamIcon from '../../../assets/images/teams/double-team-svgrepo-com 2.svg'
import TeamItemList from "./TeamItemList"
import { useNavigate } from "react-router-dom"
import { useCenterContent } from "../CenterContent/CenterContentContext"
import { useEffect } from "react"
import { generateFakeTeamImage } from "../../../Functions/generateFakeTeamsImages"
import { setTeams } from "../../../store/teams/teamsSlice"
import {useDispatch,useSelector} from 'react-redux'
import { getRandomTeamsData } from "../../../Functions/generateFakeTeams"

function TeamsList({isFixed}) {
  const navigate=useNavigate()
    const { centerContent, setCenterContent } = useCenterContent();
    const dispatch=useDispatch()
    const teams=useSelector(state=>state.teams).teams
    useEffect(()=>{
      const fetchedTeams=getRandomTeamsData(20)
    dispatch(setTeams(fetchedTeams))
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
            <TeamItemList key={index} team={team}/>
          ))}



            </div>
    </div>
  )
}

export default TeamsList