import { useDispatch, useSelector } from "react-redux"
import { CenterContentProvider } from "../../Components/Teams/CenterContent/CenterContentContext"
import TeamsCenterContent from "../../Components/Teams/TeamsCenterContent"
import TeamsList from "../../Components/Teams/TeamsList/TeamsList"
import TeamsSideBar from "../../Components/Teams/TeamsSideBar"
import RequireAuth from "../../Protected/RequireAuth"
import ReactLoading from 'react-loading';
import { useEffect } from "react"
import { fetchTeams } from "../../store/teams/fetchTeams"


function Teams() {
      const loading=useSelector(state=>state.teams).loading
  const dispatch=useDispatch()
  useEffect(()=>{
    dispatch(fetchTeams())

  },[])


  return (
    <RequireAuth>
    <CenterContentProvider>

    {!loading?<div className=" flex h-[calc(100vh_-_99px)] overflow-y-hidden">
      <TeamsList />
      <TeamsCenterContent   />
      <TeamsSideBar  />
    </div> :      <div className="element-center center-element h-[calc(100vh_-_99px)] w-full">             <ReactLoading
          className="mx-auto"
          type="spin"
          color="#D9C6A4"
          height={50}
          width={50}
        /></div> }
    </CenterContentProvider>

    </RequireAuth>
  )
}

export default Teams