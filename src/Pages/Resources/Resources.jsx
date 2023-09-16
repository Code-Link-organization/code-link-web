import { useState } from "react";
import Tracks from "../../Components/Individuals/Tracks";
import LandingScreen from "../../Components/GlobalComponents/LandingScreen";
import SearchField from "../../Components/GlobalComponents/SearchField";
import SideBar from "../../Components/SideBar/SideBar";
import ResourcesList from "./ResourcesList/ResourcesList";
import RequireAuth from '../../Protected/RequireAuth'

function Resources() {
  const [currentResource,setCurentResource]=useState(null)
  return (
   <RequireAuth>
    <div className="h-[calc(100vh-_99px)] flex">
      {/* Left Sidebar */}
      <div className="w-1/4 px-9 overflow-y-auto custom-scrollbar h-full pt-7">
        <SearchField  />
        <Tracks setTrack={(track)=>setCurentResource(track)} />
      </div>

      {/* Main Content */}
      <div className="h-full w-1/2">
        <LandingScreen title={'Resources'} />
      </div>

      {/* Right Sidebar */}
      {!currentResource?
      <SideBar />:
      <ResourcesList currentResource={currentResource}/>
      }
    </div>

   </RequireAuth>
  );
}

export default Resources;
