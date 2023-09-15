import {  useState } from "react"
import EditProfileForm from "./EditProfileForm"
import EditProfileHeader from "./EditProfileHeader"
import {useSelector} from 'react-redux'
import profileImage from '../../../assets/images/profile/no-profile-picture.svg'
function EditProfile() {
  const user=useSelector(state=>state.auth.user)
  const [formData,setFormData]=useState({
    name:'',
    bio:'',
    track:'',
    imageUrl:null

  })

 if(user)
  return (
    <div className="w-full flex flex-col mt-6">
      <EditProfileHeader formData={formData} setFormData={setFormData} user={user} />
      <EditProfileForm formData={formData} setFormData={setFormData} user={user} userId={user.id}/>
    </div>
  )
}

export default EditProfile