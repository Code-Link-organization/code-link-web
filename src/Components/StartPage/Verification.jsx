import { toFormData } from "../../Functions/toFormData"
import { useState } from "react"
import OTPInput from "react-otp-input"
import { useDispatch, useSelector } from "react-redux"
import { verifyAction } from "../../store/user/verifyAction"
import NoRequire from "../../Protected/NoRequire"
import { sendEmail } from "../../store/user/SendEmail"




function Verification() {
    const [otp,setOtp]=useState(null)
    const userData=useSelector(state=>state.user).user
    
    const dispatch=useDispatch()

    //submit otp
    const submitOtp=(e)=>{
        e.preventDefault()
        dispatch(verifyAction(toFormData([{name:'email',value:userData.email},{name:'code',value:otp}])))
    }

   //resend code
    
    const resendCode=()=>{
      dispatch(sendEmail({formData:toFormData([{name:'email',value:userData.email}])}))
    }

  return (
  <NoRequire>
        <div className="flex flex-col gap-8">
        <h4 className="text-center text-xl text-[rgba(0,0,0,1)] font-medium">Enter your code here</h4>
       <form className="flex flex-col gap-8 items-center" onSubmit={submitOtp}>
    <div>
                            <OTPInput
      value={otp}
      onChange={setOtp}
      numInputs={4}
      renderInput={(props) => <input {...props} />}
      shouldAutoFocus={true}
      containerStyle='otp-container'
    />
    {userData.error && <p className="text-center text-red-700 font-medium my-4">{userData.error['code']}</p>}
        </div>
    <button type="submit" className="btn mx-auto">Submit</button>
       </form>
       <p className="text-xl font-normal">If you didn’t receive any code, {userData.loading?'loading...':
       <button onClick={()=>{resendCode()}}
        className="text-primary hover:border-b-primary border-b-transparent duration-300 transition-all border-b-2 ">Resend
        </button>}</p>
    </div>
  </NoRequire>
  )
}

export default Verification