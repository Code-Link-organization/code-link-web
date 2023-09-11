/* eslint-disable react/prop-types */
import { useSelector } from 'react-redux';
import {Navigate,useNavigate} from 'react-router-dom';

function RequireAuth({children}) {
    const userData=useSelector(state=>state.auth).user
    const navigate=useNavigate()
  
  console.log(userData)

    if(!localStorage.getItem('user')&& !userData && !userData?.token){
                    return   <Navigate to ='/' replace/>

    }

               return children


    
}

export default RequireAuth