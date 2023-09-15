/* eslint-disable react/prop-types */

import TeamMember from './TeamMember';

function TeamMembers({team}) {
  


  return (
    <div>
      <h6 className="text-lg font-bold pt-5">Team members </h6>
      <div className='flex justify-center gap-12 flex-wrap  mt-5 items-center '>
        {team.members.map((member, index) => (
          <TeamMember key={index} team={team} memberId={member.id}  name={member.name} role={member.track} />
        ))}
      </div>
    </div>
  );
}

export default TeamMembers;
