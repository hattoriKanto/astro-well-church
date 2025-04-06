import type React from "react";
import "./Button.css";

type FormButtonProps = {
  backgroundColor?: string;
  color?: "blue" | "black";
  children: React.ReactNode;
};

const FormButton: React.FC<FormButtonProps> = ({
  backgroundColor = "var(--white)",
  color = "black",
  children,
}) => {
  return (
    <button
      type="submit"
      className={`button button-${color}`}
      style={{ backgroundColor }}
    >
      <span className="top-key" style={{ backgroundColor }}></span>
      <span className="text">{children}</span>
      <span className="bottom-key-1" style={{ backgroundColor }}></span>
      <span className="bottom-key-2" style={{ backgroundColor }}></span>
    </button>
  );
};

export default FormButton;
