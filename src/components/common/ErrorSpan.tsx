import { HTMLAttributes } from "react";

interface ErrorSpanProps extends HTMLAttributes<HTMLSpanElement> {
  errorMessage: string;
}

const ErrorSpan = ({ errorMessage }: ErrorSpanProps) => {
  if (!errorMessage) {
    return null
  }

  return (<span className='text-red-negative text-sm font-bold'>{errorMessage}</span>);
}
 
export default ErrorSpan;