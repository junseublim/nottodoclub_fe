import { ButtonProps } from "./types";

interface ToggleButtonProps extends ButtonProps {
  isToggled: boolean;
  toggledClass: string;
  unToggledClass: string;
}

const ToggleButton = ({ label, className, isToggled, toggledClass, unToggledClass, ...props }: ToggleButtonProps) => {

  return (
    <button
      className={`text-gray-900 text-base font-bold rounded-lg ${className} ${isToggled ? toggledClass : unToggledClass}`}
      {...props}
    >
      {label}
    </button>
  );
};

export default ToggleButton;
