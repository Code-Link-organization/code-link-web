import { useState } from "react"
const token='19|PFTBIDNwhGkcdFxf7LqQMwc2zyggdbCp9T31HoGz'

function useFetch(url,options,data) {
    const [loading,setLoading]=useState(false)
    const [error,setError]=useState(null)
    const fetchApi=async()=>{
        setLoading(true)
        try{
      const response=await fetch(url,{...options,body:data})
      const resData=await response.json()
      if(!response.ok) throw(resData.errors)
      
      return   resData
        }
        catch(error){
          console.log(error)
            setError('something wrong please try to resend again!')
          setLoading(false)

        }
    }
  return {fetchApi,error,loading}
}

export default useFetch