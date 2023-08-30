import forget from '../../assets/images/start-page/Group 1.svg'
import NoRequire from '../../Protected/NoRequire'
import Form from './Form'
import { forgetPasswordInputs as inputs } from './inputs'
function ForgetPassword() {
  return (
    <NoRequire>

    <Form inputs={inputs}>

      <div className='mb-20'>
               <div className='w-[210px] h-[210px] rounded-full mx-auto bg-[rgba(255,255,255,1)] mb-6  border-2 border-solid border-primary element-center'>
      <img src={forget} alt='forget password' />
     </div>
      <p className='main-paragraph text-center'>Please enter your email address to receive a verification code</p>
      </div>

    </Form>
    </NoRequire>
  )
}

export default ForgetPassword