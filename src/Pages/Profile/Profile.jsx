import ProfileSideBar from '../../Components/Profile/SideBar/ProfileSideBar'
import RequireAuth from '../../Protected/RequireAuth'
import {Outlet} from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { logOut } from '../../store/user/logOutAction'
import { useEffect } from 'react'
import { fetchPosts } from '../../store/posts/fetchPosts'
function Profile() {
  const dispatch=useDispatch()
  useEffect(()=>{
    dispatch(fetchPosts())
  },[])

  return (
    <RequireAuth>
      <div className='flex h-[calc(100vh_-_99px)]'>
        <ProfileSideBar></ProfileSideBar>
        <Outlet/>
        {/* <button onClick={()=>dispatch(logOut())}>logoout</button> */}

      </div>
    </RequireAuth>
  )
}

export default Profile