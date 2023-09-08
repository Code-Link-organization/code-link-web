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
import Home, { loader as postsLoader } from "./Pages/Home/Home";
import Layout from "./Protected/Layout";
import ResetPassword from "./Components/Forms/ResetPassword";
// const router=createBrowserRouter(
// [{
//   path:'/',
//   element:<Layout/>,
//   children:[
//     {
//       path:'signup',
//       element:<SignUp/>
//     },
//     {
//       path:'forgetpassword',
//       element:<ForgetPassword/>
//     },
//     {
//       path:'resetpassword',
//       element:<ResetPassword/>
//     },
//     {
//       path:'signin',
//       element:<SignIn/> 
//     },
//     {
//       path:'verification',
//       element:<Verification/>
//     },
//     {
//       index:true,
//       path:'home',
//       element:<Home/>,
//        loader:postsLoader

//     }
//       ]
//     }
//   ]

// )

const router=createBrowserRouter([{
 element:<Home/>,
 path:'/',
 loader:postsLoader
}])
function App() {
  // const dispatch=useDispatch()
  //  useEffect(()=>{
  //   const userLogged =localStorage.getItem('user')
  //   if(userLogged){  

  //   dispatch(setSavedUser(JSON.parse(userLogged)))
  //   }
  //  },[])

   
  return (
  <RouterProvider router={router}/>
  )
}

export default App