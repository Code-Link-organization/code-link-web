import FriendsList from '../../Components/Home/FriendsList/FriendsList'
import HomeContent from '../../Components/Home/HomeContent/HomeContent'
import Header from '../../Components/StartPage/Header'
import {useLoaderData} from 'react-router-dom'
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { setPosts } from '../../store/posts/postsSlice'
import RequireAuth from '../../Protected/RequireAuth'
import HomeSideBar from '../../Components/Home/HomeSideBar/HomeSideBar'
function Home() {

    const posts=useLoaderData()

  const dispatch=useDispatch()

  useEffect(()=>{
    dispatch(setPosts(posts))
  },[])
  return (
  <RequireAuth>
    <Header></Header>
  <div className='flex'>
    <FriendsList/>
    <HomeContent />
    <HomeSideBar/>
  </div></RequireAuth>
  )
}

export default Home
export  const  loader=async()=>{
  const response=await fetch('http://localhost:8000/api/posts',{
    method:'GET',
    headers:{
      "Authorization": "Bearer 38|sum7kFXDl4oezUHHh6BgP6RhKAmdKPJ7YKGKK8bC"
    }
  })
  if(!response.ok){
   return 0
  }
  const resData=await response.json()
  return resData.data.postData
}