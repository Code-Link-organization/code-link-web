import Tracks from "../../Components/Friends/Tracks"
import LandingScreen from "../../Components/GlobalComponents/LandingScreen"
import SearchField from "../../Components/GlobalComponents/SearchField"
import SideBar from "../../Components/SideBar/SideBar"
import Community from "./Community"

function Communities() {
  return (
    <div className="h-[calc(100vh-_99px)] flex">
      {/* Left Sidebar */}
      <div className="w-1/4 px-9 overflow-y-auto custom-scrollbar h-full pt-7">
        <SearchField  />
        <Tracks  />
      </div>

      {/* Main Content */}
      <div className="h-full w-1/2">
        <LandingScreen title={'Communities'} />
      </div>

      {/* Right Sidebar */}
      {/* <SideBar /> */}
      <Community/>
      
    </div>
  )
}

export default Communities