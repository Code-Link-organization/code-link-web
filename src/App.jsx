import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import SignUp from './Components/Forms/SignUp'
import SignIn from './Components/Forms/SignIn'
import ForgetPassword from './Components/Forms/ForgetPassword'
import Verification from './Components/StartPage/Verification'
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setSavedUser } from "./store/user/userSlice";
import Home from "./Pages/Home/Home";
import Layout from "./Protected/Layout";
const router=createBrowserRouter(
[{
  path:'/',
  element:<Layout/>,
  children:[
    {
      path:'signup',
      element:<SignUp/>
    },
    {
      path:'forgetpassword',
      element:<ForgetPassword/>
    },
    {
      path:'signin',
      element:<SignIn/> 
    },
    {
      path:'verification',
      element:<Verification/>
    },
    

        {
          path:'home',
          element:<Home/>
        }
      ]
    }
  ]

)
const userLogged=JSON.parse(localStorage.getItem('user'))
function App() {
  const dispatch=useDispatch()
   useEffect(()=>{
    if(userLogged){
      
    dispatch(setSavedUser(userLogged))
    }
   },[])
  return (
  <RouterProvider router={router}/>
  )
}

export default App