import Input from "./Input";

const InputForm = (props) => {
  // eslint-disable-next-line react/prop-types
  const { name, type, placeholder } = props;
  return (
    <div className="relative">
      <Input name={name} type={type} placeholder={placeholder} required />
    </div>
  );
};

export default InputForm;
