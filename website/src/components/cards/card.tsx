import { FC, useState } from "react";
import "./card.css";
import { Collapse } from "react-bootstrap";
interface CardProps {
  icon: FC;
  title: string;
  text: string;
}

const Card: FC<CardProps> = (props: CardProps) => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <div className="app-card" onClick={() => setOpen(!open)}>
        <props.icon></props.icon>
        {props.title}
        <props.icon></props.icon>
      </div>
      <Collapse in={open} className="app-body">
        <div>{props.text}</div>
      </Collapse>
    </div>
  );
};

export default Card;
