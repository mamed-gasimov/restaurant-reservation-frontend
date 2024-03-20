interface IProps {
  label?: string;
  inputId?: string;
  placeholder?: string;
}

const TextInput = ({ label, inputId, placeholder }: IProps) => {
  return (
    <>
      {label ? <label htmlFor={inputId}>{label}</label> : null}
      <input id={inputId} placeholder={placeholder} />
    </>
  );
};

export default TextInput;
