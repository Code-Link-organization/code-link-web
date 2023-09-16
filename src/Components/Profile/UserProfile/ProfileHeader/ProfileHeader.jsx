/* eslint-disable react/prop-types */
import headerbg from '../../../../assets/images/profile/Vector 1.svg'
import profileImg from '../../../../assets/images/profile/no-profile-picture.svg'
import { imgLink } from '../../../../api'

function ProfileHeader({user}) {
  if(user)
  return (
    <>
    <div className='relative w-[488px]  '>
         <img src={headerbg} alt='header' className='w-full'/>    
        <img src={user.imageUrl?`${imgLink}/${user.imageUrl}`:profileImg} alt='profile image' className=' border-4 border-white shadow-md  absolute bottom-0 z-10  left-1/2 -translate-x-1/2 w-[180px] h-[180px] rounded-full' />    

    </div>

    </>
  )
}

export default ProfileHeader