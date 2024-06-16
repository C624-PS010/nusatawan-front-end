const Input = (props) => {
  const { type, placeholder, name } = props;
  return (
    <input
      type={type}
      className="p-2 bg-slate-100 rounded-xl border w-full"
      placeholder={placeholder}
      name={name}
      id={name}
    />
  );
};

export default Input;
