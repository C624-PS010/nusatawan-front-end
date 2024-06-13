const Button = (props) => {
  // eslint-disable-next-line react/prop-types
  const {
    children,
    classname = "bg-black",
    onClick = () => {
      console.log("clicked");
    },
  } = props;
  return (
    <button
      className={`h-10 px-6 font-semibold rounded-md ${classname} hover:scale-105 duration-300 text-white`}
      type="submit"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
