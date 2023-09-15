/* eslint-disable react/prop-types */
import userIcon from '../../../assets/images/profile/user.svg'
import biotrackIcon from '../../../assets/images/profile/bio-track.svg'
import InputField from '../../Forms/InputField';
import SaveEditForm from './SaveEditForm';
function EditProfileForm({formData,setFormData,userId,user}) {
 const editProfileInput=[
    
  {
    placeholder: 'Name',
    icon: userIcon,
    type: 'text',
    value: 'name',
    initialValue: user.name
  },
  {
    placeholder: 'Track',
    icon: biotrackIcon,
    type: 'text',
    value: 'track',
    initialValue: user.track
  },
  {
    placeholder: 'Bio',
    icon: biotrackIcon,
    type: 'text',
    value: 'bio',
    initialValue: user.bio
  },

]; 
  return (
    <form className='w-[350px] flex flex-col gap-5 mx-auto mt-4 mb-8' onSubmit={(e)=>e.preventDefault()}>        
    {editProfileInput.map(input=><InputField key={input.value} icon={input.icon}
     placeholder={input.placeholder} type={input.placeholder} value={input.value} setFormData={setFormData} formData={formData} initialValue={input.initialValue}/>)}
     <SaveEditForm user={user}  data={formData}/>
    </form>
  )
}

export default EditProfileForm