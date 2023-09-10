import SearchField from "../../Home/HomeSideBar/SearchField"
import createTeamIcon from '../../../assets/images/teams/double-team-svgrepo-com 2.svg'
import TeamItemList from "./TeamItemList"

function TeamsList() {
  return (
    <div className="w-[390px] px-6 pt-12 bg-[rgba(252,250,248,1)] h-screen">
        <div className="flex gap-1">
                    <div className="w-[264px]"><SearchField/></div>
        <button className="text-center text-[10px] w-fit"><img className="mx-auto" src={createTeamIcon}/>Create team</button>
        </div>
        <div className="flex flex-col gap-6 pt-2">
            <TeamItemList/>
            <TeamItemList/>
            <TeamItemList/>
            <TeamItemList/>
            <TeamItemList/>
            <TeamItemList/>
            <TeamItemList/>
            <TeamItemList/>
            <TeamItemList/>
            <TeamItemList/>
            <TeamItemList/>
            <TeamItemList/>
            <TeamItemList/>

            </div>
    </div>
  )
}

export default TeamsList