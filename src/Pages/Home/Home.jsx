import FriendsList from '../../Components/Home/FriendsList/FriendsList'
import HomeContent from '../../Components/Home/HomeContent/HomeContent'
import Header from '../../Components/StartPage/Header'
import {useLoaderData} from 'react-router-dom'
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { setPosts } from '../../store/posts/postsSlice'

import Emojis from './Emojis'
function Home() {

    const posts=useLoaderData()

  const dispatch=useDispatch()

  useEffect(()=>{
    dispatch(setPosts(posts))
  },[])
  return (
  <>
    <Header></Header>
  <div className='flex'>
    <FriendsList/>
    <HomeContent />
  </div></>
  )
}

export default Home
export  const  loader=async()=>{
  const response=await fetch('http://localhost:8000/api/posts',{
    method:'GET',
    headers:{
      "Authorization": "Bearer 18|fsOuawBuMJGRhNxOhZUEDjBGF4hesEK6Y8UNq0pV"
    }
  })
  if(!response.ok){
   return 0
  }
  const resData=await response.json()
  return resData.data.postData
}