import { useState } from "react"
import { useEffect } from "react"
import Header from "../../Components/StartPage/Header"
import CreateTeamForm from "../../Components/Teams/CreateTeamForm/CreateTeamForm"
import JoinUs from "../../Components/Teams/JoinUs"
import TeamChat from "../../Components/Teams/TeamChat/TeamChat"
import TeamsDetails from "../../Components/Teams/TeamsDetails/TeamsDetails"
import TeamsList from "../../Components/Teams/TeamsList/TeamsList"

function Teams() {
      const [isFixed, setIsFixed] = useState(false);
      const [scroll,setScroll]=useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 99) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
      const scrollAmount = window.scrollY;
      setScroll(scrollAmount)
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <div className="relative">
      <div className="">
            <Header/>
      </div>
    <div className="bg-white flex h-screen">
      <TeamsList/>
      <TeamChat isFixed={isFixed} scroll={scroll}/>
      <TeamsDetails/>
    </div>
    </div>
  )
}

export default Teams