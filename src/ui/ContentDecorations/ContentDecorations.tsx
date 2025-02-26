import type React from "react";
import type { CSSProperties, JSX } from "react";
import type { DecorationPosition } from "./ContentDecorations.types";
import "./ContentDecorations.css";

type ContentDecorationsProps = {
  decorations?: Set<DecorationPosition>;
  children: React.ReactNode;
  decorationColor?: CSSProperties["backgroundColor"];
};

const ContentDecorations: React.FC<ContentDecorationsProps> = ({
  decorations = null,
  children,
  decorationColor,
}) => {
  const decorationsArray = decorations && Array.from(decorations);

  return (
    <div className="decorations-wrapper">
      {decorationsArray?.map((decoration) => {
        return (
          <div
            key={decoration}
            className={`decoration ${decoration}`}
            style={{ backgroundColor: decorationColor }}
          />
        );
      })}
      {children}
    </div>
  );
};

export default ContentDecorations;
