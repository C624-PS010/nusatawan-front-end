const Input = (props) => {
    // eslint-disable-next-line react/prop-types
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
