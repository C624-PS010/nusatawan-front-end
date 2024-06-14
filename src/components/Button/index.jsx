const Button = ({ children, type = "submit", className = "", onClick }) => {
  return (
    <button
      className={`rounded-3xl group relative inline-block focus:outline-none focus:ring px-8 py-3 text-sm font-bold uppercase tracking-widest border-2 border-current ${className}`}
      type={type}
      onClick={onClick}
    >
      <span className="rounded-3xl absolute inset-0 translate-x-0 translate-y-0 bg-primary transition-transform group-hover:translate-x-1.5 group-hover:translate-y-1.5"></span>
      <span className="relative">{children}</span>
    </button>
  );
};

export default Button;
