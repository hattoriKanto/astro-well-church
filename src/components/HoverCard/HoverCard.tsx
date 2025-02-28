import type React from "react";
import "./HoverCard.css";

type HoverCardProps = {
  link: string;
  title: string;
};

const HoverCard: React.FC<HoverCardProps> = ({ link, title }) => {
  return (
    <a href={link} className="hover-cards__link">
      <article className="hover-cards__card">
        <h3 className="hover-cards__title">{title}</h3>
      </article>
    </a>
  );
};

export default HoverCard;
