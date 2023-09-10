import Header from "../../Components/StartPage/Header"
import TeamsList from "../../Components/Teams/TeamsList/TeamsList"

function Teams() {
  return (
    <>
    <Header/>
    <div className="bg-white">
      <TeamsList/>
    </div>
    </>
  )
}

export default Teams