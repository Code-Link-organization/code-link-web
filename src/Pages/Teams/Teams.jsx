import { useState } from "react"
import { useEffect } from "react"
import { CenterContentProvider } from "../../Components/Teams/CenterContent/CenterContentContext"

import TeamsCenterContent from "../../Components/Teams/TeamsCenterContent"
import TeamsList from "../../Components/Teams/TeamsList/TeamsList"
import TeamsSideBar from "../../Components/Teams/TeamsSideBar"

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
    <CenterContentProvider>
    <div className="relative">

    <div className=" flex h-screen">
      <TeamsList/>
      <TeamsCenterContent isFixed={isFixed} scroll={scroll}  />
      <TeamsSideBar  />
    </div>
    </div>
    </CenterContentProvider>

  )
}

export default Teams