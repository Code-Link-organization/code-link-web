import image1 from '../assets/images/menImages/Ellipse 25 (2).svg'
import image2 from '../assets/images/menImages/Ellipse 27.svg'
import image3 from '../assets/images/menImages/Ellipse 36 (1).svg'
import image4 from '../assets/images/menImages/Ellipse 38.svg'
import image5 from '../assets/images/menImages/Ellipse 40 (1).svg'
import image6 from '../assets/images/menImages/Ellipse 40.svg'

export const getRandomManImage=()=>{
    const images = [image1,image2,image3,image4,image5,image6];

    if (images === 0) {
        throw new Error("The input array is empty.");
    }

    const randomIndex = Math.floor(Math.random() * images.length);
    return images[randomIndex];
}

