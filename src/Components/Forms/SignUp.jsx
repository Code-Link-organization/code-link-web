import NoRequire from "../../Protected/NoRequire";
import { signUp } from "../../store/user/signUpAction";
import Form from "./Form";
import { signUpInputs as inputs } from "./inputs";


function SignUp() {
  

  return (
   <NoRequire>
      <Form inputs={inputs} submitAction={signUp} initalValues={{name:"",email:"",password:""}} type='Sign Up'>
      <h2 className=" text-1xl font-medium text-start">
        Welcome to our community!
      </h2>
  </Form>
   </NoRequire>
  );
}

export default SignUp;