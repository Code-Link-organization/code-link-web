import {NavLink} from 'react-router-dom'
import profileIcon from '../../../assets/images/profile/sidebar/profile.svg'
import homeIcon from '../../../assets/images/profile/sidebar/home.svg'
import editProfileIcon from '../../../assets/images/profile/sidebar/editprofile.svg'
import logOutIcon from '../../../assets/images/profile/sidebar/logout.svg'
import DeleteAccount from './DeleteAccount'
import { useDispatch, useSelector } from 'react-redux'
import { logOut } from '../../../store/user/logOutAction'

function ProfileSideBar() {
    const user=useSelector(state=>state.auth.user)
    const dispatch=useDispatch()
    const profileNavigation=[
        {
            text:'My profile',
            path:'/profile',
            icon:profileIcon
        },
        {
            text:'Edit Profile',
            path:'/profile/edit',
            icon:editProfileIcon
        },
        {
            text:'Home',
            path:'/home',
            icon:homeIcon
        }
    ]
    if(user)
  return (
    <div className="w-1/3 bg-[rgba(252,250,248,1)] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] h-[calc(100vh_-_99px)] sidebar">
        <div className='flex flex-col'>
        {profileNavigation.map((link,index)=><NavLink className='py-5 flex gap-3 items-center pl-11 text-2xl
         hover:bg-gray-300 transition-all duration-500' key={index} to={link.path}>
          <img src={link.icon} alt={link.text}  />  {link.text}</NavLink>)}
          <DeleteAccount user={user}/>
          <button className='py-5 flex gap-3 items-center pl-11 text-2xl hover:bg-gray-300
           transition-all duration-500' onClick={()=>dispatch(logOut())}><img src={logOutIcon} alt='log out'/>Log out</button>
        </div>


    </div>
  )
}

export default ProfileSideBar