import type React from "react";
import "./Card.css";

type CardProps = {
  title: string;
  description: string;
  date: Date;
};

const Card: React.FC<CardProps> = ({ title, description, date }) => {
  const day = date.getDate();
  const month = date.toLocaleDateString("default", { month: "long" });

  return (
    <a href="#" className="card">
      <div className="card__wrapper">
        <div className="card__content">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
        <div className="card__date date">
          <span className="date__month">{month}</span>
          <span className="date__day">{day}</span>
        </div>
      </div>
    </a>
  );
};

export default Card;
