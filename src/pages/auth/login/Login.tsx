import { TextInput } from "@components/index";
import loginCss from "./login.module.css";

const Login = () => {
  return (
    <form className={loginCss.loginForm}>
      <p className={loginCss.inputContainer}>
        <TextInput label="Email" inputId="email" />
      </p>
      <p className={loginCss.inputContainer}>
        <TextInput label="Password" inputId="password" />
      </p>
      <button className="btn" type="submit">
        Log In
      </button>
    </form>
  );
};

export default Login;
