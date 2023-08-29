import { logIn } from "../../store/user/logInActions";
import logInImg from '../../assets/images/start-page/logIn.svg'
import Form from "./Form";
import { logInInputs as inputs } from "./inputs";
function SignIn() {

  return (
  <Form inputs={inputs} submitAction={logIn} initalValues={{email:"",password:""}}>
    <img src={logInImg} className='mx-auto' alt='log-in img'/>
      <h2 className=" text-1xl font-medium text-start">
        Welcome to our community!
      </h2>
  </Form>
  );
}

export default SignIn;
