/* eslint-disable react/prop-types */
import unkownImage from '../../../assets/images/profile/no-profile-picture.svg'
import uploadIcon from '../../../assets/images/profile/uploadImage.svg'
import UploadImage from '../../GlobalComponents/UploadImage'
import { imgLink } from '../../../api'
import { useState } from 'react';


function EditProfileHeader({formData,setFormData,user}) {
    const [uploadFromDevice, setUploadFromDevice] = useState(false);
    const profileImage= user.imageUrl?(uploadFromDevice?URL.createObjectURL(formData.imageUrl):`${imgLink}/${user.imageUrl}`):unkownImage
    
  return (
    <div className='text-center'>
    <h4 className="text-xl font-semibold mb-4 text-center">Edit profile</h4>
    <div className='relative w-fit mx-auto'>
      <img src={profileImage} alt='profile image update' className='mx-auto mb-1 w-[176px] w-[176px] rounded-full border-4 border-solid border-white'/>

          <div alt='upload img icon' className='absolute right-[20px] bottom-[5px]'>
            <UploadImage setUploadFromDevice={setUploadFromDevice} value='imageUrl' formData={formData} uploadIcon={uploadIcon} setFormData={setFormData} />
          </div>
    </div>
    <h4 className='text-lg font-bold mb-2'>{user.name}</h4>
    <p className='text-[rgba(184,184,184,1)]'>{user.track?user.track:''}</p>

    </div>
  )
}

export default EditProfileHeader