import emailPlaceHolderIcon from "../../assets/images/inputs-placeholder-icons/email.svg";
import namePlaceHolderIcon from "../../assets/images/inputs-placeholder-icons/name.svg";
import passwordPlaceHolderIcon from "../../assets/images/inputs-placeholder-icons/password.svg";

// Sign up inputs
export const signUpInputs = [
  {
    placeholder: 'Name',
    icon: namePlaceHolderIcon,
    type: 'text',
    value: 'name',
  },
  {
    placeholder: 'E-mail',
    icon: emailPlaceHolderIcon,
    type: 'email',
    value: 'email',
  },
  {
    placeholder: 'Password',
    icon: passwordPlaceHolderIcon,
    type: 'password',
    value: 'password',
  },
  {
    placeholder: 'Confirm Password',
    icon: passwordPlaceHolderIcon,
    type: 'password',
    value: 'password_confirmation',
  },
];

// Log in inputs
export const logInInputs = [
  {
    placeholder: 'E-mail',
    icon: emailPlaceHolderIcon,
    type: 'email',
    value: 'email',
  },
  {
    placeholder: 'Password',
    icon: passwordPlaceHolderIcon,
    type: 'password',
    value: 'password',
    forgetPassword: true,
  },
];

export const forgetPasswordInputs = [
  {
    placeholder: 'E-mail',
    icon: emailPlaceHolderIcon,
    type: 'email',
    value: 'email',
  },
];

export const resetPasswordInputs = [
  {
    placeholder: 'Password',
    icon: passwordPlaceHolderIcon,
    type: 'password',
    value: 'password',
  },
  {
    placeholder: 'Confirm Password',
    icon: passwordPlaceHolderIcon,
    type: 'password',
    value: 'password_confirmation',
  },
];
