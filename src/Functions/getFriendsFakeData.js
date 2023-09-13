/* eslint-disable no-unused-vars */
import { getRandomGirlImage } from "./generateRandomGirlImage";
import { getRandomGirlName } from "./generateRandomGirlName";
import { getRandomManImage } from "./generateRandomManImage";
import { getRandomManName } from "./generateRandomManName";
import { getRandomTrack } from "./generateRandomTrack";

export const getFriendsFakeData = (number,track) => {
  const friends = [];
  const usedFullNames = new Set(); // To keep track of used full names

  for (let i = 0; i < number; i++) {
    const genre = Math.random() < 0.5;
    let firstName, lastName, userImg;

    if (genre) {
      do {
        firstName = getRandomManName();
        lastName = getRandomManName();
      } while (usedFullNames.has(firstName + ' ' + lastName)); // Check if the full name has been used

      userImg = getRandomManImage();
    } else {
      do {
        firstName = getRandomGirlName();
        lastName = getRandomGirlName();
      } while (usedFullNames.has(firstName + ' ' + lastName)); // Check if the full name has been used

      userImg = getRandomGirlImage();
    }

    const userName = firstName + ' ' + lastName;
    usedFullNames.add(userName); // Add the used full name to the set
   let userTrack
   if(track)
   userTrack = track;
   else  userTrack = getRandomTrack();
   
   const followed = Math.random() < 0.5;
    friends.push({ userName, userImg, track:userTrack, followed,id:i});
  }

  return friends; 
};
