import girlImage1 from '../assets/images/mentors/mentorsimages/girls images/image 112.svg';
import girlImage2 from '../assets/images/mentors/mentorsimages/girls images/image 113.svg';
import manImage1 from '../assets/images/mentors/mentorsimages/men images/image 111.svg';
import manImage2 from '../assets/images/mentors/mentorsimages/men images/image 114.svg';

export const generateMentorImage = (genre) => {
  const girlImages = [girlImage1, girlImage2];
  const manImages = [manImage1, manImage2];

  if (genre === 'girl') {
    const randomIndex = Math.floor(Math.random() * girlImages.length);
    return girlImages[randomIndex];
  } else { 
    const randomIndex = Math.floor(Math.random() * manImages.length);
    return manImages[randomIndex];}
  
};
