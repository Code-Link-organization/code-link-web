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
      setLoading(false)
      if(!response.ok){
        throw (resData.message)
      }
      console.log(resData)
      return   resData
        }
        catch(errors){
          console.log(errors)
          setError(errors)
          return;

        }
    }
  return {fetchApi,error,loading}
}

export default useFetch