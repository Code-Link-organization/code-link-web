import FriendsList from '../../Components/Home/FriendsList/FriendsList'
import HomeContent from '../../Components/Home/HomeContent/HomeContent'
import {useLoaderData} from 'react-router-dom'
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { setPosts } from '../../store/posts/postsSlice'
import RequireAuth from '../../Protected/RequireAuth'
import HomeSideBar from '../../Components/Home/HomeSideBar/HomeSideBar'
import { useState } from 'react'
import { fetchPosts } from '../../store/posts/fetchPosts'
function Home() {

    const posts=useLoaderData()
  const dispatch=useDispatch()
    const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 99) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(()=>{
    dispatch(fetchPosts(posts))
  },[])
  return (
  <RequireAuth>
  <div className='flex relative'>
    <FriendsList isFixed={isFixed}/>
    <HomeContent />
    <HomeSideBar isFixed={isFixed}/>
  </div></RequireAuth>
  )
}


export default Home