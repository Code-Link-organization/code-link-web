import { Outlet, redirect} from 'react-router-dom'
import Header from '../Components/GlobalComponents/Header';
import {useSelector} from 'react-redux'
function Layout() {
  const userData=useSelector(state=>state.auth).user
 if(userData && userData.token){
  redirect('/home')
 }  
  return (

    <>
    <Header/>
    <Outlet/>
  
  

    </>
  )
}

export default Layout