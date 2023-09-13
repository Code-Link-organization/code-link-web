import Form from "./Form"
import forget from '../../assets/images/start-page/Group 1.svg'
import { resetPasswordInputs as inputs } from "./inputs"
import {useSelector } from 'react-redux'
import { resetPassword } from "../../store/user/resetPasswordAction"
import { Navigate } from "react-router-dom"
import ReactLoading from 'react-loading';

function ResetPassword() {
  const userData=useSelector(state=>state.auth)
    if(!userData.user  ) return <Navigate to='/' replace={true}/>
  if(!userData.forgetPassword && userData.user.token ) return <Navigate to='/home' replace={true}/>
  if(userData.loading)return  <div className='h-[calc(100vh_-_99px)] element-center'><ReactLoading className="mx-auto" type={'spin'} color={"#D9C6A4"} height={50} width={50} /></div>  
  return (
              <Form inputs={inputs} submitAction={resetPassword} token={userData.user.token} initalValues={{password:"" , password_confirmation:""}} type='Save'>
      <div className='mb-20'>
               <div className='w-[210px] h-[210px] rounded-full mx-auto bg-[rgba(255,255,255,1)] mb-6  border-2 border-solid border-primary element-center'>
      <img src={forget} alt='forget password' />
     </div>
      <p className='main-paragraph text-center'>Please enter your email address to receive a verification code</p>
      </div>
  </Form>
  )}
 


export default ResetPassword