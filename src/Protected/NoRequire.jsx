/* eslint-disable react/prop-types */


import { useSelector } from 'react-redux';
import { Navigate} from 'react-router-dom';
import ReactLoading from 'react-loading';
import { useEffect } from 'react';

function NoRequire({children}) {
    const userData=useSelector(state=>state.auth)
   useEffect(()=>{
    console.log(userData)

   },[userData])
      if(userData.user && userData.verified &&userData.forgetPassword) return <Navigate to='/resetpassword' replace={true}/> 
    if(localStorage.getItem('token')  &&userData.user ){

        return  <Navigate to='/home' replace={true}/>
    }
    if(userData.user && !userData.verified) return<Navigate to='/verification'/>
    if(userData.loading){
            return  <div className='h-[calc(100vh_-_99px)] element-center'><ReactLoading className="mx-auto" type={'spin'} color={"#D9C6A4"} height={50} width={50} /></div>  
    }
   return children
    
}

export default NoRequire