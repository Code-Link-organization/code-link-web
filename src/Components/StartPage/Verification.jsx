import { toFormData } from "axios"
import { useState } from "react"
import OTPInput from "react-otp-input"
import { useDispatch, useSelector } from "react-redux"
import useFetch from "../../CustomHooks/useFetch"
import { verifyAction } from "../../store/user/verifyAction"


const options={method:'POST',
            headers:{
      "Accept":"application/json",
      "Authorization": "application/json"
    
}
}
function Verification() {
    const [otp,setOtp]=useState(null)
    const user=useSelector(state=>state.user).user
    const {fetchApi:resend,error:resendError,loading} =
    useFetch('http://127.0.0.1:8000/api/user/send-mail',options,[{value:user.email,name:'email'}])
    const error=user && user.error
    
    const dispatch=useDispatch()
    const submitOtp=(e)=>{
        e.preventDefault()
        dispatch(verifyAction(toFormData([{name:'email',value:user.email},{name:'code',value:otp}])))
    }
  return (
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
    {error &&error['code'] && <p className="text-center text-red-700 font-medium my-4">{error['code']}</p>}
        </div>
    <button type="submit" className="btn mx-auto">Submit</button>
       </form>
       <p className="text-xl font-normal">If you didn’t receive any code, {loading?'loading...':<button onClick={resend} className="text-primary hover:border-b-primary border-b-transparent duration-300 transition-all border-b-2 ">Resend</button>}</p>
    </div>
  )
}

export default Verification