import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

function StartPageNav() {
  const userData=useSelector(state=>state.auth)
  const noLoggedInlinks=[    
    {
    path:'/',
    text:'Start'
    },
    {
    path:'signup',
    text:'Sign Up'
    },    {
    path:'signin',
    text:'Log In'
    },

]
 const loggedInLinks=[
      {
    path:'/home',
    text:'Home'
    },
    {
    path:'/profile',
    text:'Profile'
    },  

 ]
  return (
                  <ul className='flex items-center gap-14 font-semibold  text-xl'>
                    {
                      userData.user &&userData.user.token?
                    
                      loggedInLinks.map(link=> <li  key={link.path}><NavLink to={link.path} >{link.text}</NavLink></li>)
                    :
                    
                       noLoggedInlinks.map(link=> <li  key={link.path}><NavLink to={link.path} >{link.text}</NavLink></li>)
                    
                    }

                  </ul>  )
}

export default StartPageNav