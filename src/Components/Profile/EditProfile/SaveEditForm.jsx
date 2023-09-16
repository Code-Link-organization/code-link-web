/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import useFetch from "../../../CustomHooks/useFetch"
import { toFormData } from "../../../Functions/toFormData"
import { postOptions } from "../../../options"
import ReactLoading from 'react-loading';
import { useDispatch } from "react-redux";
import { editUser } from "../../../store/user/userSlice";

function SaveEditForm({data,user}) {
    const {fetchApi:saveProfileForm,loading}=useFetch(`http://localhost:8000/api/profile/edit-profile/${user.id}`,postOptions)
    const dispatch=useDispatch()
    
    const editHandler =async ()=>{
         let formData
         if(data.imageUrl){
         formData=toFormData([{name:'name',value:data.name},
        {name:'bio',value:data.bio},
        {name:'track',value:data.track},
        {name:'imageUrl',value:data.imageUrl}
    ])}
    else{
         formData=toFormData([{name:'name',value:data.name},
        {name:'bio',value:data.bio},
        {name:'track',value:data.track},
    ])
    }

        const resData=await saveProfileForm(formData)
        dispatch(editUser(resData.data))}
    
  return (
    
        <>
        {!loading?
    <button className="btn w-fit  px-20 py-4 text-lg font-medium mx-auto mt-8" onClick={editHandler}>Save</button>:
         <div className="element-center center-element mx-auto w-[60px]">             <ReactLoading
          className="mx-auto"
          type="spin"
          color="#D9C6A4"
          height={40}
          width={40}
        /></div>

        }
        </>
    
  )
}

export default SaveEditForm