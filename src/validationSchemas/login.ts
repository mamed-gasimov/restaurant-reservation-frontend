import * as yup from "yup";

export const loginSchema = yup.object().shape({
  email: yup
    .string()
    .trim()
    .email("Incorrect email!")
    .required("Email is a required field!"),
  password: yup
    .string()
    .trim()
    .min(8, "Password must be at least 8 characters long!")
    .max(32, "Password can not be more than 32 characters long!")
    .required("Password is a required field!"),
});
