import profileImage from '../../../assets/images/profile/Ellipse 30.svg'
import profileImage from '../../../assets/images/profile/Ellipse 30.svg'
 
function EditProfileHeader() {
  return (
    <div className='text-center'>
    <h4 className="text-xl font-semibold mb-4 text-center">Edit profile</h4>
    <div>
    <img src={profileImage} alt='profile image update' className='mx-auto mb-1'/>
    </div>
    <h4 className='text-lg font-bold mb-2'>Emilia William</h4>
    <p className='text-[rgba(184,184,184,1)]'>UI/UX designer</p>

    </div>
  )
}

export default EditProfileHeader