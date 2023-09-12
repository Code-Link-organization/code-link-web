import JoinUs from "./JoinUs"
import WaitingScreen from "./WaitingScreen"
import TeamChat from './TeamChat/TeamChat'
import { useCenterContent } from "./CenterContent/CenterContentContext";
function TeamsCenterContent({isFixed,scroll}) {
      const { centerContent, setCenterContent } = useCenterContent();


    if(!centerContent) {
    return <JoinUs/>
    }
    if(centerContent=='waitscreen'){
        return <WaitingScreen/>
    }
    if(centerContent=='chat'){
        return <TeamChat isFixed={isFixed} scroll={scroll}/>
    }
  return (
    <div></div>
  )
}

export default TeamsCenterContent