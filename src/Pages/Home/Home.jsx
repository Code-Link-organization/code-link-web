import { useDispatch, useSelector } from "react-redux"
import RequireAuth from "../../Protected/RequireAuth"
import { logOut } from "../../store/user/logOutAction"

function Home() {
  const dispatch=useDispatch()
  const userData=useSelector(state=>state.user)
  return (
    <RequireAuth>
      Home
      <button onClick={()=>dispatch(logOut(userData.user.token))}>Log out</button>
    </RequireAuth>
  )
}

export default Home