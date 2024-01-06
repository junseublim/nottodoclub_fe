import { ButtonProps } from "./types";

const TextButton = ({ label, className, ...props }: ButtonProps) => {
  return (
    <button
      className={`text-gray-900 text-base ${className}`}
      {...props}
    >
      {label}
    </button>
  );
};

export default TextButton;
