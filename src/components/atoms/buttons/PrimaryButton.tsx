interface ButtonProps {
  label: string;
  onClick?: () => void;
}

const PrimaryButton = ({label, onClick}: ButtonProps) => {
  return <button className="bg-primary text-gray-900 text-base font-bold w-46 px-8 py-3 rounded-lg" onClick={onClick}>
    { label }
  </button>
}
 
export default PrimaryButton;