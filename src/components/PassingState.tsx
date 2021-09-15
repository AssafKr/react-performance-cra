import { useState } from "react";
import { SlowRendering } from "./Inner";

export const PassingState = () => {
  const [color, setColor] = useState("#ffffff");
  return (
    <div>
      <div style={{ color }}>{color}</div>
      <button
        onClick={() => {
          setColor(
            `rgb(${Math.round(Math.random() * 255)},  ${Math.round(
              Math.random() * 255
            )}, ${Math.round(Math.random() * 255)})`
          );
        }}
      >
        change color
      </button>
      <SlowRendering text={"Drag me 🐉"} />
    </div>
  );
};
