import Header from "../../Components/StartPage/Header"
import CreateTeamForm from "../../Components/Teams/CreateTeamForm/CreateTeamForm"
import JoinUs from "../../Components/Teams/JoinUs"
import TeamsDetails from "../../Components/Teams/TeamsDetails/TeamsDetails"
import TeamsList from "../../Components/Teams/TeamsList/TeamsList"

function Teams() {
  return (
    <>
    <Header/>
    <div className="bg-white flex h-screen">
      <TeamsList/>
      <JoinUs/>
      <TeamsDetails/>
    </div>
    </>
  )
}

export default Teams