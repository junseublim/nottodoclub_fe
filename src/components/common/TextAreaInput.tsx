import { HTMLAttributes } from "react";

interface TextAreaInputProps extends HTMLAttributes<HTMLTextAreaElement> {
  value: string;
  hasError: boolean;
  placeholder: string;
  onTextChange: (value: string) => void;
}

const TextAreaInput = ({ value, onTextChange, placeholder, hasError }: TextAreaInputProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    onTextChange(e.target.value);
  }

  return (
    <textarea
      value={value}
      onChange={handleChange}
      placeholder={placeholder}
      className={`border border-gray-300 p-2 rounded-md w-full ${hasError ? 'border-red-negative' : ''}`}
    />
  );
};

export default TextAreaInput;