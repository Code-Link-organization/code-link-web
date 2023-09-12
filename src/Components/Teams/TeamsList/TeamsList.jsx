import SearchField from "../../Home/HomeSideBar/SearchField"
import createTeamIcon from '../../../assets/images/teams/double-team-svgrepo-com 2.svg'
import TeamItemList from "./TeamItemList"
import { useNavigate } from "react-router-dom"
import { useCenterContent } from "../CenterContent/CenterContentContext"

function TeamsList() {
  const navigate=useNavigate()
    const { centerContent, setCenterContent } = useCenterContent();

  return (
    <div className="w-1/4 px-6 pt-12 bg-[rgba(252,250,248,1)] h-screen relative z-10 ">
        <div className="flex gap-1">
                    <div className="w-full"><SearchField/></div>
        <button className="text-center text-[10px] w-fit" onClick={()=>navigate('createteam')}><img className="mx-auto" src={createTeamIcon}/>Create team</button>
        </div>
        <div className="flex flex-col gap-6 pt-2">
            <TeamItemList />
            <TeamItemList  />
            <TeamItemList  />


            </div>
    </div>
  )
}

export default TeamsList