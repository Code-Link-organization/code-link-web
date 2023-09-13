import { toFormData } from "../../Functions/toFormData"
import { useState } from "react"
import OTPInput from "react-otp-input"
import { useDispatch, useSelector } from "react-redux"
import { verifyAction } from "../../store/user/verifyAction"
import { sendEmail } from "../../store/user/SendEmail"
import {Navigate} from 'react-router-dom';
import StartPage from "../../Pages/AuthPages/StartPage"
import StartPageHome from "../StartPage/StartPageLayout"




function Verification() {
    const [otp,setOtp]=useState(null)
    const userData = useSelector(state=>state.auth)
    const dispatch=useDispatch()

    //submit otp
    const submitOtp=(e)=>{
        e.preventDefault()
        dispatch(verifyAction(toFormData([{name:'email',value:userData.user.email},{name:'code',value:otp}])))
    }

   //resend code
    
    const resendCode=()=>{
      dispatch(sendEmail({formData:toFormData([{name:'email',value:userData.user.email}])}))
    }
    if(!userData.user) return <Navigate to='/' replace={true}/>
    if(userData.user && userData.verified &&userData.forgetPassword) return <Navigate to='/resetpassword' replace={true}/>
    if(userData.user && userData.verified) return <Navigate to='/home' replace={true}/>
  return (
  <StartPageHome>
        <div className="flex flex-col gap-8">
        <h4 className="text-center text-xl text-[rgba(0,0,0,1)] font-medium">Enter your code here</h4>
       <form className="flex flex-col gap-8 items-center" onSubmit={submitOtp}>
    <div className="flex justify-center flex-col items-center">
                            <OTPInput
      value={otp}
      onChange={setOtp}
      numInputs={4}
      renderInput={(props) => <input {...props} />}
      shouldAutoFocus={true}
      containerStyle='otp-container'
    />
    { <p className="text-center text-red-700 font-medium my-4">{userData.error&&userData.error.code['']?userData.error['code']:""} </p>}
        </div>
    <button type="submit" className="btn mx-auto">Submit</button>
       </form>
       <p className="text-xl font-normal">If you didn’t receive any code, loading...
       <button onClick={()=>{resendCode()}}
        className="text-primary hover:border-b-primary border-b-transparent duration-300 transition-all border-b-2 ">Resend
        </button></p>
    </div>
  </StartPageHome>
  )
}

export default Verification