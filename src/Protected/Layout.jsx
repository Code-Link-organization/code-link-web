import { useSelector } from 'react-redux';
import StartPageHome from '../Components/StartPage/StartPageHome';
import RequireAuth from './RequireAuth';

function Layout() {
        const userData=useSelector(state=>state.user)

  return (

    <>
    {userData.user &&userData.verified?<RequireAuth/>:<StartPageHome/>}
    
    </>
  )
}

export default Layout