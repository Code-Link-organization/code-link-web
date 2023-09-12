/* eslint-disable no-unused-vars */


import { generateMentorImage } from "./generateMentorImage";
import { getRandomManName } from "./generateRandomManName";
import { getRandomTrack } from "./generateRandomTrack";


export const getFakeMentors = (number) => {
  const mentors = [];

  for (let i = 0; i < number; i++) {
    const mentorName=`Eng/ ${getRandomManName()} ${getRandomManName()}`
    const randomRate = Math.floor(Math.random() * 5) + 1;
    let mentorImage;
    if(Math.random() < 0.5){
       mentorImage=generateMentorImage('girl')
    }
    else{
       mentorImage=generateMentorImage('man')
    }

    const track=getRandomTrack()
    const mentorId=i;
 


    mentors.push({ mentorName,mentorRate:randomRate,mentorTrack:track,mentorId,mentorImage });
  }

  return mentors; 
};