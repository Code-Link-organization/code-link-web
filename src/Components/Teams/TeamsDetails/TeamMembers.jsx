
import TeamMember from './TeamMember';

function TeamMembers({teamMembers,team}) {
  


  return (
    <div>
      <h6 className="text-lg font-bold pt-5">Team members </h6>
      <div className='flex justify-between flex-wrap  mt-5'>
        {teamMembers.map((member, index) => (
          <TeamMember key={index} team={team} memberId={member.id} image={member.userImg} name={member.userName} role={member.track} />
        ))}
      </div>
    </div>
  );
}

export default TeamMembers;
