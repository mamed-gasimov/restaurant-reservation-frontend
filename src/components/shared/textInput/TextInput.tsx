import { UseFormRegister } from "react-hook-form";

import { Forms, RegisterForm } from "src/types/forms";

interface IProps {
  label: string;
  inputId: keyof RegisterForm;
  placeholder?: string;
  errorMsg?: string;
  register: UseFormRegister<Forms>;
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
      {!!errorMsg && <span className="errorSpan">{errorMsg}</span>}
    </>
  );
};

export default TextInput;
