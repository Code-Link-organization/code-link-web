/* eslint-disable no-unused-vars */
import { useEffect } from "react"
import { useState } from "react"
import Tracks from "../../Components/Friends/Tracks"
import LandingScreen from "../../Components/GlobalComponents/LandingScreen"
import SearchField from "../../Components/GlobalComponents/SearchField"
import SideBar from "../../Components/SideBar/SideBar"
import { getFriendsFakeData } from "../../Functions/getFriendsFakeData"
import RequireAuth from "../../Protected/RequireAuth"
import Community from "./Community"

function Communities() {
  const [currentCommunity,setCurrentCommunity]=useState(null)
  const [communitiesPersons,setCommunitiesPersons]=useState(null)
  useEffect(()=>{
  setCommunitiesPersons(getFriendsFakeData(10,currentCommunity))
  },[currentCommunity])
  return (
    <RequireAuth>
    <div className="h-[calc(100vh-_99px)] flex">
      {/* Left Sidebar */}
      <div className="w-1/4 px-9 overflow-y-auto custom-scrollbar h-full pt-7">
        <SearchField  />
        <Tracks  setTrack={(track)=>setCurrentCommunity(track)} />
      </div>

      {/* Main Content */}
      <div className="h-full w-1/2">
        <LandingScreen title={'Communities'} />
      </div>

      {/* Right Sidebar */}
      {!currentCommunity?<SideBar />:
      <Community users={communitiesPersons}/>}
      
    </div>      
    </RequireAuth>

  )
}

export default Communities