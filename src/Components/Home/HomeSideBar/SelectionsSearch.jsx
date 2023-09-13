import FriendsImg from '../../../assets/images/home/Refer a friend-pana 2.svg'
import MentorsImg from '../../../assets/images/home/Product presentation-pana 2.svg'
import TeamImg from '../../../assets/images/home/Creative team-pana 2.svg'
import ResourcesImg from '../../../assets/images/home/Pair programming-cuate 2.svg'
import communities from '../../../assets/images/home/Connected world-pana 1 (1).svg'
import Hackathons from '../../../assets/images/home/Team goals-amico 1 (1).svg'
import BoxItem from './BoxItem';
import SearchField from '../../GlobalComponents/SearchField'

function SelectionsSearch() {
    const links = [
  { imgPath: FriendsImg, text: 'Friends',path:'friends' },
  { imgPath: MentorsImg, text: 'Mentors',path:'/mentors' },
  { imgPath: TeamImg, text: 'Teams',path:'/teams' },
  { imgPath: ResourcesImg, text: 'Resources', path:'/resources' },
  { imgPath: communities,text:'Communities',path:'/communities'},
  { imgPath: Hackathons,text:'hackathons',path:'/hackathons'},


];
  return (
    <>    
       <SearchField/> 
            <p className='text-xl my-6 font-normal'>Choose what you want!</p>
   <div className='flex flex-wrap justify-between h-fit  w-full'>
          {links.map((link, index) => (
    <BoxItem key={index} path={link.path} text={link.text} imgPath={link.imgPath}/>
      ))} 
   </div>
      </>
  )
}

export default SelectionsSearch