import { UseFormRegister } from "react-hook-form";

import { RegisterForm } from "src/types/registerForm";

interface IProps {
  label: string;
  inputId: keyof RegisterForm;
  placeholder?: string;
  errorMsg?: string;
  register: UseFormRegister<RegisterForm>;
  type?: string;
}

const TextInput = ({
  label,
  inputId,
  placeholder,
  errorMsg,
  register,
  type,
}: IProps) => {
  return (
    <>
      <label htmlFor={inputId}>{label}</label>
      <input
        id={inputId}
        placeholder={placeholder}
        type={type || "text"}
        {...register(inputId)}
      />
      {!!errorMsg && <span style={{ color: "#d00505" }}>{errorMsg}</span>}
    </>
  );
};

export default TextInput;
