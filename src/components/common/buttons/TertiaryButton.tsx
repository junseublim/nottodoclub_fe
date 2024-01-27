import { ButtonProps } from "./types";

const TertiaryButton = ({ label, className, ...props }: ButtonProps) => {
  return (
    <button
      className={`bg-gray-50 text-gray-900 text-base font-bold rounded-lg ${className}`}
      {...props}
    >
      {label}
    </button>
  );
};

export default TertiaryButton;
