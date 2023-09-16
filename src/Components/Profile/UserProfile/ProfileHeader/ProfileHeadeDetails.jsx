/* eslint-disable react/prop-types */
import inviteIcon from '../../../../assets/images/profile/add-friend 1.svg'
import editPersonalInformation from '../../../../assets/images/profile/writing-notepad-svgrepo-com 1.svg'
import ProfileOptions from './ProfileOptions'
import ProfileNumbers from './ProfileNumbers'
import {Link} from 'react-router-dom'
import Followers from '../Followers/Followers'
import About from '../About'
import Posts from '../ProfilePosts'
import Contacts from '../Contacts'

function ProfileHeaderDetails({user}) {
    
  return (
     <>
        <div className='bg-white shadow-[0px_6px_20px_0px_rgba(218,218,218,0.3)]   -top-[90px]   w-[488px]
         rounded-2xl relative px-5 py-5'>
            <div className='flex justify-between items-start w-full'>
            <Link to='/profile/invite'><button><img src={inviteIcon}/></button></Link>
            <Link to='/profile/edit/personalinformation'><button><img src={editPersonalInformation}/></button></Link>
            </div>
            <div className='pt-16'>
                <h3 className='font-bold text-center text-lg pb-[6px]'>{user.name}</h3>
                <p className='text-[rgba(184,184,184,1)] text-center text-sm mb-4'>{user.track?user.track:null}</p>
                <ProfileOptions/>
                <ProfileNumbers/> 
                <Contacts {...user}/>
                <About user={user}/>           
                <Followers/>  
                <Posts user={user}/>
            </div>



        </div>     

     </>
    )
}

export default ProfileHeaderDetails