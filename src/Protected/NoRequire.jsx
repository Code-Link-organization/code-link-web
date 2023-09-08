/* eslint-disable react/prop-types */


import { useSelector } from 'react-redux';
import {Navigate} from 'react-router-dom';
import ReactLoading from 'react-loading';

function NoRequire({children}) {
    const userData=useSelector(state=>state.auth)

  console.log(userData)
    if(userData.user && userData.user.token){
        return  <Navigate to="/home" replace />;
    }
        if(userData.user && userData.verified){
        return  <Navigate to="/verification" replace />;
    }
    if(userData.loading){
            return   <ReactLoading className="mx-auto" type={'spin'} color={"#D9C6A4"} height={50} width={50} />
    }
   else{
    

    return children
}
    
}

export default NoRequire