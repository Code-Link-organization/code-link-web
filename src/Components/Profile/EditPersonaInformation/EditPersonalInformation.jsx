import { useState } from "react";
import { useSelector } from "react-redux";
import Input from "./Input";
import SavePersonalInformation from "./SavePersonalInformation";

const data = [
  { placeholder: "governate", value: "governate" },
  { placeholder: "university", value: "university" },
  { placeholder: "faculty", value: "faculty" },
  { placeholder: "birthDate", value: "birthDate",type:'date'},
  { placeholder: "emailProfile", value: "emailProfile", type:'emai' },
  { placeholder: "phoneNumber", value: "phoneNumber" },
  { placeholder: "projects", value: "projects" },
  { placeholder: "progLanguages", value: "progLanguages" },
  { placeholder: "cvUrl", value: "cvUrl" },
  { placeholder: "githubUrl", value: "githubUrl" },
  { placeholder: "linkedinUrl", value: "linkedinUrl" },
  { placeholder: "behanceUrl", value: "behanceUrl" },
  { placeholder: "twitterUrl", value: "twitterUrl" },
  { placeholder: "facebookUrl", value: "facebookUrl" }
];

  const initialFormData = {
    governate: '',
    university: '',
    faculty: '',
    birthDate: '',
    emailProfile: '',
    phoneNumber: '',
    projects: '',
    progLanguages: '',
    cvUrl: '',
    githubUrl: '',
    linkedinUrl: '',
    behanceUrl: '',
    twitterUrl: '',
    facebookUrl: '',
  };

function EditPersonalInformation() {
    const [formData,setFormData]=useState(initialFormData)
    const user=useSelector(state=>state.auth).user
   if(user)
  return (
    <form className="flex flex-col  w-full  items-center  overflow-y-auto pt-20">
        {data.map(input=><Input value={input.value} type={input.type} key={input.placeholder} formData={formData} setFormData={setFormData}
       placeholder={input.placeholder}/>)}
       <SavePersonalInformation userId={user.id} formData={formData} />
    </form>
  )
}

export default EditPersonalInformation