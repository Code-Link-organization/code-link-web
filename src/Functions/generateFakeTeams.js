/* eslint-disable no-unused-vars */

import { getFakeTeamBio } from "./generateFakeTeamBio";
import { getFakeTeamFirstName } from "./generateFakeTeamFirstName";
import { getFakeTeamLastName } from "./generateFakeTeamLastName";
import { generateFakeTeamImage } from "./generateFakeTeamsImages";
import { getFriendsFakeData } from "./getFriendsFakeData";


export const getRandomTeamsData = (number) => {
  const teams = [];

  for (let i = 0; i < number; i++) {
    const teamName=getFakeTeamFirstName()+' '+getFakeTeamLastName()
    const teamBio=getFakeTeamBio()
    const teamImage=generateFakeTeamImage()
    const teamMembers=getFriendsFakeData(4) 
    const adminId=i;
    const teamId= i;
 


    teams.push({ teamName, teamBio, teamImage, teamMembers,adminId,teamId });
  }

  return teams; 
};
