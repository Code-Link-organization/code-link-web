import { useDispatch, useSelector } from "react-redux"
import { logOut } from "../../store/user/logOutAction"

function Home() {
  const dispatch=useDispatch()
  const userData=useSelector(state=>state.user)
  return (
    <div>Home
      <button onClick={()=>dispatch(logOut(userData.user.token))}>Log out</button>
    </div>
  )
}

export default Home