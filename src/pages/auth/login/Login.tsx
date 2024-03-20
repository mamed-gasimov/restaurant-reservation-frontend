import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { TextInput } from "@components/index";
import loginCss from "./login.module.css";
import { loginSchema } from "@validationSchemas/login";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: yupResolver(loginSchema),
  });

  const handleLogin = (values: unknown) => {
    console.log(values);
  };

  return (
    <form className={loginCss.loginForm} onSubmit={handleSubmit(handleLogin)}>
      <p className={loginCss.inputContainer}>
        <TextInput
          label="Email"
          inputId="email"
          register={register}
          errorMsg={errors.email?.message}
        />
      </p>
      <p className={loginCss.inputContainer}>
        <TextInput
          label="Password"
          inputId="password"
          register={register}
          type="password"
          errorMsg={errors.password?.message}
        />
      </p>
      <button className="btn" type="submit">
        Log In
      </button>
    </form>
  );
};

export default Login;
