import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { TextInput } from "@components/index";
import { registerSchema } from "@validationSchemas/register";
import registerCss from "./register.module.css";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },
    resolver: yupResolver(registerSchema),
  });

  const handleRegister = (values: unknown) => {
    console.log(values);
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
          register={register}
          errorMsg={errors.firstName?.message}
        />
      </p>
      <p className={registerCss.inputContainer}>
        <TextInput
          label="Last Name"
          inputId="lastName"
          register={register}
          errorMsg={errors.lastName?.message}
        />
      </p>
      <p className={registerCss.inputContainer}>
        <TextInput
          label="Email"
          inputId="email"
          register={register}
          errorMsg={errors.email?.message}
        />
      </p>
      <p className={registerCss.inputContainer}>
        <TextInput
          label="Password"
          inputId="password"
          register={register}
          type="password"
          errorMsg={errors.password?.message}
        />
      </p>
      <button className="btn" type="submit">
        Create Account
      </button>
    </form>
  );
};

export default Register;
