/* eslint-disable react/prop-types */


import { useSelector } from 'react-redux';
import {Navigate} from 'react-router-dom';
import ReactLoading from 'react-loading';

function NoRequire({children}) {
    const userData=useSelector(state=>state.user)


    if(userData.user && userData.verified){
        return  <Navigate to="/home" replace />;
    }
    if(userData.loading){
            return   <ReactLoading className="mx-auto" type={'spin'} color={"#D9C6A4"} height={50} width={50} />
    }
   else return children
    
}

export default NoRequire