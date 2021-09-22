const InputField = (props) => {
    const { placeholder,onChange, disabled ,onKeyDown, ref}= props;
    return (
        <input
            type="text"
            placeholder={placeholder}
            className="border-2 rounded-md border-green-200 text-2xl w-3/5 h-20 my-10 mx-40 pl-6"
            onChange={onChange}
            disabled={disabled}
            onKeyDown={onKeyDown}
            ref={ref}
        />
    )
}

export default InputField