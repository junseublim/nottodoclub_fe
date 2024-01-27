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

interface ToggleButtonGroupProps<T> {
  labels: [string, string];
  values: [T, T];
  toggledClasses: [string, string];
  selected: string;
  onToggle: (value: T) => void;
}

const ToggleButtonGroup = <T,>({labels, values, toggledClasses, selected, onToggle}: ToggleButtonGroupProps<T>) => {
  const isToggled = (value: T) => value === selected

  return (
    <div className="h-20">
      <ToggleButton
        className="w-1/2 py-3"
        label={labels[0]}
        isToggled={isToggled(values[0])}
        toggledClass={toggledClasses[0]}
        unToggledClass="bg-gray-50 text-gray-500"
        onClick={() => onToggle(values[0])}
      />
      <ToggleButton
        className="w-1/2 py-3"
        label={labels[1]}
        isToggled={isToggled(values[1])}
        toggledClass={toggledClasses[1]}
        unToggledClass="bg-gray-50 text-gray-500"
        onClick={() => onToggle(values[1])}
      />
    </div>
  );
}
 
export default ToggleButtonGroup;