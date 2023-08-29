import { useState } from "react"
import { toFormData } from "../Functions/toFormData"

function useFetch(url,options,data) {
    const [loading,setLoading]=useState(false)
    const [error,setError]=useState(null)
    const fetchApi=async()=>{
        setLoading(true)
        try{
      const response=await fetch(url,{...options,body:toFormData(data)})
      const resData=await response.json()
      console.log(resData,options.body.values())
        }
        catch(error){
            setError('something wrong please try to resend again!')
        }
        setLoading(false)
    }
  return {fetchApi,error,loading}
}

export default useFetch