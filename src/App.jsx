import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import StartPageHome from './Components/StartPage/StartPageHome'
import SignUp from './Components/Forms/SignUp'
import SignIn from './Components/Forms/SignIn'
import ForgetPassword from './Components/Forms/ForgetPassword'

const router=createBrowserRouter(
[{
  path:'/',
  element:<StartPageHome/>,
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
    }
  ]

}]
)

function App() {


  // const userData=useSelector(state=>state.user)
  // const navigate=useNavigate()
  // if(userData.user && !userData.verified){
  //   console.log(userData.user)
  //       navigate('/verification')
  // }
  return (
  <RouterProvider router={router}/>
  )
}

export default App