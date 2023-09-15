import headerbg from '../../../../assets/images/profile/Vector 1.svg'
import profileImg from '../../../../assets/images/profile/Ellipse 30.svg'
import ProfileHeadeDetails from './ProfileHeadeDetails'

function ProfileHeader() {
  return (
    <>
    <div className='relative w-[488px] '>
         <img src={headerbg} alt='header' className='w-full'/>    
        <img src={profileImg} alt='profile image' className='absolute bottom-0 z-10  left-1/2 -translate-x-1/2' />    

    </div>
             <ProfileHeadeDetails/>

    </>
  )
}

export default ProfileHeader