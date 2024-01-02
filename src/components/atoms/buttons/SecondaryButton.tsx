import { ButtonProps } from "./types";

const SecondaryButton = ({ label, className, ...props }: ButtonProps) => {
  return (
    <button
      className={`bg-gray-900 text-gray-0 text-base font-bold rounded-lg ${className}`}
      {...props}
    >
      {label}
    </button>
  );
};

export default SecondaryButton;
