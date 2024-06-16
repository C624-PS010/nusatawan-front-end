import Input from "./Input";

const InputForm = (props) => {
  const { name, type, placeholder } = props;
  return (
    <div className="relative">
      <Input name={name} type={type} placeholder={placeholder} required />
    </div>
  );
};

export default InputForm;
