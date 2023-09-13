import {useDispatch} from 'react-redux'
import RequireAuth from '../../Protected/RequireAuth'
import { logOut } from '../../store/user/logOutAction'
function Profile() {
  const dispatch=useDispatch()
  return (
    <RequireAuth>
      <button onClick={()=>dispatch(logOut())}>logout</button>
    </RequireAuth>
  )
}

export default Profile