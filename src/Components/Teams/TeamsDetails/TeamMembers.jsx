import React from 'react';
import member1 from '../../../assets/images/teams/Frame (2).svg';
import member2 from '../../../assets/images/teams/Rectangle 220.svg';
import member3 from '../../../assets/images/teams/Rectangle 224.svg';
import member4 from '../../../assets/images/teams/Rectangle 226.svg';
import TeamMember from './TeamMember';

function TeamMembers() {
  const membersData = [
    {
      image: member1,
      role: 'Data Science',
    },
    {
      image: member2,
      role: 'UI/UX',
    },
    {
      image: member3,
      role: 'Cyber Security',
    },
    {
      image: member4,
      role: 'Back end',
    },
  ];

  return (
    <div>
      <h6 className="text-lg font-bold pt-5">Team members names</h6>
      <div className='flex justify-between flex-wrap px-3 mt-5'>
        {membersData.map((member, index) => (
          <TeamMember key={index} image={member.image} role={member.role} />
        ))}
      </div>
    </div>
  );
}

export default TeamMembers;
