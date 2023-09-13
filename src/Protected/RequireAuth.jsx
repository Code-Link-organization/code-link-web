/* eslint-disable react/prop-types */
import {Navigate} from 'react-router-dom';
import { useSelector } from 'react-redux';

function RequireAuth({children}) {
  const userData=useSelector(state=>state.auth)
  

    if(!localStorage.getItem('token') && !userData.user ){
            return   <Navigate to ='/' replace={true}/>

    }
        if(userData.user && !userData.verified) return<Navigate to='/verification'/>


  return children


    
}

export default RequireAuth