const Button = (props) => {
  // eslint-disable-next-line react/prop-types
  const { children, type = "submit", classname = "bg-black", onClick } = props;
  return (
    <button
      className={`h-10 px-6 font-semibold rounded-md ${classname} hover:scale-105 duration-300 text-white`}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
