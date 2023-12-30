import { ButtonProps } from "./types";

const PrimaryButton = ({ label, className, ...props }: ButtonProps) => {
  return <button
    className={`bg-primary text-gray-900 text-base font-bold rounded-lg ${className}`}
    {...props}
  >
    { label }
  </button>
}
 
export default PrimaryButton;