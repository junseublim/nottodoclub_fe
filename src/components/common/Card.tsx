import { HTMLAttributes } from "react";

const Card = ({ children, ...props }: HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className="bg-gray-50 rounded my-5 mx-10 h-32 flex justify-center items-center"
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;
