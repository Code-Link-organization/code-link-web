import { createBrowserRouter } from 'react-router-dom';
import ResetPasswordPage from '../Pages/authPages/ResetPasswordPage';
import Friends from '../Components/Friends/FriendsList';
import SelectionsSearch from '../Components/Home/HomeSideBar/SelectionsSearch';
import CreateTeamForm from '../Components/Teams/CreateTeamForm/CreateTeamForm';
import EditTeamForm from '../Components/Teams/EditTeamForm/EditTeamForm';
import TeamsDetails from '../Components/Teams/TeamsDetails/TeamsDetails';
import Verification from '../Components/Verification/Verification';
import ForgetPasswordPage from '../Pages/AuthPages/ForgetPasswordPage';
import SignInPage from '../Pages/AuthPages/SignInPage';
import SignUpPage from '../Pages/AuthPages/SignUpPage';
import StartPage from '../Pages/AuthPages/StartPage';
import Communities from '../Pages/Communities/Communities';
import Home from '../Pages/Home/Home';
import Mentors from '../Pages/Mentors/Mentors';
import Profile from '../Pages/Profile/Profile';
import Resources from '../Pages/Resources/Resources';
import Teams from '../Pages/Teams/Teams';
import Layout from '../Protected/Layout';
import UserProfile from '../Components/Profile/UserProfile/UserProfile';
import EditProfile from '../Components/Profile/EditProfile/EditProfile';

 
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
        element: <Profile />,
        children:[
          {
            exact:true,
            path:'',
            element:<UserProfile/>
          },
          {
            path:'/profile/edit',
            element:<EditProfile/>
          }
        ]
      }
    ]
  }
]);
