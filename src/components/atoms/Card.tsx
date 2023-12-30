import { HTMLAttributes } from "react";

interface CardProps extends HTMLAttributes<HTMLDivElement> {}

const Card = ({children, ...props}: CardProps ) => {
  return <div className='bg-gray-50 rounded my-5 mx-10 h-32 flex justify-center items-center' {...props}>
    {children}
  </div>
}
 
export default Card;