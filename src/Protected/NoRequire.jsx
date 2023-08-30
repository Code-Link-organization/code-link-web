/* eslint-disable react/prop-types */


import { useSelector } from 'react-redux';
import {Navigate} from 'react-router-dom';

function NoRequire({children}) {
    const userData=useSelector(state=>state.user)


    if(userData.user && userData.verified){
        return  <Navigate to="/home" replace />;
    }
      return children
}

export default NoRequire