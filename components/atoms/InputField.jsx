import { useRef, forwardRef } from 'react';
export const InputField = (props) => {
    const { placeholder, onChange, disabled, onKeyDown } = props;
    const inputRef = useRef();
    return (
        <input
            type="text"
            placeholder={placeholder}
            className="border-2 rounded-md border-green-200 text-2xl w-3/5 h-20 my-10 mx-40 pl-6"
            onChange={onChange}
            disabled={disabled}
            onKeyDown={onKeyDown}
        />
    )
}

export default InputField;