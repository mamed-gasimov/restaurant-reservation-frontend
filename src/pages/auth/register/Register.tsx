import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { UseFormRegister, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";

import { TextInput } from "@components/index";
import { registerSchema } from "@validationSchemas/register";
import { sendRegisterRequest } from "@services/sendRequest";
import { ROUTES } from "@router/routeNames";
import { Forms, RegisterForm } from "src/types/forms";
import registerCss from "./register.module.css";
import { RegisterApiResponse } from "src/types/apiResponse";

const Register = () => {
  const [errMsg, setErrMsg] = useState("");
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },
    resolver: yupResolver(registerSchema),
  });

  const handleRegister = async (values: RegisterForm) => {
    if (!isValid) return;

    const response = (await sendRegisterRequest(
      "/auth/register",
      values
    )) as RegisterApiResponse;

    if (response?.status === "error") {
      setErrMsg(response.data.message);
    } else if (response?.status === "success") {
      setErrMsg("");
      toast.success(response.data.message || "Successfully registered!");
      navigate(ROUTES.login);
    }
  };

  return (
    <form
      className={registerCss.registerForm}
      onSubmit={handleSubmit(handleRegister)}
    >
      <TextInput
        label="First Name"
        inputId="firstName"
        register={register as UseFormRegister<Forms>}
        errorMsg={errors.firstName?.message}
      />
      <TextInput
        label="Last Name"
        inputId="lastName"
        register={register as UseFormRegister<Forms>}
        errorMsg={errors.lastName?.message}
      />
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
        Create Account
      </button>
    </form>
  );
};

export default Register;
