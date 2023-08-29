import { useSelector } from 'react-redux';
import {Outlet,Navigate} from 'react-router-dom';

function RequireAuth() {
    const userData=useSelector(state=>state.user)


    if(!userData.user && !userData.verified){
        return  <Navigate to="/start" replace />;
    }
      return <Outlet/>
}

export default RequireAuth