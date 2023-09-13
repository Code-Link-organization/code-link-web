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
import Layout from "./Protected/Layout";
import ResetPassword from "./Components/Forms/ResetPassword";
import SelectionsSearch from "./Components/Home/HomeSideBar/SelectionsSearch";
import Friends from "./Components/Friends/FriendsList";
import Teams from "./Pages/Teams/Teams";
import Home from "./Pages/Home/Home";
import CreateTeamForm from "./Components/Teams/CreateTeamForm/CreateTeamForm";
import TeamDetails from "./Components/Teams/TeamsDetails/TeamsDetails";
import EditTeamForm from "./Components/Teams/EditTeamForm/EditTeamForm";
import Mentors from './Pages/Mentors/Mentors'
import Resources from "./Pages/Resources/Resources";
import Communities from "./Pages/Communities/Communities";

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
      path:'resetpassword',
      element:<ResetPassword/>
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
      element:<Home/>,
       children:[
   {
    path:'',
    element:<SelectionsSearch/>
   },

   {
    path:'friends',
    element:<Friends/>,
   },   
  ]
    },
  {
   path:'/teams',
   element:<Teams/>,
  children:[
   {
   path:'',
   element:<SelectionsSearch/>

   },
   {
   path:'createteam',
   element:<CreateTeamForm/> 
   },
   {
    path:':teamId',
    element:<TeamDetails/>
   },
   {
    path:'editeam/:teamId',
    element:<EditTeamForm/>
   }
  ]
  },
  {
    path:'mentors',
    element:<Mentors/>,
    children:[{
   path:'',
   element:<SelectionsSearch/>   ,  } 
    ]
  },
  {
    path:'resources',
    element:<Resources/>,
    children:[{
   path:'',
   element:<SelectionsSearch/>,} 
    ]

  },
  {
    path:'communities',
    element:<Communities/>,
    children:[{
   path:'',
   element:<SelectionsSearch/>,} 
    ]

  }  

      ]
    }
  ]

)

// )
function App() {
  const dispatch=useDispatch()
   useEffect(()=>{
    const userLogged =localStorage.getItem('user')
    if(userLogged){  

    dispatch(setSavedUser(JSON.parse(userLogged)))
    }
   },[])

   
  return (
    <>
    <RouterProvider router={router}/>

    </>
  )
}

export default App