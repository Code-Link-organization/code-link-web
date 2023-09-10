import Header from "../../Components/StartPage/Header"
import TeamsDetails from "../../Components/Teams/TeamsDetails/TeamsDetails"
import TeamsList from "../../Components/Teams/TeamsList/TeamsList"

function Teams() {
  return (
    <>
    <Header/>
    <div className="bg-white flex">
      <TeamsList/>
      <div className="flex-grow">hello</div>
      <TeamsDetails/>
    </div>
    </>
  )
}

export default Teams