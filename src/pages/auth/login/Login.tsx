import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UseFormRegister, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";

import { TextInput } from "@components/index";
import { sendLoginRequest } from "@services/sendRequest";
import { loginSchema } from "@validationSchemas/login";
import { AuthContext } from "@context/authContext";
import { ROUTES } from "@router/routeNames";
import { Forms, LoginForm } from "src/types/forms";
import loginCss from "./login.module.css";
import { LoginApiResponse } from "src/types/apiResponse";

const Login = () => {
  const [errMsg, setErrMsg] = useState("");
  const { setAuthToken, setIsAuth, setRestaurantOwnerInfo } =
    useContext(AuthContext);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: yupResolver(loginSchema),
  });

  const handleLogin = async (values: LoginForm) => {
    if (!isValid) return;

    const response = (await sendLoginRequest(
      "/auth/login",
      values
    )) as LoginApiResponse;

    if (response?.status === "error") {
      setErrMsg(response.data.message);
    } else if (response?.status === "success") {
      setErrMsg("");
      const userObj = JSON.stringify({ userId: response.data.user._id });
      localStorage.setItem("restaurant-reservation-app", userObj);
      setAuthToken(response.data.token);
      setIsAuth(true);
      setRestaurantOwnerInfo({
        restaurantId: response.data.user.restaurant?.id || null,
        restaurantName: response.data.user.restaurant?.name || null,
      });
      toast.success(response.data.message || "Successfully logged in!");
      navigate(ROUTES.home);
    }
  };

  return (
    <form className={loginCss.loginForm} onSubmit={handleSubmit(handleLogin)}>
      <TextInput
        label="Email"
        inputId="email"
        register={register as UseFormRegister<Forms>}
        errorMsg={errors.email?.message}
      />
      <TextInput
        label="Password"
        inputId="password"
        register={register as UseFormRegister<Forms>}
        type="password"
        errorMsg={errors.password?.message}
      />
      {!!errMsg && <p className="errorSpan">{errMsg}</p>}
      <button className="btn" type="submit">
        Log In
      </button>
    </form>
  );
};

export default Login;
