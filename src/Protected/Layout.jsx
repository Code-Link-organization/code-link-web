import { useSelector } from 'react-redux';
import StartPageHome from '../Components/StartPage/StartPageHome';
import {Navigate, Outlet, useNavigate} from 'react-router-dom'
import Header from '../Components/StartPage/Header';
import { useEffect } from 'react';
function Layout() {
 const userData=useSelector(state=>state.auth)
 const navigate=useNavigate()

    useEffect(()=>{
    console.log(userData)
   if(userData && userData.forgetPassword && userData.verified){
    navigate('/resetpassword')
  }    
  if(userData &&userData.user && userData.verified){
    navigate('/home')
  }
  else if(userData &&userData.user && !userData.verified){
    navigate('/verification')
  }


 },[userData])
  
  
  return (

    <>
    <Header/>
  { userData.user && userData.user.token?
    <Outlet/>:
    <StartPageHome/>
  }

    </>
  )
}

export default Layout