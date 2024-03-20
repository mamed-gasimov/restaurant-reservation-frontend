import { TextInput } from "@components/index";
import registerCss from "./register.module.css";

const Register = () => {
  return (
    <form className={registerCss.registerForm}>
      <p className={registerCss.inputContainer}>
        <TextInput label="First Name" inputId="firstName" />
      </p>
      <p className={registerCss.inputContainer}>
        <TextInput label="Last Name" inputId="lastName" />
      </p>
      <p className={registerCss.inputContainer}>
        <TextInput label="Email" inputId="email" />
      </p>
      <p className={registerCss.inputContainer}>
        <TextInput label="Password" inputId="password" />
      </p>
      <button className="btn" type="submit">
        Create Account
      </button>
    </form>
  );
};

export default Register;
