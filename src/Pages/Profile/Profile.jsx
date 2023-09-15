import ProfileSideBar from '../../Components/Profile/SideBar/ProfileSideBar'
import RequireAuth from '../../Protected/RequireAuth'
import {Outlet} from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { logOut } from '../../store/user/logOutAction'
function Profile() {
  const dispatch=useDispatch()

  return (
    <RequireAuth>
      <div className='flex'>
        <ProfileSideBar></ProfileSideBar>
        <Outlet/>
        <button onClick={()=>dispatch(logOut())}>logoout</button>

      </div>
    </RequireAuth>
  )
}

export default Profile