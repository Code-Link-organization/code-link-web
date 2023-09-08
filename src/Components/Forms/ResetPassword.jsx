import Form from "./Form"
import forget from '../../assets/images/start-page/Group 1.svg'
import { resetPasswordInputs as inputs } from "./inputs"
import {useSelector } from 'react-redux'
import { resetPassword } from "../../store/user/resetPasswordAction"
import Home from "../../Pages/Home/Home"
function ResetPassword() {
  const userData=useSelector(state=>state.auth).user
 if(userData && userData.forgetPassword){
  return (
              <Form inputs={inputs} submitAction={resetPassword} token={userData.token} initalValues={{password:"" , password_confirmation:""}} type='Save'>
      <div className='mb-20'>
               <div className='w-[210px] h-[210px] rounded-full mx-auto bg-[rgba(255,255,255,1)] mb-6  border-2 border-solid border-primary element-center'>
      <img src={forget} alt='forget password' />
     </div>
      <p className='main-paragraph text-center'>Please enter your email address to receive a verification code</p>
      </div>
  </Form>
  )}
  else{
   return <Home/>
  }
}

export default ResetPassword