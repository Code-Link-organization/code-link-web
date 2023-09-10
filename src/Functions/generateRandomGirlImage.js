import image1 from '../assets/images/girlsimages/Ellipse 31.svg'
import image2 from '../assets/images/girlsimages/Ellipse 37.svg'
import image3 from '../assets/images/girlsimages/Ellipse 39.svg'
import image4 from '../assets/images/girlsimages/Ellipse 41.svg'
import image5 from '../assets/images/girlsimages/Ellipse 74.svg'

export const getRandomGirlImage=()=>{
    const images = [image1,image2,image3,image4,image5];

    if (images === 0) {
        throw new Error("The input array is empty.");
    }

    const randomIndex = Math.floor(Math.random() * images.length);
    return images[randomIndex];
}

