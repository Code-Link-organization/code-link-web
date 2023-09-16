import { useEffect } from "react"
import { useState } from "react"
import { useSelector } from "react-redux"
import { getOptions } from "../options"
import useFetch from "./useFetch"
let init
function useGetUsers() {
    const {fetchApi:getUsers,loading}=useFetch('http://localhost:8000/api/users',getOptions,true)
        const user=useSelector(state=>state.auth.user)
    const [users,setUsers]=useState([])
    const fetchUsers=async()=>{
     const resData=await getUsers()
     if(resData)
     setUsers(resData.data.users)

    }

   useEffect(()=>{
      if(!init && user){
        fetchUsers()
        init=true
      }

    },[user]) 
 

  return {users,fetchUsers,loading}
}

export default useGetUsers