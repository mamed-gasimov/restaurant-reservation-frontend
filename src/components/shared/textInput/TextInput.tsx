import { UseFormRegister } from "react-hook-form";

import { Forms } from "src/types/forms";
import textInputCss from "./textInput.module.css";

interface IProps {
  label: string;
  inputId: string;
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
    <p className={textInputCss.inputContainer}>
      <label htmlFor={inputId}>{label}</label>
      {type === "date" ? (
        <input
          id={inputId}
          placeholder={placeholder}
          type={type || "text"}
          min={new Date().toISOString().split("T")[0]}
          {...register(inputId as never)}
        />
      ) : (
        <input
          id={inputId}
          placeholder={placeholder}
          type={type || "text"}
          {...register(inputId as never)}
        />
      )}
      {!!errorMsg && <span className="errorSpan">{errorMsg}</span>}
    </p>
  );
};

export default TextInput;
