import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { UseFormRegister, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";

import { TextInput } from "@components/index";
import { registerSchema } from "@validationSchemas/register";
import { sendRequest } from "@services/sendRequest";
import { ROUTES } from "@router/routeNames";
import { Forms, RegisterForm } from "src/types/forms";
import registerCss from "./register.module.css";

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
    if (isValid) {
      const response = await sendRequest("/auth/register", values);

      if (response?.status === "error") {
        setErrMsg(response.message);
      } else if (response?.status === "success") {
        setErrMsg("");
        toast.success(response.message || "Successfully registered!");
        navigate(ROUTES.login);
      }
    }
  };

  return (
    <form
      className={registerCss.registerForm}
      onSubmit={handleSubmit(handleRegister)}
    >
      <p className={registerCss.inputContainer}>
        <TextInput
          label="First Name"
          inputId="firstName"
          register={register as UseFormRegister<Forms>}
          errorMsg={errors.firstName?.message}
        />
      </p>
      <p className={registerCss.inputContainer}>
        <TextInput
          label="Last Name"
          inputId="lastName"
          register={register as UseFormRegister<Forms>}
          errorMsg={errors.lastName?.message}
        />
      </p>
      <p className={registerCss.inputContainer}>
        <TextInput
          label="Email"
          inputId="email"
          register={register as UseFormRegister<Forms>}
          errorMsg={errors.email?.message}
        />
      </p>
      <p className={registerCss.inputContainer}>
        <TextInput
          label="Password"
          inputId="password"
          register={register as UseFormRegister<Forms>}
          type="password"
          errorMsg={errors.password?.message}
        />
      </p>
      {!!errMsg && <p className="errorSpan">{errMsg}</p>}
      <button className="btn" type="submit">
        Create Account
      </button>
    </form>
  );
};

export default Register;
