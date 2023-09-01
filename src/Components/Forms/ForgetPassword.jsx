import { useState } from 'react'
import { useDispatch } from 'react-redux'
import forget from '../../assets/images/start-page/Group 1.svg'
import NoRequire from '../../Protected/NoRequire'
import { sendEmail } from '../../store/user/SendEmail'
import InputField from './InputField'
import { forgetPasswordInputs as inputs } from './inputs'
function ForgetPassword() {
  const [formData,setFormData]=useState({email:'' })
  const dispatch=useDispatch()

     const submitFormHandler = (e)=>{
    e.preventDefault()
   var formdata = new FormData();
  formdata.append('email',formData.email)
   dispatch(sendEmail({formData:formdata,forgetPassword:true}))
  }
  
    return (
    <NoRequire>

    <form className='w-[498px]' onSubmit={submitFormHandler}>
      <div className='mb-20'>
               <div className='w-[210px] h-[210px] rounded-full mx-auto bg-[rgba(255,255,255,1)] mb-6  border-2 border-solid border-primary element-center'>
      <img src={forget} alt='forget password' />
     </div>
      <p className='main-paragraph text-center'>Please enter your email address to receive a verification code</p>
      </div>
      <InputField formData={formData} setFormData={setFormData} {...inputs[0]}/>

      <button className='btn mx-auto my-7 block'>Send</button>
    </form>


    </NoRequire>
  )
}

export default ForgetPassword