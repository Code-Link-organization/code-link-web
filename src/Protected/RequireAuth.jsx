/* eslint-disable react/prop-types */
import { useSelector } from 'react-redux';
import {Navigate} from 'react-router-dom';

function RequireAuth({children}) {
    const userData=useSelector(state=>state.user)

    if(!userData.user && !userData.verified  && !localStorage.getItem('user')){
        return  <Navigate to="/" replace />;
    }

    
      return children
}

export default RequireAuth