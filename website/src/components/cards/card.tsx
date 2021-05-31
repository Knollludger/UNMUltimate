import React from "react";

interface CardProps {
    icon: string;
    text: string;
}

const Card:React.FC<CardProps>  = (props: CardProps) =>  {
    return (
      <div className="card">
          <p>hi</p>
      </div>
    );
}

export default Card;
