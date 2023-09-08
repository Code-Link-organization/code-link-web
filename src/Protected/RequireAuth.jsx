/* eslint-disable react/prop-types */
import { useSelector } from 'react-redux';
import {Navigate} from 'react-router-dom';

function RequireAuth({children}) {
    const userData=useSelector(state=>state.auth)

    if( !localStorage.getItem('user')&&!userData.user && !userData.user.token  ){
        return  <Navigate to="/" replace />;
    }
    if(!localStorage.getItem('user')&&!userData.user && !userData.user.token){
        return  <Navigate to="/verification" replace />;

    }

    
      return children
}

export default RequireAuth