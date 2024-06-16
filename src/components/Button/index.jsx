const Button = ({ children, type = "submit", className = "", onClick }) => {
  return (
    <button
      className={`rounded-3xl group relative inline-block focus:ring px-8 py-3 text-sm font-bold uppercase tracking-widest ${className}`}
      type={type}
      onClick={onClick}
    >
      <span className="rounded-3xl absolute inset-0 translate-x-0 translate-y-0 bg-primary transition-transform"></span>
      <span className="relative text-white">{children}</span>
    </button>
  );
};

export default Button;
