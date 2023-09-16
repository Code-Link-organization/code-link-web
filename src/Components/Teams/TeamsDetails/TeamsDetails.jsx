import TeamMembers from './TeamMembers'
import TeamDetailsOptions from './TeamDetailsOptions'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { imgLink } from '../../../api'
import JoinRequestsList from '../JoinRequestList/JoinRequestsList'

function TeamsDetails() {
  const {teamId}=useParams()
  const teams=useSelector(state=>state.teams).teams;
  const team=teams.find(team=>team.id==teamId)
  const userData=useSelector(state=>state.auth).user
  if(team &&userData)
  return (

    <><div className="w-full pt-4 bg-[rgba(252,250,248,1)] px-5  z-10      ">

      <TeamDetailsOptions team={team} >
      <h4 className='text-center text-xl font-medium'>{team.name}</h4>
      </TeamDetailsOptions>



      <img src={`${imgLink}/${team.imageUrl}`} alt='Team Image' className='mx-auto mb-5 w-full' />

      <p className='mt-5  text-[15px] mb-[42px]'>{team.description}</p>
        
        <span className='absolute left-0 w-full h-[6px] bg-[rgba(235,235,235,1)] '></span>
        <TeamMembers team={team} />
    {userData.id==team.leader_id?<JoinRequestsList team={team} teamId={teamId}/>:null}
    </div>
    </>
  )
}

export default TeamsDetails