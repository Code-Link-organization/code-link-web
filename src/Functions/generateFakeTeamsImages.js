import image1 from '../assets/images/teams/fakeTeamsImages/Connected world-pana 1.svg'
import image2 from '../assets/images/teams/fakeTeamsImages/Creative team-pana 2 (1).svg'
import image3 from '../assets/images/teams/fakeTeamsImages/Pair programming-cuate 2 (1).svg'
import image4 from '../assets/images/teams/fakeTeamsImages/Refer a friend-pana 2 (1).svg'
import image5 from '../assets/images/teams/fakeTeamsImages/Team goals-amico 1.svg'
import image6 from '../assets/images/teams/fakeTeamsImages/Work time-pana 1.svg'

export const generateFakeTeamImage=()=>{
    const images = [image1,image2,image3,image4,image5,image6];

    if (images === 0) {
        throw new Error("The input array is empty.");
    }

    const randomIndex = Math.floor(Math.random() * images.length);
    return images[randomIndex];
}

