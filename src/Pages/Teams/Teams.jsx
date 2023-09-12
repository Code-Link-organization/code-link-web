import { useState } from "react"
import { useEffect } from "react"
import { CenterContentProvider } from "../../Components/Teams/CenterContent/CenterContentContext"

import TeamsCenterContent from "../../Components/Teams/TeamsCenterContent"
import TeamsList from "../../Components/Teams/TeamsList/TeamsList"
import TeamsSideBar from "../../Components/Teams/TeamsSideBar"

function Teams() {
      const [scroll,setScroll]=useState(false)



  return (
    <CenterContentProvider>

    <div className=" flex h-[calc(100vh_-_99px)] overflow-y-hidden">
      <TeamsList />
      <TeamsCenterContent   />
      <TeamsSideBar  />
    </div>
    </CenterContentProvider>

  )
}

export default Teams