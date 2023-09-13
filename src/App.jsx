import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Verification from './Components/Verification/Verification'
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setSavedUser } from "./store/user/userSlice";
import Layout from "./Protected/Layout";
import SelectionsSearch from "./Components/Home/HomeSideBar/SelectionsSearch";
import Friends from "./Components/Friends/FriendsList";
import Teams from "./Pages/Teams/Teams";
import Home from "./Pages/Home/Home";
import CreateTeamForm from "./Components/Teams/CreateTeamForm/CreateTeamForm";
import EditTeamForm from "./Components/Teams/EditTeamForm/EditTeamForm";
import Mentors from './Pages/Mentors/Mentors'
import Resources from "./Pages/Resources/Resources";
import Communities from "./Pages/Communities/Communities";
import Profile from "./Pages/Profile/Profile";
import SignUpPage from "./Pages/AuthPages/SignUpPage";
import StartPage from "./Pages/AuthPages/StartPage";
import SignInPage from "./Pages/AuthPages/SignInPage";
import ResetPasswordPage from "./Pages/authPages/ResetPasswordPage";
import ForgetPasswordPage from "./Pages/AuthPages/ForgetPasswordPage";
import TeamsDetails from "./Components/Teams/TeamsDetails/TeamsDetails";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '',
        element: <StartPage />
      },
      {
        path: 'signup',
        element: <SignUpPage />
      },
      {
        path: 'forgetpassword',
        element: <ForgetPasswordPage />
      },
      {
        path: 'resetpassword',
        element: <ResetPasswordPage />
      },
      {
        path: 'signin',
        element: <SignInPage />
      },
      {
        path: 'verification',
        element: <Verification />
      },
      {
        path: 'home',
        element: <Home />,
        children: [
          {
            path: '',
            element: <SelectionsSearch />
          },
          {
            path: 'friends',
            element: <Friends />
          }
        ]
      },
      {
        path: '/teams',
        element: <Teams />,
        children: [
          {
            path: '',
            element: <SelectionsSearch />
          },
          {
            path: 'createteam',
            element: <CreateTeamForm />
          },
          {
            path: ':teamId',
            element: <TeamsDetails />
          },
          {
            path: 'editeam/:teamId',
            element: <EditTeamForm />
          }
        ]
      },
      {
        path: 'mentors',
        element: <Mentors />,
        children: [
          {
            path: '',
            element: <SelectionsSearch />
          }
        ]
      },
      {
        path: 'resources',
        element: <Resources />,
        children: [
          {
            path: '',
            element: <SelectionsSearch />
          }
        ]
      },
      {
        path: 'communities',
        element: <Communities />,
        children: [
          {
            path: '',
            element: <SelectionsSearch />
          }
        ]
      },
      {
        path: 'profile',
        element: <Profile />
      }
    ]
  }
]);


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