/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import InputField from "./InputField"
import ReactLoading from 'react-loading';
import {Navigate,useNavigate} from 'react-router-dom';



function Form({initalValues,submitAction,inputs,children,type,token}) {
     const user = useSelector(state=>state.auth)
     const navigate=useNavigate() 

     const dispatch = useDispatch()

     const [formData,setFormData] = useState(initalValues)
  
 
   const submitFormHandler = (e)=>{
    e.preventDefault()
   var formdata = new FormData();
   inputs.map(input=>formdata.append(input.value,formData[input.value]))
   dispatch(submitAction({formData:formdata,token:token?token:null}))
  }
  return (
        <div className="w-[498px] mx-auto py-8">
      {children}
      <form className="py-2 flex flex-col gap-5  " onSubmit={submitFormHandler}>
     {inputs.map((input,index)=><InputField setFormData={setFormData} formData={formData} {...input} key={index}/>)}


       <button type="submit" className="btn w-fit mx-auto ">
          {type}
        </button>
      </form>
    </div>
  )
}

export default Form