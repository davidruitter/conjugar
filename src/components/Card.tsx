import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
}

const Card = (props: CardProps) => {
  return (
    <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8">
      {props.children}
    </div>
  );
};

export default Card;
