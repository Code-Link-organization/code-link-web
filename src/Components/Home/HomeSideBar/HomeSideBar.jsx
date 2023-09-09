import { Link } from 'react-router-dom';
import FriendsImg from '../../../assets/images/home/Refer a friend-pana 2.svg'
import MentorsImg from '../../../assets/images/home/Product presentation-pana 2.svg'
import TeamImg from '../../../assets/images/home/Creative team-pana 2.svg'
import ResourcesImg from '../../../assets/images/home/Pair programming-cuate 2.svg'
import SearchField from './SearchField';

const links = [
  { imgPath: FriendsImg, path: 'friends' },
  { imgPath: MentorsImg, path: 'mentors' },
  { imgPath: TeamImg, path: 'team' },
  { imgPath: ResourcesImg, path: 'resources' },
];

function HomeSideBar() {
  return (
  <div className=' w-[408px] mx-auto'>
        <div className='px-[35px] pt-[32px] flex flex-wrap justify-between h-fit  w-full'>
            <SearchField/>
            <p className='text-xl my-6 font-normal'>Choose what you want!</p>
      {links.map((link, index) => (
        <Link key={index} to={link.path} className='shadow-[0px_6px_20px_0px_rgba(218,218,218,0.3)] bg-white px-8 py-5 rounded-2xl h-fit  element-center flex-col w-[141px] h-[141px] mb-9 justify-between hover:scale-[0.9] transition-all duration-200 hover:bg-opacity-70  '>
          <img src={link.imgPath} alt={`Image ${index}`} />
          <p className='text-lg font-medium' >{link.path}</p>
        </Link>
      ))}
    </div>
  </div>
  );
}

export default HomeSideBar;