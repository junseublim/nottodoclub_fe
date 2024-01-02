interface TextAreaInputProps {
  value: string;
  hasError: boolean;
  errorMessage: string;
  placeholder: string;
  onChange: (newValue: string) => void;
}

const TextAreaInput = ({ value, onChange, placeholder, hasError, errorMessage }: TextAreaInputProps) => {
   const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    onChange && onChange(e.target.value);
   };
  
  return (
    <>
    <textarea
      value={value}
      onChange={handleChange}
      placeholder={placeholder}
      className={`border border-gray-300 p-2 rounded-md w-full ${hasError ? 'border-red-negative' : ''}`}
      />
      {hasError && <span className='text-red-negative text-sm font-bold'>{errorMessage}</span>}
    </>
  );
};

export default TextAreaInput;