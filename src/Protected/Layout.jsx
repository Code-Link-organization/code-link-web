import { useSelector } from 'react-redux';
import StartPageHome from '../Components/StartPage/StartPageHome';
import {Outlet,useNavigate} from 'react-router-dom'
import { useEffect } from 'react';
function Layout() {
        const userData=useSelector(state=>state.user)
        const navigate=useNavigate()
   useEffect(()=>{
  if(userData &&userData.user && userData.verified){
    navigate('/home')
  }
  else if(userData &&userData.user && !userData.verified){
    navigate('/verification')
  }


 },[userData])

  return (

    <>
    {userData.user &&userData.verified?<Outlet/>:<StartPageHome/>}
    
    </>
  )
}

export default Layout